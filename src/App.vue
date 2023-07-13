<template>
  <div id="app">
    <div class="page">
      <NavigationPanel v-if="$route.name !== 'login-page'"></NavigationPanel>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import NavigationPanel from "@/components/navigation-panel/NavigationPanel.vue";

export default {
  components: { NavigationPanel },

  created() {
    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer: ${token}`;

      return config;
    });

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          this.$router.push({ name: "login-page" });
        }
        return Promise.reject(error);
      }
    );
  },
};
</script>
