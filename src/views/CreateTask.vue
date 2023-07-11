<template>
  <EditOrCreateWorkItem
    :selectExecutorOptions="executorOptions"
    :selectProjectsOptions="projectOptions"
  />
</template>

<script>
import VInput from "@/components/v-input/VInput.vue";
import EditOrCreateWorkItem from "@/components/edit-or-create-work-item/EditOrCreateWorkItem.vue";

export default {
  name: "CreateTask",

  components: {
    EditOrCreateWorkItem,
    VInput,
  },

  data() {
    return {
      projectOptions: [
        {
          value: 1,
          name: "Исполнитель 1",
        },

        {
          value: 2,
          name: "Исполнитель 2",
        },
      ],

      executorOptions: [
        {
          value: 1,
          name: "Исполнитель 1",
        },

        {
          value: 2,
          name: "Исполнитель 2",
        },
      ],
    };
  },
};
</script>
