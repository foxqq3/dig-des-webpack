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
          :options="dropdownButtonOptions"
          buttonTheme="secondary"
          buttonSvgName="browse"
          buttonIsSmall
          :activeValue="dropdownButtonActiveValue"
          @onChange="handleActiveItemChange"
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
import DropdownButton from "@/components/dropdown/dropdown-button/DropdownButton.vue";
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
      default: "ACTIVE",
    },

    userAbout: {
      type: String,
      default: "Описание пользователя",
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
          value: "change-password",
          name: "Изменить пароль",
        },
        {
          value: "check-user-tasks",
          name: "Просмотр задач пользователя",
        },
      ],
    };
  },

  methods: {
    handleActiveItemChange(newActiveValue) {
      this.dropdownButtonActiveValue = newActiveValue;
    },
  },
};
</script>
