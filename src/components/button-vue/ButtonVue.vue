<template>
  <button :class="classes"><SvgIconVue name="arrow-down"></SvgIconVue></button>
</template>

<script>
import SvgIconVue from "@/components/svg-icon-vue/SvgIconVue.vue";

export default {
  components: {
    SvgIconVue,
  },
  props: {
    state: {
      type: String,
    },
    type: {
      type: String,
    },
  },

  computed: {
    classes() {
      return `button button_${this.type}_${this.state}`;
    },
  },
};
</script>

<style lang="scss"></style>
