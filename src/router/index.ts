import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/Login.vue')
    }, {
        path: '/',
        name: 'index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/Index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(), routes
})

export default router;