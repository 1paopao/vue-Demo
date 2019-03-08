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
import Vdirective1 from '@/components/vdirective1'
import Vdirective2 from '@/components/vdirective2'
import Vdata from '@/components/vdata'
import Vset from '@/components/vset'
import Vwatch from '@/components/vwatch'
import VnextTrick from '@/components/vnextTrick'
import Vcomputed from '@/components/vcomputed'
import Vscroll from '@/components/Vscroll'
import Vposition from '@/components/vposition'
import Vposition2 from '@/components/vposition2'
import Vloca from '@/components/vloca'
import Vueflex from '@/components/vueflex'
import Vtimeline from '@/components/vtimeline'
import Vopenbook from '@/components/vopenbook'
import Vfloor from '@/components/vfloor'
import Vfloor2 from '@/components/vfloor2'
import Vfloor3 from '@/components/vfloor3'
import Vfloor4 from '@/components/vfloor4'
import Vbrand from '@/components/vbrand'
import VarrObject from '@/components/varrObject'
import Vtag from '@/components/vtag'
import Vtransform from '@/components/vtransform'
import Vtouch from '@/components/vtouch'
import Vmoreparent from '@/components/vmoreparent'
import Vpromise from '@/components/vPromise'
import VpromiseReject from '@/components/vPromiseReject'
import VpromiseCatch from '@/components/vPromiseCatch'
import VpromiseAll from '@/components/vPromiseAll'
import VpromiseRace from '@/components/vPromiseRace'
import Vfilter from '@/components/vfilter'
import Vellispe from '@/components/vellispe'
import VmoreClick from '@/components/moreClick'





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
    	name: 'Vdirective', /* 自带指令 name的字母大小是没有关系的 */
    	component: Vdirective
    },
    {
      path: '/vd1',
      name: 'vdirective1', /* 自定义指令 */
      component: Vdirective1
    },
    {
      path: '/vd2',
      name: 'vdirective2', /* 自定义指令 */
      component: Vdirective2
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
    },
    {
      path: '/vscroll',
      name: 'vscroll',  /*文件名.vue   name:文件名*/
      component: Vscroll 
    },
    {
      path: '/vposition',
      name: 'vposition',  /*文件名.vue   name:文件名*/
      component: Vposition 
    },
    {
      path: '/vposition2',
      name: 'vposition2',  /*文件名.vue   name:文件名*/
      component: Vposition2 
    },
    {
      path: '/vloca',
      name: 'vloca',  /*文件名.vue   name:文件名*/
      component: Vloca 
    },
    {
      path: '/vueflex',
      name: 'vueflex',  /*文件名.vue   name:文件名*/
      component: Vueflex
    },
    {
      path: '/vtimeline',
      name: 'vtimeline',  /* 时间轴 */
      component: Vtimeline
    },
    {
      path: '/vopenbook',
      name: 'vopenbook',  /* 打开书的样式 */
      component: Vopenbook
    },
    {
      path: '/vfloor',
      name: 'vfloor',  /* 锚点跳转 */
      component: Vfloor
    },
    {
      path: '/vfloor2',
      name: 'vfloor2',  /* 仿饿了吗 */
      component: Vfloor2
    },
    {
      path: '/vfloor3',
      name: 'vfloor3',  /* 仿饿了吗 */
      component: Vfloor3
    },
    {
      path: '/vfloor4',
      name: 'vfloor4',  /* 仿饿了吗 */
      component: Vfloor4
    },
    {
      path: '/vbrand',
      name: 'vbrand',  /* 仿饿了吗 */
      component: Vbrand
    },
    {
      path: '/varrObject',
      name: 'varrObject',  /* 仿饿了吗 */
      component: VarrObject
    },
    {
      path: '/vtag',
      name: 'vtag',  /* 仿饿了吗 */
      component: Vtag
    },
    {
      path: '/vtransform',
      name: 'vtransform',  /* 仿饿了吗 */
      component: Vtransform
    },
    {
      path: '/vtouch',
      name: 'vtouch',  /* 仿饿了吗 */
      component: Vtouch
    },
    {
      path: '/vmoreparent',
      name: 'vmoreparent',  /* 仿饿了吗 */
      component: Vmoreparent
    },
    {
      path: '/vpromise',
      name: 'vPromise',  /* 仿饿了吗 */
      component: Vpromise
    },
    {
      path: '/vpromiseReject',
      name: 'vPromiseReject',  /* 仿饿了吗 */
      component: VpromiseReject
    },
    {
      path: '/vpromiseCatch',
      name: 'vPromiseCatch',  /* 仿饿了吗 */
      component: VpromiseCatch
    },
    {
      path: '/vpromiseAll',
      name: 'vPromiseAll',  /* 仿饿了吗 */
      component: VpromiseAll
    },
    {
      path: '/vpromiseRace',
      name: 'vPromiseRace',  /* 仿饿了吗 */
      component: VpromiseRace
    },
    {
      path: '/vfilter',
      name: 'vfilter',  /* 过滤器 */
      component: Vfilter
    },
    {
      path: '/vellispe',
      name: 'vellispe',  /* 单行省略 */
      component: Vellispe
    },
    {
      path: '/moreClick',
      name: 'moreClick',  /* 单行省略 */
      component: VmoreClick
    }
  ]
})
