import { createRouter, createWebHistory } from 'vue-router';
import TournamentCreation from '../components/TournamentCreation.vue';
import UserPage from "../components/UserPage.vue";
import UserSelect from "../components/UserSelect.vue";


const routes = [
    { path: '/', component: TournamentCreation },
    { path: '/tournament/:id/', component: UserSelect },
    { path: '/tournament/:id/:name', component: UserPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
