<template>
  <EditOrCreateSample>
    <template v-slot:header-title>
      <h1>Создание задачи</h1>
    </template>

    <template v-slot:body-form>
      <form action="" class="edit-or-create-work-item__form">
        <div class="edit-or-create-work-item__field-container">
          <label for="name" class="edit-or-create-work-item__label">
            <span>Название</span><span class="font_error">*</span>
          </label>
          <VInput id="name" />
        </div>
        <VSelect
          :activeValues="selectActiveProjectValues"
          :options="selectProjectsOptions"
          @onChange="handleSelectProjectsChange"
        />
        <VSelect
          hasSearch
          :activeValues="selectActiveExecutorValues"
          :options="selectExecutorOptions"
          @onChange="handleSelectExecutorChange"
        />
      </form>
    </template>

    <template v-slot:footer>
      <VButton theme="secondary" text="Отмена"></VButton>
      <VButton theme="primary" text="Создать профиль"></VButton>
    </template>
  </EditOrCreateSample>
</template>

<script>
import EditOrCreateSample from "@/components/edit-or-create-sample/EditOrCreateSample.vue";
import VButton from "@/components/v-button/VButton.vue";
import VInput from "@/components/v-input/VInput.vue";
import VSelect from "@/components/v-select/VSelect.vue";

export default {
  name: "EditOrCreateWorkItem",

  components: {
    EditOrCreateSample,
    VButton,
    VInput,
    VSelect,
  },

  props: {
    selectExecutorOptions: {
      type: Array,
      default: () => [],
    },
    selectProjectsOptions: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      selectActiveExecutorValues: "",

      selectActiveProjectValues: "",
    };
  },

  methods: {
    handleSelectExecutorChange(newActiveValues) {
      this.selectActiveExecutorValues = newActiveValues;
    },
    handleSelectProjectsChange(newActiveValues) {
      this.selectActiveProjectValues = newActiveValues;
    },
  },
};
</script>
