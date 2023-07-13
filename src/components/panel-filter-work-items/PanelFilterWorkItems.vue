<template>
  <div class="panel-filter-work-items">
    <VInput isSearch placeholder="Поиск..." @change="handleSearchChange" />
    <VButton v-if="hasAdditionalFilters" svgName="filter" theme="secondary" isSmall />
    <div class="panel-filter-work-items__ordering-and-sorting">
      <VSelect
        :activeValues="selectActiveValues"
        :options="selectOptions"
        @onChange="handleSelectChange"
      />
      <VButton
        :svgName="orderButtonSvg"
        isSmall
        theme="secondary"
        @onClick="handleSortOrder"
      />
    </div>
    <VButton text="Добавить" theme="secondary" @onClick="handleAddItemClick" />

    <VPopup v-if="popupCreateOpen" @onSubmit="handleCreateSubmit">
      <template v-slot:header>
        <h2>Создание проекта</h2>
      </template>
      <template v-slot:body>
        <div class="panel-filter-work-items__popup-field">
          <label for="code">Код <span class="font_error">*</span></label>
          <VInput :value="popupCode" id="code" required @change="handleCodeChange" />
        </div>
        <div class="panel-filter-work-items__popup-field">
          <label for="name">Название <span class="font_error">*</span></label>
          <VInput :value="popupName" id="name" required @change="handleNameChange" />
        </div>
      </template>
      <template v-slot:footer>
        <VButton
          type="button"
          theme="secondary"
          text="Отмена"
          @onClick="handleCancelClick"
        />
        <VButton type="submit" text="Создать проект" />
      </template>
    </VPopup>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data";

import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import VSelect from "@/components/v-select/VSelect.vue";

import VPopup from "@/components/v-popup/VPopup.vue";

export default {
  name: "PanelFirlterWorkItems",

  components: { VButton, VInput, VSelect, VPopup },

  props: {
    selectOptions: {
      type: Array,
      default: () => [],
    },

    selectDefaultValue: {
      type: String,
      default: "",
    },

    hasAdditionalFilters: {
      type: Boolean,
      default: false,
    },

    sortOrderDefault: {
      type: String,
      default: "desc",
      validator: function (value) {
        return ["desc", "asc"].includes(value);
      },
    },
  },

  data() {
    return {
      selectActiveValues: "",
      inputValue: "",
      currentSortOrder: "",

      ///////

      popupCode: "",
      popupName: "",
      popupCreateOpen: false,
    };
  },

  computed: {
    orderButtonSvg() {
      return this.currentSortOrder === "asc" ? "sort-up" : "sort-down";
    },
  },

  methods: {
    handleSearchChange(value) {
      this.$emit("onSearchChange", value);
    },

    handleSelectChange(newActiveValues) {
      this.selectActiveValues = newActiveValues;
      this.$emit("onSelectChange", newActiveValues);
    },

    handleSortOrder() {
      this.currentSortOrder = this.currentSortOrder === "asc" ? "desc" : "asc";
      this.$emit("onClickOrder", this.currentSortOrder);
    },

    handleAddItemClick() {
      // this.$emit("onAdd");
      this.popupCreateOpen = true;
    },

    //////////////
    /////////////
    handleCodeChange(value) {
      this.popupCode = value;
    },

    handleNameChange(value) {
      this.popupName = value;
    },

    handleCancelClick() {
      this.popupCreateOpen = false;
    },

    async handleCreateSubmit() {
      try {
        const response = await axios.post(`${BASE_API_URL}/projects`, {
          name: this.popupName,
          code: this.popupCode,
        });
        console.log(response);
      } catch (error) {
        alert("что-то пошло не так");
      } finally {
        this.popupCreateOpen = false;
      }
    },
  },

  mounted() {
    this.selectActiveValues = this.selectDefaultValue;
    this.currentSortOrder = this.sortOrderDefault;
  },
};
</script>
