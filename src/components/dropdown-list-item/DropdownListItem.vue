<template>
  <span :class="classItem" @click="handleSelect">
    <span v-if="isCheckbox" :class="classSvg">
      <VSvgIcon :name="currentSvg" />
    </span>
    {{ content }}
  </span>
</template>

<script>
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";

export default {
  name: "DropdownListItem",

  components: {
    VSvgIcon,
  },

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    isCheckbox: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: "Пустой пункт",
    },
  },

  computed: {
    currentSvg() {
      if (this.isActive && this.isCheckbox) {
        return "check-active";
      } else if (this.isCheckbox) {
        return "check";
      }
    },

    classItem() {
      return [
        "dropdown-list-item",
        {
          active: this.isActive,
          error: this.isError,
        },
      ];
    },

    classSvg() {
      return [
        "dropdown-list-item__svg",
        {
          active: this.isActive,
        },
      ];
    },
  },

  methods: {
    handleSelect() {
      this.$emit("click");
    },
  },
};
</script>
