import { createRouter,createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import  Users from '../views/Users.vue'

const routes=[
    {
        path:'/',
        component: Home
    },
    {
        path:'/users',
        component:Users
    },{
        path:'/about',
        component:About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router