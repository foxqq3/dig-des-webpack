<template>
  <div class="select-button">
    <button :class="classButtonSwither" @click="handleSelectClick">
      {{ currentValue }}
      <div class="select-button__switсher-svg">
        <VSvgIcon :name="svgNameSwitcher" />
      </div>
    </button>
    <button v-if="isSort" class="select-button__sort" @click="handleSortClick">
      <VSvgIcon :name="svgNameSort" />
    </button>
  </div>
</template>

<script>
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";

export default {
  name: "SelectButton",

  components: { VSvgIcon },

  props: {
    isSort: {
      type: Boolean,
      default: false,
    },

    selectedValue: {
      type: String,
      default: "",
    },

    defaultValue: {
      type: String,
      default: "",
    },

    svgNameSwitcher: {
      type: String,
      default: "",
    },

    svgNameSort: {
      type: String,
      default: "",
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    currentValue() {
      if (this.selectedValue) {
        return this.selectedValue;
      } else {
        return this.defaultValue
      }
    },

    classButtonSwither() {
      return [
        "select-button__switcher",
        {
          active: this.isActive,
          double: this.isSort,
          empty: !this.selectedValue,
        },
      ];
    },
  },

  methods: {
    handleSelectClick() {
      this.$emit("clickSelect");
    },

    handleSortClick() {
      this.$emit("clickSort");
    },
  },
};
</script>
