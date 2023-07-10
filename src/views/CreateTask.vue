<template>
  <EditForm editTitle="Создание задачи">
    <template v-slot:form-fields>
      <div class="edit-form__field-container">
        <label class="edit-form__field-label" for="name">
          Название
          <span class="font-error">*</span>
        </label>
        <VInput id="name" placeholder="Введите текст..." />
      </div>
    </template>
  </EditForm>
</template>

<script>
import EditForm from "@/components/edit-form/EditForm.vue";
import VInput from "@/components/v-input/VInput.vue";

export default {
  name: "CreateTask",

  components: {
    EditForm,
    VInput,
  },
};
</script>
