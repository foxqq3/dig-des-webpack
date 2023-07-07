<template>
  <header class="navigation-panel">
    <nav>
      <ul class="navigation-panel__menu">
        <li v-for="item in menuItems" :key="item">
          <VButton theme="menu" :text="item" />
        </li>
      </ul>
    </nav>
    <DropdownButton
      :buttonSettings="buttonSettings"
      :dropdownItemSettings="dropdownItemSettings"
    />
  </header>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";

import DropdownButton from "@/components/dropdown-button/DropdpwnButton.vue";

export default {
  name: "NavigationPanel",

  components: {
    VButton,
    DropdownButton,
  },

  data() {
    return {
      menuItems: ["Проекты", "Задачи", "Пользователи"],

      buttonSettings: {
        image: "Траволта",
        theme: "profile",
      },

      dropdownItemSettings: [
        {
          value: 1,
          name: "Профиль",
        },
        {
          value: 2,
          name: "Выход",
        },
      ],
    };
  },
};
</script>
