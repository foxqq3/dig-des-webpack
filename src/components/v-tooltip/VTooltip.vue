<template>
  <div class="tooltip">
    <slot name="content"></slot>
    <div v-if="isActive" class="tooltip__content-wrapper">
      <span class="tooltip__text">
        {{ content }}
      </span>
    </div>
  </div>
</template>

<script>
import VSvgIcon from "@/components/v-svg-icon/VSvgIcon.vue";

export default {
  name: "VTooltip",

  components: { VSvgIcon },

  props: {
    content: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
