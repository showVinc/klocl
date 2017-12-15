import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve=>require(['@/pages/Login/Login'],resolve)
    },
    {
      path: '/login/modify',
      name: 'LoginModify',
      component: resolve=>require(['@/pages/Login/Modify'],resolve)
    },
    {
      path: '/login/back',
      name: 'LoginBack',
      component: resolve=>require(['@/pages/Login/Back'],resolve)
    },
    {
      path: '/login/password',
      name: 'LoginPassword',
      component: resolve=>require(['@/pages/Login/Password'],resolve)
    },
    {
      path: '/login/register',
      name: 'LoginRegister',
      component: resolve=>require(['@/pages/Login/Register'],resolve)
    }
  ]
})
