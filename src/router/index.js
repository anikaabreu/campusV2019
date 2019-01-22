import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import PinterestBoards from '@/components/PinterestBoards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
      meta: {
        requiresAuth: true
      }
    },
       {
         path: '/pinterest-boards',
         name: 'PinterestBoards',
         component: PinterestBoards,
         meta: {
           requiresAuth: true
         }
       }
  ]
})
