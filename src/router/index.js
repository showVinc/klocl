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
    },
    {
      path: '/login/success',
      name: 'LoginSuccess',
      component: resolve=>require(['@/pages/Login/Success'],resolve)
    },
    //品牌类
    {
      path: '/brand',
      name: 'Brand',
      component: resolve=>require(['@/pages/Brand/Index'],resolve)
    },
    {
      path: '/brand/detail',
      name: 'BrandDetail',
      component: resolve=>require(['@/pages/Brand/Detail'],resolve)
    },
    //鉴定类
    {
      path: '/identify',
      name: 'Identify',
      component: resolve=>require(['@/pages/Identify/Index'],resolve)
    },
    {
      path: '/identify/history',
      name: 'IdentifyHistory',
      component: resolve=>require(['@/pages/Identify/History'],resolve)
    },
    {
      path: '/identify/historyDetail',
      name: 'IdentifyHistoryDetail',
      component: resolve=>require(['@/pages/Identify/HistoryDetail'],resolve)
    },
    {
      path: '/identify/certificate',
      name: 'IdentifyCertificate',
      component: resolve=>require(['@/pages/Identify/Certificate'],resolve)
    },
    //新闻类
    {
      path: '/news',
      name: 'News',
      component: resolve=>require(['@/pages/News/Index'],resolve)
    },
    {
      path: '/news/detail',
      name: 'NewsDetail',
      component: resolve=>require(['@/pages/News/Detail'],resolve)
    },
    //关于我们类
    {
      path: '/about',
      name: 'About',
      component: resolve=>require(['@/pages/About/Index'],resolve)
    },
    {
      path: '/about/administration',
      name: 'AboutAdministration',
      component: resolve=>require(['@/pages/About/Administration'],resolve)
    },
    {
      path: '/about/place',
      name: 'AboutPlace',
      component: resolve=>require(['@/pages/About/Place'],resolve)
    },
    {
      path: '/about/museum',
      name: 'AboutMuseum',
      component: resolve=>require(['@/pages/About/Museum'],resolve)
    },
    {
      path: '/about/museumDetail',
      name: 'AboutMuseumDetail',
      component: resolve=>require(['@/pages/About/MuseumDetail'],resolve)
    },
    {
      path: '/about/contact',
      name: 'AboutContact',
      component: resolve=>require(['@/pages/About/Contact'],resolve)
    },
    //用户类
    {
      path: '/user',
      name: 'User',
      component: resolve=>require(['@/pages/User/Index'],resolve)
    },
    {
      path: '/user/password',
      name: 'UserPassword',
      component: resolve=>require(['@/pages/User/Password'],resolve)
    },
    {
      path: '/user/identify',
      name: 'UserIdentify',
      component: resolve=>require(['@/pages/User/Identify'],resolve)
    },
  ]
})
