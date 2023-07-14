<template>
  <div class="popup-sample">
    <form v-if="isForm" class="popup-sample__content" @submit.prevent="handleSubmit">
      <div class="popup-sample__header">
        <slot name="header" />
      </div>
      <div class="popup-sample__body">
        <slot name="body-form" />
      </div>
      <div class="popup-sample__footer">
        <slot name="footer" />
      </div>
    </form>

    <div v-if="!isForm" class="popup-sample__content">
      <div class="popup-sample__header">
        <slot name="header" />
      </div>
      <div class="popup-sample__body">
        <slot name="body-message" />
      </div>
      <div class="popup-sample__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VPopup",

  props: {
    isForm: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleSubmit() {
      this.$emit("onSubmit");
    },
  },
};
</script>
