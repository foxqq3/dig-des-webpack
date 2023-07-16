import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';

import TasksPage from '@/views/TasksPage.vue';
import CreateTaskPage from '@/views/CreateTaskPage.vue';
import EditTaskPage from '@/views/EditTaskPage.vue';
import ProjectsPage from '@/views/ProjectsPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import UsersPage from '@/views/UsersPage.vue';
import UserPage from '@/views/UserPage.vue';

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
    name: 'tasks-page-create',
    component: CreateTaskPage,
  },

  {
    path: '/tasks/edit:id',
    name: 'tasks-page-edit',
    component: EditTaskPage,
  },

  {
    path: '/projects',
    name: 'projects-page',
    component: ProjectsPage,
  },

  {
    path: '/users',
    name: 'users-page',
    component: UsersPage,
  },

  {
    path: '/users/:id',
    name: 'user-page',
    component: UserPage,
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

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token');

  if (!token && to.name !== 'login-page') {
    next({ name: 'login-page' });
    return;
  }

  if (token && to.name === 'login-page' && !store.getters.isUserAuthorized) {
    await store.dispatch('loadCurrentUser');

    next({ name: 'projects-page' });
    return;
  }

  if (!store.getters.isUserAuthorized && to.name !== 'login-page') {
    await store.dispatch('loadCurrentUser');
  }

  if (store.getters.isUserAuthorized && to.name === 'login-page') {
    next({ name: 'projects-page' });
    return;
  }

  next();
});

export default router;
