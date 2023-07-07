<template>
  <div v-click-outside="hideList" class="dropdown-select">
    <SelectButton
      :isActive="isDropdownListActive"
      :selectedValue="selectedValue"
      :sort="selectSettings.sort"
      :defaultValue="selectSettings.defaultValue"
      @clickSelect="clickSelect"
    />
    <div :class="classDropdownSelectWrapper">
      <DropdownList
        v-if="isDropdownListActive"
        v-model="select"
        :dropdownItemSettings="dropdownItemSettings"
        :isMultiple="isDropdownListMultiple"
        @input="handleClickItemList"
      />
    </div>
  </div>
</template>

<script>
import DropdownList from "@/components/dropdown-list/DropdownList.vue";
import SelectButton from "@/components/select-button/SelectButton.vue";

export default {
  name: "DropdownSelect",

  components: {
    DropdownList,
    SelectButton,
  },

  props: {
    isDropdownListMultiple: {
      type: Boolean,
      default: false,
    },

    dropdownItemSettings: {
      type: Array,
      defaule: () => [],
    },

    selectSettings: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      select: this.isDropdownListMultiple ? [] : "",
      isDropdownListActive: false,
    };
  },

  computed: {
    selectedValue() {
      if (this.isDropdownListMultiple) {
        if (this.select.length === 0) {
          return "";
        } else {
          return `Выбрано: ${this.select.length}`;
        }
      } else {
        if (this.dropdownItemSettings[this.select - 1]) {
          return this.dropdownItemSettings[this.select - 1].name;
        }
      }
    },

    classDropdownSelectWrapper() {
      return [
        "dropdown-select__wrapper",
        {
          sort: this.selectSettings.sort,
        },
      ];
    },
  },

  methods: {
    clickSelect() {
      this.isDropdownListActive = !this.isDropdownListActive;
      console.log(this.select);
      this.$emit("clickButton", this.isDropdownListActive);
    },

    hideList() {
      this.isDropdownListActive = false;
      this.$emit("clickOutside", this.isDropdownListActive);
    },

    handleClickItemList() {
      if (!this.isDropdownListMultiple) {
        this.isDropdownListActive = false;
      }
    },
  },

  mounted() {
    this.dropdownItemSettings.forEach((element) => {
      if (element.isActive && this.isDropdownListMultiple) {
        this.select = [...this.select, element.value];
      } else if (element.isActive && !this.isDropdownListMultiple) {
        this.select = element.value;
      }
    });
  },
};
</script>
