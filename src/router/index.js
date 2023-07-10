import Vue from 'vue';
import VueRouter from 'vue-router';

import TaskPage from '@/views/TaskPage.vue';
import CreateTask from '@/views/CreateTask.vue';
import ProjectPage from '@/views/ProjectPage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: TaskPage,
  },

  {
    path: '/create-task',
    name: 'CreateTask',
    component: CreateTask,
  },

  {
    path: '/projects',
    name: 'projects',
    component: ProjectPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
