<template>
  <div
    class="svg-icon__wrapper"
    style="pointer-events: none"
  >
    <svg class="svg-icon">
      <use xlink:href="#browse" />
    </svg>
  </div>
</template>

<script>
import '@/helper.js';
export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      default: null,
    },
  },

  computed: {
    className() {
      return 'svg-icon svg-icon--' + this.name;
    },
  },
};
</script>

<style>
.svg-icon {
  fill: currentColor;
  height: 24px;
  width: 24px;
}
</style>
