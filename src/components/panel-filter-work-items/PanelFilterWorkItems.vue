<template>
  <div class="panel-filter-work-items">
    <VInput @input="handleInput" isSearch placeholder="Поиск..."/>
    <VButton svgName="filter" theme="secondary" isSmall />
    <div class="panel-filter-work-items__select-button">
      <DropdownSelect
        :selectSettings="selectSettings"
        :dropdownItemSettings="dropdownItemSettings"
      />
    </div>
    <VButton text="Добавить" theme="secondary" />
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import SelectButton from "@/components/select-button/SelectButton.vue";
import DropdownSelect from "@/components/dropdown/dropdown-select/DropdownSelect.vue";

export default {
  name: "PanelFirlterWorkItems",

  components: { VButton, VInput, SelectButton, DropdownSelect},

  data() {
    return {
      inputValue: "",

      dropdownItemSettings: [
        {
          value: 1,
          name: "По названию",
          isActive: true,
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
        sort: 'up',
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
