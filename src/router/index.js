import Vue from 'vue';
import VueRouter from 'vue-router';

import TasksPage from '@/views/TasksPage.vue';
import CreateTask from '@/views/CreateTask.vue';
import ProjectsPage from '@/views/ProjectsPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';
import LoginPage from '@/views/LoginPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/tasks',
  },

  {
    path: '/login',
    name: 'login-page',
    component: LoginPage,
  },

  {
    path: '/tasks',
    name: 'tasks-page',
    component: TasksPage,
  },
  {
    path: '/tasks/create',
    name: 'task-create-page',
    component: CreateTask,
  },

  {
    path: '/projects',
    name: 'projects-page',
    component: ProjectsPage,
  },

  {
    path: '/profile',
    name: 'profile-page',
    component: ProfilePage,
  },

  {
    path: '*',
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
