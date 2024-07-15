import {createRouter, createWebHistory} from 'vue-router'

// import Home from '../components/HomeComponent.vue'
import HomePage from "../components/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/AboutUs',
            name: 'AboutUs',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../components/AboutUs.vue')
        },
        {
            path: '/ContactUs',
            name: 'ContactUs',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../components/ContactUs.vue')
        }
    ]
})

export default router
