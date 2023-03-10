import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/rabbit-status'
    },
    // {
    //     path: '/rabbit-loading',
    //     component: () => import('@/views/RabbitLoading.vue')
    // },
    {
        path: '/maintain',
        component: () => import('@/views/Maintain.vue')
    },
    {
        path: '/auth',
        redirect: '/auth/login'
    },
    {
        path: '/auth/register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/auth/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/auth/user-group/set',
        component: Layout,
        children: [{
            path: '',
            component: () => import('@/views/UserGroupSet.vue')
        }]
    },
    {
        path: '/rabbit-status',
        component: Layout,
        children: [{
            path: '',
            component: () => import('@/views/RabbitStatus.vue')
        },
        {
            path: 'create',
            component: () => import('@/views/RabbitStatusCreate.vue'),
            meta: {
                permission: ['rabbit']
            }
        }, {
            path: 'recently',
            component: () => import('@/views/RabbitStatusRecently.vue'),
            meta: {
                permission: ['rabbit', 'owner', 'fan']
            }
        }]
    },
    {
        path: '/backpack',
        component: Layout,
        children: [{
            path: '',
            component: () => import('@/views/Backpack.vue'),
            meta: {
                permission: ['rabbit', 'owner']
            }
        }, {
            path: 'set',
            component: () => import('@/views/BackpackSet.vue'),
            meta: {
                permission: ['rabbit']
            }
        }]
    },
    {
        path: '/item',
        component: Layout,
        children: [{
            path: 'edit',
            component: () => import('@/views/ItemEdit.vue'),
            meta: {
                permission: ['rabbit']
            }
        }]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
