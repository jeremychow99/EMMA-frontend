import { createRouter, createWebHistory } from "vue-router";

import login from "../components/login.vue";
import main from "../views/main.vue"
import schedule from "../views/schedule.vue";
import startMaintenance from "../views/startMaintenance.vue";
import dashboard from "../views/dashboard.vue";
import equipment from "../views/equipment.vue";
import techDashboard from "../views/maintenanceDashboard.vue";
import inventory from "../views/inventory.vue";
import signup from "../components/signup.vue"

const routes = [
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/",
        name: "main",
        component: main
    },
    {
        path: "/schedule",
        name: "schedule",
        component: schedule
    },
    {
        path: "/startMaintenance/:id",
        name: "startMaintenance",
        component: startMaintenance
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: dashboard
    },
    {
        path: "/equipment",
        name: "equipment",
        component: equipment
    },
    {
        path: "/techDashboard",
        name: "techDashboard",
        component: techDashboard
    },
    {
        path: "/inventory",
        name: "inventory",
        component: inventory
    },
    {
        path: "/signup",
        name: "signup",
        component: signup
    }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach( async (to, from) => {
    if(localStorage.token == null && to.name !== 'login' && to.name !== 'signup'){
        return { name: 'login'}
    }
})

export default router;