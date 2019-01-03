import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/login.vue'
import Register from 'pages/register/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },{
      path:'/register',
      component: Register
    }

  ]
})
