<template>
  <div class="page">
    <NavigationPanel></NavigationPanel>
    <PanelFilterWorkItems />
    <div class="page__section-items">
      <WorkItem v-for="task in tasks" :key="task.id" :info="task" />
    </div>
  </div>
</template>

<script>
import NavigationPanel from "@/components/navigation-panel/NavigationPanel.vue";
import WorkItem from "@/components/work-item/WorkItem.vue";
import PanelFilterWorkItems from "@/components/panel-filter-work-items/PanelFilterWorkItems.vue";

import { dataTask } from "@/data-test/data-for-task.js";

export default {
  name: "TaskPage",

  components: {
    NavigationPanel,
    WorkItem,
    PanelFilterWorkItems,
  },

  data() {
    return {
      tasks: dataTask,
    };
  },
};
</script>

<style lang="scss"></style>
