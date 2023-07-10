<template>
  <div id="app">
    <div class="page">
      <NavigationPanel></NavigationPanel>
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationPanel from "@/components/navigation-panel/NavigationPanel.vue";

export default {
  components: { NavigationPanel },
};
</script>
