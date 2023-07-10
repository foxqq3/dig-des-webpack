<template>
  <input type="checkbox" class="toggle" v-model="check" @change="handleCheck"/>
</template>

<script>
export default {
  name: "VToggle",

  data() {
    return {
      check: false,
    };
  },

  methods: {
    handleCheck(){
      this.$emit('check', this.check)
    }
  }
};
</script>
