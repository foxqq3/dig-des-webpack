<template>
  <div class="panel-filter-work-items">
    <VInput isSearch placeholder="Поиск..." @change="handleSearchChange" />
    <VButton v-if="hasAdditionalFilters" svgName="filter" theme="secondary" isSmall />
    <div class="panel-filter-work-items__ordering-and-sorting">
      <VSelect
        :activeValues="sortField"
        :options="sortFieldOptions"
        @onChange="handleSelectChange"
      />
      <VButton
        :svgName="orderButtonSvg"
        isSmall
        theme="secondary"
        @onClick="handleSortOrder"
      />
    </div>
    <VButton text="Добавить" theme="secondary" @onClick="handleAddButtonClick" />
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import VSelect from "@/components/v-select/VSelect.vue";

export default {
  name: "PanelFilterWorkItems",

  components: { VButton, VInput, VSelect },

  props: {
    sortFieldOptions: {
      type: Array,
      default: () => [],
    },

    sortField: {
      type: String,
      default: "",
    },

    hasAdditionalFilters: {
      type: Boolean,
      default: false,
    },

    sortOrder: {
      type: String,
      default: "desc",
      validator: function (value) {
        return ["desc", "asc"].includes(value);
      },
    },
  },

  data() {
    return {
      inputValue: "",
    };
  },

  computed: {
    orderButtonSvg() {
      return this.sortOrder === "asc" ? "sort-up" : "sort-down";
    },
  },

  methods: {
    handleSearchChange(value) {
      this.$emit("onSearchChange", value);
    },

    handleSelectChange(newActiveValues) {
      this.$emit("onSortFieldChange", newActiveValues);
    },

    handleSortOrder() {
      const newSortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      this.$emit("onOrderChange", newSortOrder);
    },

    handleAddButtonClick() {
      this.$emit("onAddButtonClick");
    },
  },
};
</script>
