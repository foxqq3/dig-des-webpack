<template>
  <div class="panel-filter-items">
    <VInput isSearch placeholder="Поиск..." @change="handleSearchChange" />
    <DropdownFilters v-if="hasAdditionalFilters" />
    <div :class="[{ 'panel-filter-items__ordering-and-sorting': !isUsersItems }]">
      <VSelect
        v-if="!isUsersItems"
        :activeValues="sortField"
        :options="sortFieldOptions"
        @onChange="handleSelectChange"
      />
      <div :class="[{ 'panel-filter-items__button-wrapper': !isUsersItems }]">
        <VButton
          :svgName="orderButtonSvg"
          isSmall
          theme="secondary"
          @onClick="handleSortOrder"
        />
      </div>
    </div>

    <VButton
      v-if="!isUsersItems"
      text="Добавить"
      theme="secondary"
      @onClick="handleAddButtonClick"
    />

    <VButton
      v-if="isUsersItems && isAdmin"
      text="Добавить пользователя"
      @onClick="handleAddButtonClick"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import VSelect from "@/components/v-select/VSelect.vue";
import DropdownFilters from "@/components/dropdown/dropdown-filters/DropdownFilters.vue";

export default {
  name: "PanelFilterItems",

  components: { VButton, VInput, VSelect, DropdownFilters },

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

    isUsersItems: {
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

  computed: {
    ...mapGetters(["isUser", "isAdmin"]),

    orderButtonSvg() {
      return this.sortOrder === "asc" ? "sort-up" : "sort-down";
    },
  },

  data() {
    return {
      inputValue: "",
    };
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
