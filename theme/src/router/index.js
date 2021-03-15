import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/Home'
import Index from '@/view/Index'
import Other from '@/view/Other'
import Blooming from '@/view/Blooming'
import Animate from '@/view/Animate'

import Popup from '@/view/Popup'
import Father from '@/view/Tabbar/Father'
import Son1 from '@/view/Tabbar/Son1'
import Son2 from '@/view/Tabbar/Son2'
import Son3 from '@/view/Tabbar/Son3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
		  path: '/home',
		  name: 'Home',
		  component: Home
		},
		{
		  path: '/index',
		  name: 'Index',
		  component: Index
		},
		{
		  path: '/other',
		  name: 'Other',
		  component: Other
		},
		{
		  path: '/Blooming',
		  name: 'Blooming',
		  component: Blooming
		},
		{
		  path: '/popup',
		  name: 'Popup',
		  component: Popup
		},
		{
			path: '/animate',
			name: 'Gif',
			component: Animate
		},
		{
		  path: '/father',
		  name: 'Father',
		  component: Father,
		  redirect:'/son1',
		  children:[
		    {
		      path: '/son1',
		      name: 'Son1',
		    },
		    {
		      path: '/son2',
		      name: 'Son2',
		    },
		    {
		      path: '/son3',
		      name: 'Son3',
		    },
		  ]
		}
  ]
})
