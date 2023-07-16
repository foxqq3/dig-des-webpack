<template>
  <PageWrapper>
    <PanelFilterItems
      isUsersItems
      :sortOrder="sort"
      :search="search"
      @onSearchChange="handleSearchChange"
      @onOrderChange="handleOrderChange"
    ></PanelFilterItems>
    <ul v-if="users.length && !isLoading && !isError" class="users-page__users-list">
      <li v-for="user in users" :key="user.id">
        <div
          class="users-page__user-item"
          @mouseenter="handleMouseEnterItem"
          @mouseleave="handleMouseLeaveItem"
        >
          <div class="users-page__user-info">
            <div class="users-page__user-info-wrapper" @click="handleUserClick(user._id)">
              <AvatarIcon :name="user.name" :picture="user.picture" />
              <div class="span">{{ user.name }}</div>
            </div>
            <StateItem :status="user.status" />
          </div>
          <DropdownButton
            v-if="(dropdownStatus || hoverStatus) && isAdmin"
            :options="dropdownButtonOptions"
            buttonTheme="secondary"
            buttonSvgName="browse"
            buttonIsSmall
            :activeValue="dropdownButtonActiveValue"
            @onChange="handleActiveItemChange"
            @onClickOutside="handleOutsideDropdownButtonClick"
            @onClickButton="handleDropdownButtonClick"
          />
        </div>
      </li>
    </ul>
    <Pagination
      v-if="totalPages > 1 && !isLoading && !isError"
      :currentPage="Number(currentPage)"
      :totalPages="totalPages"
      @onPageChange="handlePageChange"
    ></Pagination>
    <Preloader v-if="isLoading" />
  </PageWrapper>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";
import { mapGetters, mapState } from "vuex";
import { debounce } from "@/helper";

import PageWrapper from "@/components/wrappers/page-wrapper/PageWrapper.vue";
import AvatarIcon from "@/components/avatar-icon/AvatarIcon.vue";
import DropdownButton from "@/components/dropdown/dropdown-button/DropdownButton.vue";
import StateItem from "@/components/state-item/StateItem.vue";
import PanelFilterItems from "@/components/panel-filter-items/PanelFilterItems.vue";
import Pagination from "@/components/pagination/Pagination.vue";
import Preloader from "@/components/preloader/Preloader.vue";

export default {
  name: "UsersPage",

  components: {
    PageWrapper,
    AvatarIcon,
    DropdownButton,
    StateItem,
    PanelFilterItems,
    Pagination,
    Preloader,
  },

  data() {
    return {
      users: [],
      totalPages: 2,

      dropdownButtonActiveValue: "",
      dropdownButtonOptions: [
        {
          value: "edit",
          name: "Редактировать",
        },
        {
          value: "delete",
          name: "Удалить",
          isError: true,
        },
      ],
      dropdownStatus: false,
      hoverStatus: false,

      isLoading: false,
      isError: false,
    };
  },

  computed: {
    ...mapGetters(["isUser", "isAdmin"]),
    ...mapState(["user"]),

    query() {
      return this.$route.query;
    },

    currentPage() {
      return this.query.currentPage || 1;
    },

    sort() {
      return this.query.sort || "asc";
    },

    search() {
      return this.query.search || undefined;
    },
  },

  methods: {
    handleSearchChange(value) {
      this.$router.push({ query: { ...this.query, search: value || undefined } });
      this.loadUsersWithDebounce();
    },

    handleOrderChange(value) {
      this.$router.push({ query: { ...this.query, sort: value } });
      this.loadUsers();
    },

    handleOutsideDropdownButtonClick(status) {
      this.dropdownStatus = status;
    },

    handleDropdownButtonClick(status) {
      this.dropdownStatus = status;
    },

    handleActiveItemChange(activeValue) {
      if (activeValue === "edit") {
        alert("Изменить");
      }

      if (activeValue === "delete") {
        alert("Удалить");
      }
    },

    handleMouseEnterItem() {
      this.hoverStatus = true;
    },

    handleMouseLeaveItem() {
      this.hoverStatus = false;
    },

    handlePageChange(value) {
      this.$router.push({ query: { ...this.query, currentPage: value } });
      this.loadUsers();
    },

    handleUserClick(userId) {
      this.$router.push({ name: "user-page", params: { id: userId } });
    },

    async loadUsers() {
      this.isLoading = true;
      this.users = [];
      try {
        const usersResponse = await axios.post(`${BASE_API_URL}/users/search`, {
          page: this.currentPage,
          limit: 10,
          filter: {
            name: this.search,
          },
          sort: this.sort,
        });

        this.users = [...usersResponse.data.users];
        this.totalPages = usersResponse.data.total;

        console.log(this.users);
      } catch (error) {
        this.isError = true;
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  created() {
    this.loadUsersWithDebounce = debounce(function () {
      this.loadUsers();
    }, 500);

    this.loadUsers();
  },

  mounted() {
    this.loadUsers();
  },
};
</script>
