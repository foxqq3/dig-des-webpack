<template>
  <div
    class="profile-image"
    @mouseenter="handleMouseEnterImage"
    @mouseleave="handleMouseLeaveImage"
  >
    <span class="profile-image__initials">{{ initials }}</span>
    <img
      v-if="avatar"
      :src="avatar"
      class="profile-image__image"
      alt="Фото пользователя"
    />
    <div class="profile-image__button">
      <DropdownButton
        v-if="(dropdownStatus || hoverStatus) && hasAvatarSet"
        :options="dropdownButtonOptions"
        buttonTheme="secondary"
        buttonSvgName="browse"
        buttonIsSmall
        :activeValue="dropdownButtonActiveValue"
        @onChange="handleActiveItemChange"
        @onClickOutside="handleClickOutsideDropdownButton"
        @onClickButton="handleClickDropdownButton"
      />
    </div>
  </div>
</template>

<script>
import { BASE_URL } from "@/data";
import DropdownButton from "@/components/dropdown/dropdown-button/DropdownButton.vue";
import travolta from "@/assets/images/travolta.jpg";

export default {
  name: "ProfileImage",

  components: {
    DropdownButton,
  },

  props: {
    picture: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },

    hasAvatarSet: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      image: travolta,

      dropdownButtonActiveValue: "",

      dropdownStatus: false,

      hoverStatus: false,

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
    };
  },

  computed: {
    avatar() {
      if (this.picture) {
        return `${BASE_URL}${this.picture}`;
      }
      return "";
    },

    initials() {
      if (this.name && this.name.split(" ").length > 1) {
        let nameAsArray = this.name.split(" ");
        return nameAsArray[0][0] + nameAsArray[1][0];
      }
    },
  },

  methods: {
    handleClickDropdownButton(status) {
      this.dropdownStatus = status;
    },

    handleClickOutsideDropdownButton(status) {
      this.dropdownStatus = status;
    },

    handleMouseEnterImage() {
      this.hoverStatus = true;
    },

    handleMouseLeaveImage() {
      this.hoverStatus = false;
    },

    handleActiveItemChange(newActiveValue) {
      this.dropdownButtonActiveValue = newActiveValue;
    },
  },
};
</script>
