<template>
  <div id="app">
    <!-- <TaskPage/> -->
    <!-- <ProfilePage/> -->
    <CreateTask />
  </div>
</template>

<script>
import TaskPage from "@/views/TaskPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import CreateTask from "@/views/CreateTask.vue";

export default {
  components: {
    TaskPage,
    ProfilePage,
    CreateTask,
  },
};
</script>

<style lang="scss"></style>
