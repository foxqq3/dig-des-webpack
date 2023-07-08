<template>
  <div class="profile-user">
    <div class="profile-user__image">
      <ProfileImage />
    </div>
    <div class="profile-user__main-content">
      <div class="profile-user__content-header">
        <div class="profile-user__content-header-wrapper">
          <h2 class="profile-user__name">{{ userName }}</h2>
          <StateItem :status="userStatus" />
        </div>
        <DropdownButton
          :buttonSettings="buttonSettings"
          :dropdownItemSettings="dropdownItemSettings"
          @clickOutside="handleClickOutside"
          @clickButton="handleClickButton"
        />
      </div>
      <div class="profile-user__about">
        <span class="profile-user__about-title"> О себе: </span>
        <p class="profile-user__about-text">{{ userAbout }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileImage from "@/components/profile/profile-image/ProfileImage.vue";
import DropdownButton from "@/components/dropdown/dropdown-button/DropdpwnButton.vue";
import StateItem from "@/components/state-item/StateItem.vue";

export default {
  name: "ProfileUser",

  components: {
    ProfileImage,
    DropdownButton,
    StateItem,
  },

  props: {
    userName: {
      type: String,
      default: "Имя пользователя",
    },

    userStatus: {
      type: String,
      default: "Активен",
    },

    userAbout: {
      type: String,
      default: "Описание пользователя",
    },
  },

  data() {
    return {
      dropdownStatus: false,

      hoverStatus: false,

      buttonSettings: {
        theme: "secondary",
        isSmall: true,
        svgName: "browse",
      },

      dropdownItemSettings: [
        {
          value: 1,
          name: "Редактировать",
        },
        {
          value: 2,
          name: "Удалить",
          isError: true,
        },
      ],
    };
  },

  methods: {
    handleClickButton(status) {
      this.dropdownStatus = status;
    },

    handleClickOutside(status) {
      this.dropdownStatus = status;
    },
  },
};
</script>
