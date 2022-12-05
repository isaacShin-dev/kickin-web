/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

import HomeView from '../views/HomeView.vue'
import  store  from "@/store/index.js";

import '../../node_modules/nprogress/nprogress.css'
import '@/assets/css/progress.css';

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'home', 
    component: HomeView
  },
  {
    path: '/sneakers/:keyword/:brand/:gender',
    name: 'sneakers', 
    component: () => import('../views/SneakerView.vue'),
    meta:{
      reload: true
    },
  },
  {
    path: '/sneakers/:id',
    name: 'detail', 
    component: () => import('../views/SneakerDetailView.vue')
  },
  {
    path: '/calendar',
    name: 'calendar', 
    component: () => import('../views/CalendarView.vue')
  },
  {
    path: '/login',
    name: 'login', 
    component: () => import('../views/user/LoginView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/login/agreement',
    name: 'agreement', 
    component: () => import('../views/user/UserAgreementView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/login/regist',
    name: 'regist', 
    component: () => import('@/components/user/UserRegistration'),
    meta: { requiresAuth: false }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.name) {
    // console.log('router.beforeEach'  )
    // store.commit('SET_LOADING_STATE', true);
    NProgress.start()
    }
    next()
})

router.beforeResolve((to, from, next) => {
  next()
});

router.afterEach((to, from) => {
  console.log('router.afterEach')
  NProgress.done()
  store.commit('SET_LOADING_STATE', false);
})


// NavigationDuplicated Error Handler
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => {
		if (err.name !== 'NavigationDuplicated') throw err;
	});
};

export default router
