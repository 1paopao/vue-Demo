import Vue    from 'vue'
import Router from 'vue-router'

import Vif  from '@/components/Vif'
import Vfor from '@/components/Vfor'
import Vimg from '@/components/Vimg'
import Vdetail from '@/components/vdetail'
import Vsort from '@/components/vsort'
import Vsort2 from '@/components/vsort2'
import LinkMenu from '@/components/linkMenu'
import HelloWorld from '@/components/HelloWorld'
import Vdirective from '@/components/Vdirective'
import Vdata from '@/components/vdata'
import Vset from '@/components/vset'
import Vwatch from '@/components/vwatch'
import VnextTrick from '@/components/vnextTrick'
import Vcomputed from '@/components/vcomputed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/vd',
    	name: 'Vdirective',
    	component: Vdirective
    },
    {
      path: '/vif',
      name: 'Vif',
      component: Vif
    },
    {
      path: '/vfor',
      name: 'Vfor',
      component: Vfor
    },
    {
      path: '/vimg',
      name: 'Vimg',
      component: Vimg
    },
    {
      path: '/vlink',
      name: 'linkMenu',  /*文件名.vue   name:文件名*/
      component: LinkMenu
    },
    {
      path: '/vdetail',
      name: 'vdetail',  /*文件名.vue   name:文件名*/
      component: Vdetail
    },
    {
      path: '/vsort',
      name: 'vsort',  /*文件名.vue   name:文件名*/
      component: Vsort
    },
    {
      path: '/vsort2',
      name: 'vsort2',  /*文件名.vue   name:文件名*/
      component: Vsort2
    },
    {
      path: '/vdata',
      name: 'vdata',  /*文件名.vue   name:文件名*/
      component: Vdata
    },
    {
      path: '/vset',
      name: 'vset',  /*文件名.vue   name:文件名*/
      component: Vset
    },
    {
      path: '/vwatch',
      name: 'vwatch',  /*文件名.vue   name:文件名*/
      component: Vwatch
    },
    {
      path: '/vnextTrick',
      name: 'vnextTrick',  /*文件名.vue   name:文件名*/
      component: VnextTrick
    },{
      path: '/vcomputed',
      name: 'vcomputed',  /*文件名.vue   name:文件名*/
      component: Vcomputed
    }
  ]
})
