import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AboutMe from '../components/AboutMe.vue';
import ContactUs from '../components/ContactUs.vue';
import Reviews from '../components/Reviews.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/about-me', component: AboutMe },
        { path: '/contact-us', component: ContactUs },
        { path: '/reviews', component: Reviews },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ],
});

export default router;