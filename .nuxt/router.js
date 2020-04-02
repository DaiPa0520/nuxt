import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55e15b6e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _42a6c4c1 = () => interopDefault(import('..\\pages\\cost.vue' /* webpackChunkName: "pages_cost" */))
const _3924e28e = () => interopDefault(import('..\\pages\\introduction.vue' /* webpackChunkName: "pages_introduction" */))
const _096e634c = () => interopDefault(import('..\\pages\\question.vue' /* webpackChunkName: "pages_question" */))
const _10a1bbf6 = () => interopDefault(import('..\\pages\\registered.vue' /* webpackChunkName: "pages_registered" */))
const _61d49ff0 = () => interopDefault(import('..\\pages\\reservation.vue' /* webpackChunkName: "pages_reservation" */))
const _1671a5e4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'actived',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _55e15b6e,
    name: "about"
  }, {
    path: "/cost",
    component: _42a6c4c1,
    name: "cost"
  }, {
    path: "/introduction",
    component: _3924e28e,
    name: "introduction"
  }, {
    path: "/question",
    component: _096e634c,
    name: "question"
  }, {
    path: "/registered",
    component: _10a1bbf6,
    name: "registered"
  }, {
    path: "/reservation",
    component: _61d49ff0,
    name: "reservation"
  }, {
    path: "/",
    component: _1671a5e4,
    name: "index"
  }, {
    path: "/home",
    component: _1671a5e4,
    name: "home"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
