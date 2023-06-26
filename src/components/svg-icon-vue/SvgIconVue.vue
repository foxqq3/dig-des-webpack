<template>
  <div class="svg-icon__wrapper">
    <svg class="svg-icon">
      <use :xlink:href="svgHref" />
    </svg>
  </div>
</template>

<script>
import "@/helper.js";

export default {
  name: "SvgIconVue",

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    svgHref() {
      return "#" + this.name;
    },
  },
};
</script>

<style></style>
