import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

const home = r => require.ensure([], () => r(require('../components/home')), 'home')
const tab1 = r => require.ensure([], () => r(require('../components/tab1')), 'tab1')
const tab2 = r => require.ensure([], () => r(require('../components/tab2')), 'tab2')

Vue.use(Router)

// const home

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: home
        },
        {
          path: '/tab1',
          component: tab1
        },
        {
          path:'/tab2',
          component:tab2
        }
      ]
    }
  ]
})
