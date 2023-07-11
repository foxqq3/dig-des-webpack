<template>
  <div class="edit-or-create-sample">
    <div class="edit-or-create-sample__header">
      <div class="edit-or-create-sample__title">
        <slot name="header-title" />
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
  </div>
</template>

<script>
export default {
  name: "EditOrCreateSample",
};
</script>
