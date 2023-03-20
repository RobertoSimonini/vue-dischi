import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import VideoGameDetails from '../pages/VideoGameDetails.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const router = createRouter({
    linkExactActiveClass : 'active',
    history: createWebHistory(),
    routes: [
        {path:'/',  name: 'home', component: HomePage},
        {path:'/contact',  name: 'contact', component: ContactPage},
        {path:'/videogames/:id',  name: 'videogame-details', component: VideoGameDetails},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage }
    ]
});

export { router };