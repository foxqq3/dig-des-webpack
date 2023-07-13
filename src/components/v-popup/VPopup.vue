<template>
  <div class="v-popup">
    <form class="v-popup__content" @submit.prevent="handleSubmit">
      <div class="v-popup__header">
        <slot name="header"></slot>
      </div>
      <div class="v-popup__body">
        <slot name="body"></slot>
      </div>
      <div class="v-popup__footer">
        <slot name="footer"> </slot>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "VPopup",

  methods: {
    handleSubmit() {
      this.$emit("onSubmit");
    },
  },
};
</script>
