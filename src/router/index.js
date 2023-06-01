import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import ProfileView from '@/views/ProfileView.vue';
import LoginView from '@/views/LoginView.vue';
import RegistrationView from '@/views/RegistrationView.vue';
import AddProductView from '@/views/AddProductView.vue';

const routes =[
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/profile',
        component: ProfileView
    },
    {
        path: '/auth',
        component: LoginView
    },
    {
        path: '/reg',
        component: RegistrationView
    },
    {
        path: '/add_product',
        component: AddProductView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;