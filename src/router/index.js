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
    redirect: '/projects',
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (!token && to.name !== 'login-page') {
    next({ name: 'login-page' });
    return;
  }

  if (token && to.name === 'login-page') {
    next({ name: 'projects-page' });
    return;
  }

  next();
});

export default router;
