<template>
  <div class="panel-filter-work-items">
    <VInput @input="handleInput" isSearch placeholder="Поиск..." />
    <VButton svgName="filter" theme="secondary" isSmall />
    <div class="panel-filter-work-items__ordering-and-sorting">
      <VSelect
        :activeValues="selectActiveValues"
        :options="selectOptions"
        @onChange="handleSelectChange"
      />
      <VButton svgName="sort-up" isSmall theme="secondary" />
    </div>
    <VButton text="Добавить" theme="secondary" @onClick="handleAddItemClick" />
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import VSelect from "@/components/v-select/VSelect.vue";

export default {
  name: "PanelFirlterWorkItems",

  components: { VButton, VInput, VSelect },

  data() {
    return {
      inputValue: "",

      selectActiveValues: "name",
      selectOptions: [
        {
          value: "name",
          name: "По названию",
        },
        {
          value: "author",
          name: "По автору",
        },
        {
          value: "status",
          name: "По статусу",
        },
        {
          value: "executor",
          name: "По исполнителю",
        },
        {
          value: "createdAt",
          name: "По дате создания",
        },
        {
          value: "updatedAt",
          name: "По дате обновления",
        },
      ],
    };
  },

  methods: {
    handleInput(value) {
      this.inputValue = value;
    },

    handleSelectChange(newActiveValues) {
      this.selectActiveValues = newActiveValues;
    },

    handleAddItemClick() {
      this.$emit("onAdd");
    },
  },
};
</script>
