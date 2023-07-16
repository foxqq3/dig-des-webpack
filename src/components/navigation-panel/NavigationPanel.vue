<template>
  <header class="navigation-panel">
    <nav>
      <ul class="navigation-panel__menu">
        <li>
          <VButton
            theme="menu"
            text="Проекты"
            :isActive="$route.path.includes('projects')"
            @onClick="handleClickNavigationPanel('projects-page')"
          />
        </li>
        <li>
          <VButton
            theme="menu"
            text="Задачи"
            :isActive="$route.path.includes('tasks')"
            @onClick="handleClickNavigationPanel('tasks-page')"
          />
        </li>
        <li>
          <VButton
            theme="menu"
            text="Пользователи"
            :isActive="$route.path.includes('users')"
            @onClick="handleClickNavigationPanel('users-page')"
          />
        </li>
      </ul>
    </nav>
    <div :class="{ 'navigation-panel__profile-button': $route.name === 'profile-page' }">
      <DropdownButton
        :buttonUserName="user.name"
        :buttonPicture="user.picture"
        :options="dropdownButtonOptions"
        buttonTheme="profile"
        :activeValue="dropdownButtonActiveValue"
        @onChange="handleActiveItemChange"
      />
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

import VButton from "@/components/v-button/VButton.vue";
import DropdownButton from "@/components/dropdown/dropdown-button/DropdownButton.vue";

export default {
  name: "NavigationPanel",

  components: {
    VButton,
    DropdownButton,
  },

  data() {
    return {
      dropdownButtonActiveValue: "",

      dropdownButtonOptions: [
        {
          value: "profile",
          name: "Профиль",
        },
        {
          value: "exit",
          name: "Выход",
        },
      ],
    };
  },

  computed: {
    ...mapState(["user"]),
  },

  methods: {
    handleActiveItemChange(newActiveValue) {
      if (newActiveValue === "profile" && this.$route.name !== "profile-page") {
        this.$router.push({ name: "profile-page" });
      }

      if (newActiveValue === "exit") {
        localStorage.removeItem("token");
        this.$store.commit("clearUser");
        this.$router.push({ name: "login-page" });
      }
    },

    handleClickNavigationPanel(pageName) {
      if (this.$route.name === pageName) return;

      this.$router.push({ name: pageName });
    },
  },
};
</script>
