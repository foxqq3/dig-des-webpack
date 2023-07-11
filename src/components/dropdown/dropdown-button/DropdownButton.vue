<template>
  <div v-click-outside="handleOutsideClick" class="dropdown-button">
    <VButton
      :image="buttonImage"
      :svgName="buttonSvg"
      :theme="buttonTheme"
      :isSmall="buttonIsSmall"
      :text="buttonText"
      :isActive="isDropdownListActive"
      @onClick="handleClickButtonDropdown"
    />
    <div class="dropdown-button__wrapper">
      <DropdownList
        v-if="isDropdownListActive"
        :activeValues="activeValue"
        :items="options"
        @onClick="handleDropdownItemClick"
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
    activeValue: {
      type: [String, Number],
      default: null,
    },
    buttonSvgName: {
      type: String,
      default: "",
    },
    buttonImage: {
      type: String,
      default: null,
    },
    buttonTheme: {
      type: String,
      default: "",
    },
    buttonIsSmall: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      isDropdownListActive: false,
    };
  },

  computed: {
    buttonSvg() {
      if (this.buttonSvgName) {
        return this.buttonSvgName;
      }

      return this.isDropdownListActive ? "arrow-up" : "arrow-down";
    },
  },

  methods: {
    handleClickButtonDropdown() {
      this.isDropdownListActive = !this.isDropdownListActive;
      this.$emit("onClickButton", this.isDropdownListActive);
    },

    handleOutsideClick() {
      this.isDropdownListActive = false;
      this.$emit("onClickOutside", this.isDropdownListActive);
    },

    handleDropdownItemClick(value) {
      this.$emit("onChange", value);
      console.log(`выбран такой то пункт ${value}`);
    },
  },
};
</script>
