<template>
  <div class="dropdown-menu">
    <VButton
      :image="buttonSettings.image"
      :svgName="arrowSvg"
      :theme="buttonSettings.theme"
      :isSmall="buttonSettings.isSmall"
      :text="buttonSettings.text"
      :isActive="isDropdownListActive"
      @click="clickButtonDropdown(isDropdownListActive)"
    />
    <div class="dropdown-menu__wrapper">
      <DropdownList
        v-if="isDropdownListActive"
        :dropdownItemSettings="dropdownItemSettings"
        :isMultiple="isDropdownItemMultiple"
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
      default: {},
    },

    isDropdownItemMultiple: {
      type: Boolean,
      default: false,
    },

    dropdownItemSettings: {
      type: Array,
      defaule: [],
    },
  },

  data() {
    return {
      isDropdownListActive: false,
      arrowSvg: this.buttonSettings.svgName,
    };
  },

  methods: {
    clickButtonDropdown(isDropdownListActive) {
      this.isDropdownListActive = !this.isDropdownListActive;
      this.$emit("clickButtonDropdown", isDropdownListActive);
      if (this.arrowSvg === "arrow-down") {
        this.arrowSvg = "arrow-up";
      } else if (this.arrowSvg === "arrow-up") {
        this.arrowSvg = "arrow-down";
      }
    },
  },
};
</script>

<style></style>
