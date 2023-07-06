<template>
  <svg class="svg-icon" width="24px" height="24px" @click="handleClickSvg">
    <use :xlink:href="'#' + this.name" />
  </svg>
</template>

<script>
import "@/helper.js";

export default {
  name: "VSvgIcon",

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

  methods:{
    handleClickSvg(){
      this.$emit('click')
    }
  }
};
</script>
