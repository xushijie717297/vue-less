import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/Home'
import Index from '@/view/Index'
import Other from '@/view/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
		  path: '/',
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
		}
  ]
})
