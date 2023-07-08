<template>
  <div class="page">
    <NavigationPanel />
    <div class="page__content">
      <TaskEdit />
    </div>
  </div>
</template>

<script>
import NavigationPanel from "@/components/navigation-panel/NavigationPanel.vue";
import TaskEdit from "@/components/task-edit/TaskEdit.vue";

export default {
  name: "CreateTask",

  components: {
    NavigationPanel,
    TaskEdit,
  },
};
</script>
