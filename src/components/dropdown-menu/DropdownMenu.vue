<template>
  <div v-click-outside="hideList" class="dropdown-menu">
    <VButton
      :image="buttonSettings.image"
      :svgName="buttonSvg"
      :theme="buttonSettings.theme"
      :isSmall="buttonSettings.isSmall"
      :text="buttonSettings.text"
      :isActive="isDropdownListActive"
      @click="clickButtonDropdown(isDropdownListActive)"
    />
    <div class="dropdown-menu__wrapper" data-dropdown="dropdown">
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

export default {
  name: "DropdownMenu",

  components: {
    VButton,
    DropdownList,
  },

  props: {
    buttonSettings: {
      type: Object,
      default: () => ({}),
    },

    isDropdownListMultiple: {
      type: Boolean,
      default: false,
    },

    dropdownItemSettings: {
      type: Array,
      defaule: () => [],
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
  },

  methods: {
    clickButtonDropdown() {
      this.isDropdownListActive = !this.isDropdownListActive;
      this.$emit("clickButton", this.isDropdownListActive);
    },

    hideList() {
      this.isDropdownListActive = false;
      this.$emit("clickOutside", this.isDropdownListActive);
    },
  },
};
</script>

<style></style>
