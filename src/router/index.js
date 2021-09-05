import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)
//解决重复点击一个页面报错问题
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const Home = () => import('views/home/home')
const My = () => import('views/my/my')
const Class = () => import('views/classification/class')
const Cart = () => import('views/shoppingCart/cart')
const routes = [
  {
    path: '/home',
    component:Home,
    alias: '/'
  },
  {
    path: '/class',
    component:Class
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/my',
    component:My
  },
]
const router = new Router({
  routes,
  mode: 'history'
})

export default router
