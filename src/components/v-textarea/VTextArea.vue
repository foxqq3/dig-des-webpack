<template>
  <textarea
    ref="textarea"
    :value="value"
    :placeholder="placeholder"
    class="v-textarea"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "VTextArea",

  model: {
    prop: "value",
    event: "change",
  },

  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Введите текст...",
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("change", e.target.value);

      this.resize();
    },

    async resize() {
      let element = this.$refs["textarea"];

      await this.$nextTick();
      element.style.height = "19px";
      element.style.height = element.scrollHeight + "px";
    },
  },

  mounted() {
    this.resize();
  },
};
</script>
