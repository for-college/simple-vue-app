import {createRouter, createWebHistory} from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import ProductView from '@/views/ProductView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/product',
        component: ProductView,
    },
    {
        path: '/auth',
        component: LoginView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;