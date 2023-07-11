<template>
  <form class="edit-form">
    <div class="edit-form__header">
      <h1 class="edit-form__title">{{ editTitle }}</h1>
    </div>
    <div class="edit-form__body">
      <div class="edit-form__form">
          <slot name="form-fields"></slot>
      </div>
      <div class="edit-form__admin">
        <div v-if="isAdminPanel" class="edit-form__admin-wrapper">
          <div class="edit-form__toggle">
            <label for="edit-form__toggle-label">Активен</label>
            <VToggle />
          </div>
        </div>
      </div>
    </div>
    <div class="edit-form__footer">
      <VButton theme="secondary" text="Отмена" @onClick.prevent="handleCancel"></VButton>
      <VButton
        theme="primary"
        :text="textSendButton"
        type="submit"
        @onClick.prevent="handleSubmit"
      ></VButton>
    </div>
  </form>
</template>

<script>
import VInput from "@/components/v-input/VInput.vue";
import VButton from "@/components/v-button/VButton.vue";
import VToggle from "@/components/v-toggle/VToggle.vue";

export default {
  name: "EditForm",

  components: {
    VInput,
    VButton,
    VToggle,
  },

  props: {
    editTitle: {
      type: String,
      default: "Создание задачи",
    },
    textSendButton: {
      type: String,
      default: "Создать",
    },
    isAdminPanel: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    currentToggleText() {
      return;
    },
  },

  methods: {
    handleSubmit() {
      this.$emit("clickSubmit");
    },
    handleCancel() {
      this.$emit("clickCancel");
    },
  },
};
</script>
