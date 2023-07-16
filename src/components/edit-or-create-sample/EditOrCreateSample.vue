<template>
  <form class="edit-or-create-sample" @submit.prevent="handleSubmit">
    <div class="edit-or-create-sample__header">
      <div class="edit-or-create-sample__title">
        <slot name="header" />
      </div>
    </div>

    <div class="edit-or-create-sample__body">
      <div class="edit-or-create-sample__form">
        <slot name="body-form" />
      </div>

      <div class="edit-or-create-sample__admin">
        <slot name="body-admin" />
      </div>
    </div>

    <div class="edit-or-create-sample__footer">
      <slot name="footer" />
    </div>
  </form>
</template>

<script>
export default {
  name: "EditOrCreateSample",

  methods: {
    handleSubmit() {
      this.$emit("onSubmit");
    },
  },
};
</script>
