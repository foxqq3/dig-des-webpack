<template>
  <div class="page">
    <NavigationPanelVue></NavigationPanelVue>
    <div class="page__section-items">
      <ItemVue v-for="project in projects" :key="project.id" :itemInfo="project"></ItemVue>
      <ButtonVue type="primary" state="default"> </ButtonVue>
    </div>
  </div>
</template>

<script>
import NavigationPanelVue from "@/components/navigation-panel-vue/NavigationPanelVue.vue";
import ButtonVue from "@/components/button-vue/ButtonVue.vue";
import ItemVue from "@/components/item-vue/ItemVue.vue";

import {dataProject} from "@/data-test/data-for-project.js";

export default {
  name: "ProjectPageVue",

  components: {
    NavigationPanelVue,
    ItemVue,
    ButtonVue,
  },

  data() {
    return {
      projects: dataProject,
    };
  },
};
</script>

<style lang="scss"></style>
