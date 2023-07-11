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
          <VButton theme="menu" text="Пользователи" />
        </li>
      </ul>
    </nav>
    <div :class="{ 'navigation-panel__profile-button': $route.name === 'profile-page' }">
      <DropdownButton
        :options="dropdownButtonOptions"
        buttonTheme="profile"
        buttonImage="Траволта"
        :activeValue="dropdownButtonActiveValue"
        @onChange="handleActiveItemChange"
      />
    </div>
  </header>
</template>

<script>
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

  methods: {
    handleActiveItemChange(newActiveValue) {
      this.dropdownButtonActiveValue = newActiveValue;

      if (newActiveValue === "profile" && this.$route.name !== "profile-page") {
        this.$router.push({ name: "profile-page" });
      }
    },

    handleClickNavigationPanel(pageName) {
      if (this.$route.name === pageName) return;

      this.$router.push({ name: pageName });
    },
  },
};
</script>
