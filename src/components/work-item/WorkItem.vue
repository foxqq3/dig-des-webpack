<template>
  <div
    class="work-item"
    @mouseenter="handleMouseEnterItem"
    @mouseleave="handleMouseLeaveItem"
  >
    <div class="work-item__info">
      <div class="work-item__name-wrapper">
        <span class="work-item__name" :title="info.name" @click="handleNameClick">
          {{ info.name }}
        </span>
        <AvatarIcon
          v-if="info.executor"
          :picture="info.executor.picture"
          :name="info.executor.name"
        />
      </div>
      <div class="work-item__description">
        <div class="work-item__description-wrapper">
          <span
            v-if="this.info.project || this.info.code"
            class="work-item__number"
            :title="info.code"
          >
            {{ code }}
          </span>
          <span class="work-item__state">
            {{ info.author.name }} создал(а) {{ info.dateCreated }}
          </span>
          <StateItem v-if="info.status" :status="info.status" />
        </div>
        <span v-if="info.dateEdited" class="work-item__state">
          {{ info.authorEdited.name }} изменил(а) {{ info.dateEdited }}
        </span>
      </div>
    </div>
    <DropdownButton
      v-if="
        (dropdownStatus || hoverStatus) &&
        (isAdmin || (isUser && info.author._id === this.user._id))
      "
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
</template>

<script>
import { mapGetters, mapState } from "vuex";

import AvatarIcon from "@/components/avatar-icon/AvatarIcon.vue";
import StateItem from "@/components/state-item/StateItem.vue";
import DropdownButton from "@/components/dropdown/dropdown-button/DropdownButton.vue";

export default {
  name: "WorkItem",

  components: {
    AvatarIcon,
    StateItem,
    DropdownButton,
  },

  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
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
    };
  },

  computed: {
    ...mapGetters(["isUser", "isAdmin"]),
    ...mapState(["user"]),
    code() {
      if (this.info.project) {
        return `${this.info.project.code}#${this.info.number}`;
      }

      if (this.info.code) {
        return `#${this.info.code}`;
      }
    },
  },

  methods: {
    // handleMouseEnter(event) {
    //   console.log(event.target);
    //   const isTextClamped = (element) => element.scrollHeight > element.clientHeight;
    //   console.log(isTextClamped(event.target));
    //   return isTextClamped;
    // },
    handleDropdownButtonClick(status) {
      this.dropdownStatus = status;
    },

    handleOutsideDropdownButtonClick(status) {
      this.dropdownStatus = status;
    },

    handleMouseEnterItem() {
      this.hoverStatus = true;
    },

    handleMouseLeaveItem() {
      this.hoverStatus = false;
    },

    handleActiveItemChange(activeValue) {
      if (activeValue === "delete") {
        this.$emit("onDeleteClick", this.info);
      }

      if (activeValue === "edit") {
        this.$emit("onEditClick", this.info);
      }
    },

    handleNameClick() {
      this.$emit("onNameClick", this.info);
    },
  },
};
</script>
