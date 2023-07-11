<template>
  <div id="app">
    <div class="page">
      <NavigationPanel v-if="$route.name !== 'login-page'"></NavigationPanel>
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
