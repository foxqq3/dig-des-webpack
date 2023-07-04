<template>
  <div class="page">
    <NavigationPanelVue/>
    <div class="page__section-items">
      <WorkItemVue v-for="project in projects" :key="project.id" :info="project"/>
    </div>
  </div>
</template>

<script>
import NavigationPanel from "@/components/navigation-panel/NavigationPanel.vue";
import WorkItem from "@/components/work-item/WorkItem.vue";

import {dataProject} from "@/data-test/data-for-project.js";

export default {
  name: "ProjectPage",

  components: {
    NavigationPanel,
    WorkItem,
  },

  data() {
    return {
      projects: dataProject,
    };
  },
};
</script>

<style lang="scss"></style>
