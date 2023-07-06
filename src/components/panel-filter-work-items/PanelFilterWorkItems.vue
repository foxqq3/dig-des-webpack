<template>
  <div class="panel-filter-work-items">
    <VInput @input="handleInput" isSearch />
    <VButton svgName="filter" theme="secondary" isSmall />
    <div class="panel-filter-work-items__select-button">
      <DropdownMenu
        :selectSettings="selectSettings"
        :dropdownItemSettings="dropdownItemSettings"
        isSelectButton
      />
    </div>
    <VButton text="Добавить" theme="secondary" />
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import SelectButton from "@/components/select-button/SelectButton.vue";
import DropdownMenu from "@/components/dropdown-menu/DropdownMenu.vue";

export default {
  name: "PanelFirlterWorkItems",

  components: { VButton, VInput, SelectButton, DropdownMenu },

  data() {
    return {
      inputValue: "",

      dropdownItemSettings: [
        {
          value: 1,
          name: "По названию",
        },
        {
          value: 2,
          name: "По автору",
        },
        {
          value: 3,
          name: "По статусу",
        },
        {
          value: 4,
          name: "По исполнителю",
        },
        {
          value: 5,
          name: "По дате создания",
        },
        {
          value: 6,
          name: "По дате обновления",
        },
      ],

      selectSettings: {
        defaultValue: "",
        isSort: true,
      },
    };
  },

  methods: {
    handleInput(value) {
      this.inputValue = value;
    },
  },
};
</script>
