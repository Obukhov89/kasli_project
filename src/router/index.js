import {createWebHistory, createRouter} from "vue-router";
import routs from "../router/routs.js";

const router = createRouter({
    history: createWebHistory(),
    routes: routs
})

export default router;