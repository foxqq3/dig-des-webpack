<template>
  <header class="navigation-panel">
    <nav>
      <ul class="navigation-panel__menu">
        <li v-for="item in menuItems" :key="item">
          <VButton theme="menu" :text="item" />
        </li>
      </ul>
    </nav>
    <DropdownMenu
      :buttonSettings="buttonSettings"
      :dropdownItemSettings="dropdownItemSettings"
    />
  </header>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import DropdownMenu from "@/components/dropdown-menu/DropdownMenu.vue";

export default {
  name: "NavigationPanel",

  components: {
    VButton,
    DropdownMenu,
  },

  data() {
    return {
      menuItems: ["Проекты", "Задачи", "Пользователи"],

      buttonSettings: {
        image: "Траволта",
        svgName: "arrow-down",
        theme: "profile",
      },
      dropdownItemSettings: [
        {
          id: 1,
          name: "Профиль",
          isActive: false,
        },
        {
          id: 2,
          name: "Выход",
          isActive: false,
        },
      ],
    };
  },
};
</script>
