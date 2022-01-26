import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../pages/home.vue'),
        children: [
            {
                path: '/button',
                component: () => import('@/pages/button.vue'),
            },
            {
                path: '/backtop',
                component: () => import('@/pages/backtop.vue'),
            },
            {
                path: '/drawer',
                component: () => import('@/pages/drawer.vue'),
            },
            {
                path: '/popover',
                component: () => import('@/pages/popover.vue'),
            },
            {
                path: '/tips',
                component: () => import('@/pages/tips.vue'),
            },
            {
                path: '/previewPicture',
                component: () => import('@/pages/previewPicture.vue'),
            },
            {
                path: '/backtop',
                component: () => import('@/pages/backtop.vue'),
            },
        ],
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from ,next) => {
    if (to.meta) {
        console.log(to.meta);
    }
    next();
})

export default router;