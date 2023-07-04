<template>
  <div class="page">
    <NavigationPanel></NavigationPanel>
    <div class="page__section-items">
      <WorkItem v-for="task in tasks" :key="task.id" :info="task"></WorkItem>
    </div>
  </div>
</template>

<script>
import NavigationPanel from "@/components/navigation-panel/NavigationPanel.vue";
import WorkItem from "@/components/work-item/WorkItem.vue";

import { dataTask } from "@/data-test/data-for-task.js";

export default {
  name: "TaskPage",

  components: {
    NavigationPanel,
    WorkItem,
  },

  data() {
    return {
      tasks: dataTask,
    };
  },
};
</script>

<style lang="scss"></style>
