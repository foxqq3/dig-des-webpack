<template>
  <div class="page__content">
    <PanelFilterWorkItems />
    <ListWorkItems v-if="tasks.length > 0" :dataWorkItem="tasks" />
    <VPlug v-if="tasks.length === 0" isButton titleText="Не создана ни одна задача" />
  </div>
</template>

<script>
import PanelFilterWorkItems from "@/components/panel-filter-work-items/PanelFilterWorkItems.vue";
import ListWorkItems from "@/components/list-work-items/ListWorkItems.vue";
import VPlug from "@/components/v-plug/VPlug.vue";

import { dataProject } from "@/data-test/data-for-project.js";

export default {
  name: "ProjectsPage",

  components: {
    PanelFilterWorkItems,
    ListWorkItems,
    VPlug,
  },

  data() {
    return {
      tasks: dataProject,
    };
  },

  methods: {
    handleSelectChange(newActiveValues) {
      this.selectActiveValues = newActiveValues;
    },
  },
};
</script>
