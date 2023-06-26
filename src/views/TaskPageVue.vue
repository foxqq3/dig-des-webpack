<template>
  <div class="page">
    <NavigationPanelVue></NavigationPanelVue>
    <div class="page__section-items">
      <ItemVue v-for="task in tasks" :key="task" :itemInfo="task"></ItemVue>
      <ButtonVue />
    </div>
  </div>
</template>

<script>
import NavigationPanelVue from "@/components/navigation-panel-vue/NavigationPanelVue.vue";
import ButtonVue from "@/components/button-vue/ButtonVue.vue";
import ItemVue from "@/components/item-vue/ItemVue.vue";

import {dataTask} from "@/views/data-for-task";

export default {
  name: "TaskPageVue",

  components: {
    NavigationPanelVue,
    ItemVue,
    ButtonVue,
  },

  data() {
    return {
      tasks: dataTask,
    };
  },
};
</script>

<style lang="scss"></style>
