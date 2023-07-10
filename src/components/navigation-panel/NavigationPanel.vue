<template>
  <header class="navigation-panel">
    <nav>
      <ul class="navigation-panel__menu">
       <li>
            <VButton theme="menu" text="Проекты" />
        </li>
        <li>
            <VButton theme="menu" text="Задачи" />
        </li>
        <li>
          <VButton theme="menu" text="Пользователи" />
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

import DropdownButton from "@/components/dropdown/dropdown-button/DropdpwnButton.vue";

export default {
  name: "NavigationPanel",

  components: {
    VButton,
    DropdownButton,
  },

  data() {
    return {

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
