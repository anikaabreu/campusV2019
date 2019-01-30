import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
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
            path: '/pinterest-boards',
            name: 'PinterestBoards',
            component: PinterestBoards,
            children: [{
                   
                    path: 'pins',
                    component: Pins,

                },
                { 
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