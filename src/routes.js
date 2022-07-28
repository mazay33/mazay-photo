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
            meta: {title: 'Андрей Мазаев - Фотограф'},
        },
        {
            path: '/price',
            name: 'Price',
            component: ()=> import("@/views/Price.vue"),
            meta: {title: 'Услуги и Цены'},
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: ()=> import("@/views/Contacts.vue"), 
            meta: {title: 'Контакты'},
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
            meta: {title: 'Галерея'},
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
            
            title: 'Ошибочка',
            }
            
        }
    ],
    scrollBehavior () {
        window.scrollTo(0,0)
    },
})

routers.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default routers