<template>
  <div class="page__content">
    <PanelFilterWorkItems @onAdd="handleAddClick" />
    <ListWorkItems v-if="tasks.length > 0" :dataWorkItem="tasks" />
    <VPlug v-if="tasks.length === 0" isButton titleText="Не создана ни одна задача" />
  </div>
</template>

<script>
import PanelFilterWorkItems from "@/components/panel-filter-work-items/PanelFilterWorkItems.vue";
import ListWorkItems from "@/components/list-work-items/ListWorkItems.vue";
import VPlug from "@/components/v-plug/VPlug.vue";

import { dataTask } from "@/data-test/data-for-task.js";

export default {
  name: "TasksPage",

  components: {
    PanelFilterWorkItems,
    ListWorkItems,
    VPlug,
  },

  data() {
    return {
      tasks: dataTask,
    };
  },

  methods: {
    handleAddClick() {
      this.$router.push({ name: "task-create-page" });
    },
  },
};
</script>
