import {createRouter, createWebHashHistory} from 'vue-router'

import Discovery from '../components/Discovery.vue'
import Friends from '../components/Friends.vue'
import My from '../components/My.vue'
import PlayList from '../components/PlayList.vue'
import TopList from '../components/TopList.vue'
import Product from '../components/Product.vue'
import ClassMate from '../components/ClassMate.vue'
const myrouters = [
    {
        path:'/',
        redirect:'/discovery'
    },
    {
        path:'/discovery',
        component: Discovery,
        children:[
            {  
                path:"toplist" ,
                component:TopList
            },
            {
                path:"playlist",
                component:PlayList
            }
        ]
    },
    {
        path:'/friends',
        component: Friends,
        children:[
            {
                path:"classmate/:id",
                component:ClassMate,
                props:true
            }
        ]
    },
    {
        path:'/my',
        component: My,
        children:[
            {
                path:"product/:id",
                component:Product
            }
        ]
    }
]

const router = createRouter({
    routes:myrouters,
    history: createWebHashHistory()
})

export default router