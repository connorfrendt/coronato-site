import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import AboutUs from '../components/AboutUs.vue';
import ContactUs from '../components/ContactUs.vue';
import Reviews from '../components/Reviews.vue';
import Services from '../components/Services.vue';
import BookAppt from '@/components/BookAppt.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/services', component: Services },
        { path: '/about-us', component: AboutUs },
        { path: '/reviews', component: Reviews },
        { path: '/book-an-appointment', component: BookAppt },
        { path: '/contact-us', component: ContactUs },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ],
});

export default router;