<template>
  <div id="app">
    <TaskPage></TaskPage>
    <!-- <ProjectPage></ProjectPage> -->
  </div>
</template>

<script>
import TaskPage from "@/views/TaskPage.vue";
import ProjectPage from "@/views/ProjectPage.vue";

export default {
  components: {
    TaskPage,
    ProjectPage
  },
};
</script>

<style lang="scss"></style>
