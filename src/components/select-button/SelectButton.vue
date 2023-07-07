<template>
  <div class="select-button__wrapper">
    <button :class="classButtonSelect" @click="handleSelectClick">
      {{ currentValue }}
      <div class="select-button__svg">
        <VSvgIcon :name="svgSelect" />
      </div>
    </button>
    <button v-if="sort" class="select-button__sort" @click="handleSortClick">
      <VSvgIcon :name="svgSort" />
    </button>
  </div>
</template>

<script>
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";

export default {
  name: "SelectButton",

  components: { VSvgIcon },

  props: {
    sort: {
      type: String,
      default: null,
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
        return this.defaultValue;
      }
    },

    classButtonSelect() {
      return [
        "select-button",
        {
          active: this.isActive,
          double: this.sort,
          empty: !this.selectedValue,
        },
      ];
    },

    svgSelect() {
      if (this.isActive) {
        return "arrow-up";
      } else {
        return "arrow-down";
      }
    },

    svgSort() {
      if (this.sort === "up") {
        return "sort-up";
      } else if (this.sort === "down") {
        return "sort-down";
      }
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
