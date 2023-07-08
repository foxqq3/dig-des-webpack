<template>
  <div class="page">
    <NavigationPanel></NavigationPanel>
    <div class="page__content">
      <PanelFilterWorkItems />
      <ListWorkItems v-if="tasks.length > 0" :dataWorkItem="tasks" />
      <VPlug v-if="tasks.length === 0" isButton titleText="Не создана ни одна задача" />
    </div>
  </div>
</template>

<script>
import NavigationPanel from "@/components/navigation-panel/NavigationPanel.vue";
import PanelFilterWorkItems from "@/components/panel-filter-work-items/PanelFilterWorkItems.vue";
import ListWorkItems from "@/components/list-work-items/ListWorkItems.vue";
import VPlug from "@/components/v-plug/VPlug.vue";

import { dataTask } from "@/data-test/data-for-task.js";

export default {
  name: "TaskPage",

  components: {
    NavigationPanel,
    PanelFilterWorkItems,
    ListWorkItems,
    VPlug,
  },

  data() {
    return {
      tasks: dataTask,
    };
  },
};
</script>
