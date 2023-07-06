<template>
  <div v-click-outside="hideList" class="dropdown-menu">
    <VButton
      v-if="!isSelectButton"
      :image="buttonSettings.image"
      :svgName="buttonSvg"
      :theme="buttonSettings.theme"
      :isSmall="buttonSettings.isSmall"
      :text="buttonSettings.text"
      :isActive="isDropdownListActive"
      @click="clickButtonDropdown(isDropdownListActive)"
    />
    <SelectButton
      v-if="isSelectButton"
      :isActive="isDropdownListActive"
      :selectedValue="selectedValue"
      :isSort="selectSettings.isSort"
      :defaultValue="selectSettings.defaultValue"
      :svgNameSwitcher="buttonSvg"
      svgNameSort="sort-down"
      @clickSelect="clickButtonDropdown(isDropdownListActive)"
    />
    <div :class="classDropdownMenuWrapper" data-dropdown="dropdown">
      <DropdownList
        v-if="isDropdownListActive"
        v-model="select"
        :dropdownItemSettings="dropdownItemSettings"
        :isMultiple="isDropdownListMultiple"
      />
    </div>
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import DropdownList from "@/components/dropdown-list/DropdownList.vue";
import SelectButton from "@/components/select-button/SelectButton.vue";

export default {
  name: "DropdownMenu",

  components: {
    VButton,
    DropdownList,
    SelectButton,
  },

  props: {
    isSelectButton: {
      type: Boolean,
      default: false,
    },

    isDropdownListMultiple: {
      type: Boolean,
      default: false,
    },

    buttonSettings: {
      type: Object,
      default: () => ({}),
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
    buttonSvg() {
      if (this.buttonSettings.svgName === "arrow-down" && this.isDropdownListActive) {
        return "arrow-up";
      } else {
        return this.buttonSettings.svgName;
      }
    },

    selectedValue() {
      if (this.isDropdownListMultiple) {
        return `Выбрано: ${this.select.length}`;
      } else {
        if (this.dropdownItemSettings[this.select - 1]) {
          return this.dropdownItemSettings[this.select - 1].name;
        } else {
          return "test";
        }
      }
    },

    classDropdownMenuWrapper() {
      return [
        "dropdown-menu__wrapper",
        {
          select: this.isSelectButton && !this.selectSettings.isSort,
          "sort-select": this.isSelectButton && this.selectSettings.isSort,
        },
      ];
    },
  },

  methods: {
    clickButtonDropdown() {
      this.isDropdownListActive = !this.isDropdownListActive;
      console.log(this.select);
      this.$emit("clickButton", this.isDropdownListActive);
    },

    hideList() {
      this.isDropdownListActive = false;
      this.$emit("clickOutside", this.isDropdownListActive);
    },
  },
};
</script>
