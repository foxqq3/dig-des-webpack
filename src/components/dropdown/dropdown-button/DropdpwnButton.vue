<template>
  <div v-click-outside="hideList" class="dropdown-button">
    <VButton
      :image="buttonSettings.image"
      :svgName="buttonSvg"
      :theme="buttonSettings.theme"
      :isSmall="buttonSettings.isSmall"
      :text="buttonSettings.text"
      :isActive="isDropdownListActive"
      @click="clickButtonDropdown"
    />
    <div class="dropdown-button__wrapper">
      <DropdownList
        v-if="isDropdownListActive"
        v-model="select"
        :dropdownItemSettings="dropdownItemSettings"
        @input="handleClickItemList"
      />
    </div>
  </div>
</template>

<script>
import VButton from "@/components/v-button/VButton.vue";
import DropdownList from "@/components/dropdown/dropdown-list/DropdownList.vue";
export default {
  name: "DropdownButton",

  components: {
    VButton,
    DropdownList,
  },

  props: {
    buttonSettings: {
      type: Object,
      default: () => ({}),
    },

    dropdownItemSettings: {
      type: Array,
      defaule: () => [],
    },
  },

  data() {
    return {
      select: "",
      isDropdownListActive: false,
    };
  },

  computed: {
    buttonSvg() {
      if (this.buttonSettings.svgName) {
        return this.buttonSettings.svgName;
      } else if (this.isDropdownListActive) {
        return "arrow-up";
      } else {
        return "arrow-down";
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

    handleClickItemList() {
      this.$emit("selectItem", this.select);
      console.log(`выбран такой то пункт ${this.select}`)
    },
  },
};
</script>
