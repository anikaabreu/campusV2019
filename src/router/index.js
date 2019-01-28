import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import PinterestBoards from '@/components/PinterestBoards'
import Pins from '@/components/Pins'
import Users from '@/components/Users'
import Campaign from '@/components/Campaign'
import UsersRepin from '@/components/UserRepin'
import PinsRepins from '@/components/PinsRepins'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/posts-manager',
            name: 'PostsManager',
            component: PostsManager,
            meta: {
                // requiresAuth: true
            }
        },
        {
            path: '/pinterest-boards',
            name: 'PinterestBoards',
            component: PinterestBoards,
            children: [{
                    // UserProfile will be rendered inside User's <router-view>
                    // when /pinrerest-boards/pins is matched
                    path: 'pins',
                    component: Pins,

                },
                {
                    // UserPosts will be rendered inside User's <router-view>
                    // when /pinrerest-boards/users is matched
                    path: 'users',
                    component: Users
                }, {
                    path: 'userRepins',
                    component: UsersRepin
                },
                {
                  path: 'PinsRepins',
                  component: PinsRepins
                }

            ],
            meta: {
                //  requiresAuth: true
            }
        }
    ]
})