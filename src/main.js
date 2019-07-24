import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

import LoginComponent from './components/LoginComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import EditComponent from './components/EditComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import LogoutComponent from './components/LogoutComponent.vue';

const routes = [
  {
      name: 'login',
      path: '/',
      component: LoginComponent
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'users',
      path: '/users',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  },
  {
    name: 'logout',
    path: '/logout',
    component: LogoutComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
