<template>
  <PageWrapper>
    <PanelFilterItems
      isUsersItems
      :sortOrder="sort"
      @onSearchChange="handleSearchChange"
      @onOrderChange="handleOrderChange"
    ></PanelFilterItems>
    <ul class="users-page__users-list">
      <li v-for="user in users" :key="user.id">
        <div
          class="users-page__user-item"
          @mouseenter="handleMouseEnterItem"
          @mouseleave="handleMouseLeaveItem"
        >
          <div class="users-page__user-info">
            <div class="users-page__user-info-wrapper">
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
    <Pagination></Pagination>
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

export default {
  name: "UsersPage",

  components: {
    PageWrapper,
    AvatarIcon,
    DropdownButton,
    StateItem,
    PanelFilterItems,
    Pagination,
  },

  computed: {
    ...mapGetters(["isUser", "isAdmin"]),
    ...mapState(["user"]),
  },

  data() {
    return {
      sort: "desc",
      search: "",
      users: [],

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

  methods: {
    handleSearchChange(value) {
      this.search = value;
      this.loadUsersWithDebounce();
    },

    handleOrderChange(value) {
      this.sort = value;
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

    async loadUsers() {
      this.isLoading = true;
      this.users = [];
      try {
        const usersResponse = await axios.post(`${BASE_API_URL}/users/search`, {
          page: 1,
          limit: 10,
          filter: {
            name: this.search || undefined,
          },
          sort: this.sort || undefined,
        });

        this.users = [...usersResponse.data.users];
        if (!users.length) return;
      } catch (error) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },

  created() {
    this.loadUsersWithDebounce = debounce(function () {
      this.loadUsers();
    }, 500);
  },

  mounted() {
    this.loadUsers();
  },
};
</script>
