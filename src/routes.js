import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

import Portfolio from './views/Portfolio.vue'


const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'Portfolio',
            component: Portfolio,
        },
        {
            path: '/price',
            name: 'Price',
            component: ()=> import("@/views/Price.vue"),
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: ()=> import("@/views/Contacts.vue"), 
        },
        {
            path: '/album/:id',
            name: 'Album',
            component: ()=> import("@/views/Album.vue"), 
        },
        {
            path: '/gallery/:id',
            name: 'Album',
            component: ()=> import("@/views/Gallery.vue"), 
        },
        {
            path: '/photo/:category/:index',
            name: 'Photo',
            component: ()=> import("@/views/Photo.vue"), 
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: ()=> import("@/views/NotFound.vue"),
            meta: {
            requiresAuth: false
            }
        }
    ],
    scrollBehavior () {
        window.scrollTo(0,0)
    }
})

export default routers