<template>
  <PageWrapper>
    <EditOrCreateSample>
      <template v-slot:header>
        <h1>Создание задачи</h1>
      </template>

      <template v-slot:body-form>
        <div class="create-task__field">
          <label for="" class="create-task__label">
            <span>Название</span> <span class="font_error">*</span></label
          >
          <VInput />
        </div>
        <div class="create-task__field">
          <label for="" class="create-task__label"> <span>Описание</span></label>
          <VTextArea />
        </div>
        <div class="create-task__field">
          <div for="" class="create-task__label">
            <span>Проект</span><span class="font_error">*</span>
          </div>
          <VSelect />
        </div>
        <div class="create-task__field">
          <div for="" class="create-task__label">
            <span>Исполнитель</span>
          </div>
          <VSelect />
        </div>
      </template>

      <template v-slot:footer>
        <VButton theme="secondary" text="Отмена" @onClick="handleCancelClick" />
        <VButton text="Создать задачу" type="submit" />
      </template>
    </EditOrCreateSample>
  </PageWrapper>
</template>

<script>
import EditOrCreateSample from "@/components/edit-or-create-sample/EditOrCreateSample.vue";
import PageWrapper from "@/components/wrappers/page-wrapper/PageWrapper.vue";
import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import VTextArea from "@/components/v-textarea/VTextArea.vue";
import VSelect from "@/components/v-select/VSelect.vue";

export default {
  name: "CreateTask",

  components: {
    EditOrCreateSample,
    PageWrapper,
    VButton,
    VInput,
    VTextArea,
    VSelect,
  },

  methods: {
    handleCancelClick() {
      this.$router.push({ name: "tasks-page" });
    },
  },
};
</script>
