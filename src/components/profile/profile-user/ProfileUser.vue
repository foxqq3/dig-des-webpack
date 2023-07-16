<template>
  <div class="profile-user">
    <div class="profile-user__image">
      <ProfileImage :name="userName" :picture="userPicture" />
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
        <p class="profile-user__about-text">{{ userDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

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

  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isAdmin", "isUser"]),
    userName() {
      return (this.user && this.user.name) || "Имя пользователя";
    },
    userStatus() {
      return (this.user && this.user.status) || "ACTIVE";
    },
    userDescription() {
      return (this.user && this.user.description) || "Описание пользователя";
    },
    userPicture() {
      return (this.user && this.user.picture) || undefined;
    },
  },

  methods: {
    handleActiveItemChange(newActiveValue) {
      this.dropdownButtonActiveValue = newActiveValue;
    },
  },

  created() {
    this.$store.dispatch("loadCurrentUser");
  },
};
</script>
