
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';

import Blog from '../views/Blog.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'


const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
        meta:{
            title: 'Home',
        }
    },

    {
        path: '/blogs',
        component: Blog,
        name: 'blogs',
        meta:{
            title: 'Blogs',
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta:{
            title: 'Login',
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta:{
            title: 'Register',
        }
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
        name: 'forgotPassword',
        meta:{
            title: 'Forgot Password',
        }
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to,form,next)=>{
    document.title = to.meta.title+" | Daily";
    next();
})

export default router;