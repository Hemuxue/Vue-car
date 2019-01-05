import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/login.vue'
import Statistics from 'pages/statistics/statistics'
import Person_reg from 'pages/Person/person_register'
import Person_search from 'pages/Person/person_search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'login',
      path: '/',
      component: Login
    },{
      name:'Sta',
      path:'/sta',
      component: Statistics
    },{
      name:'person_reg',
      path:'person_reg',
      component: Person_reg
    },{
      name:'pseron_search',
      path:'pseron_search',
      component:Person_search
    }

  ]
})
