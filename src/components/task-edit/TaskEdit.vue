<template>
  <form class="task-edit">
    <div class="task-edit__header">
      <h1 class="task-edit__title">{{ editTitle }}</h1>
    </div>
    <div class="task-edit__body">
      <div class="task-edit__field-container">
        <label class="task-edit__label">Название <span class="font-error">*</span></label>
        <VInput />
      </div>
    </div>
  </form>
</template>

<script>
import VInput from "@/components/v-input/VInput.vue";

export default {
  name: "TaskEdit",

  components: {
    VInput,
  },

  props: {
    editTitle: {
      type: String,
      default: "Создание задачи",
    },
  },
};
</script>

<style></style>
