import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import UsersPage from '@/components/UsersPage.vue'
import UserAdd from '@/components/UserAdd.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/users',
      component: UsersPage
    },
    {
      path: '/users/add',
      component: UserAdd
    }
  ]
})
