import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage.vue'
import system from '@/components/system.vue'
import user from "../components/right/user/user.vue"
import role from "../components/right/user/role.vue"
import courseinformation from "../components/right/course/courseinformation.vue"
import courseclassify from "../components/right/course/courseclassify.vue"
import seckill from "../components/right/course/seckill.vue"
import orderinformation from "../components/right/order/orderinformation.vue"
import payinformation from "../components/right/order/payinformation.vue"
import announceadmin from "../components/right/announceadmin/announceadmin.vue"
import commentadmin from "../components/right/announceadmin/commentadmin.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
    },
    {
      path: '/system',
      name: 'system',
      component: system,
      children: [
        {
          path: '/',
          component: user,

        },
        {
          path: 'user',
          component: user,
        },
        {
          path: 'role',
          component: role,
        },
        {
          path: 'courseinformation',
          component: courseinformation,
        },
        {
          path: 'courseclassify',
          component: courseclassify,
        },
        {
          path: 'seckill',
          component: seckill,
        },
        {
          path: 'orderinformation',
          component: orderinformation,
        },
        {
          path: 'payinformation',
          component: payinformation,
        },
        {
          path: 'announceadmin',
          component: announceadmin,
        },
        {
          path: 'commentadmin',
          component: commentadmin,
        },
      ],
    },
  ]
})
