import ROUTES_NAMES from "../constants/routesNames";

const publicRouter = [
    {
        path: '/',
        name: ROUTES_NAMES.Main,
        component: () => import('../views/Main.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/"
    },
    {
        path: '/catalog',
        name: ROUTES_NAMES.Catalog,
        component: () => import('../views/Catalog.vue'),
        meta: { route_name: ROUTES_NAMES.Catalog }

    },
    {
        path: '/education',
        name: ROUTES_NAMES.Education,
        component: () => import('../views/Education.vue'),
        meta: { route_name: ROUTES_NAMES.Education }
    },
    {
        path: '/master_class',
        name: ROUTES_NAMES.MasterClass,
        component: () => import('../views/MasterClass.vue'),
        meta: { route_name: ROUTES_NAMES.MasterClass }

    },
    {
        path: '/archive',
        name: ROUTES_NAMES.WorkStory,
        component: () => import('../views/WorkStory.vue'),
        meta: { route_name: ROUTES_NAMES.WorkStory }
    },
    {
        path: '/about',
        name: ROUTES_NAMES.About,
        component: () => import('../views/About.vue'),
        meta: { route_name: ROUTES_NAMES.About }
    },
]

export default publicRouter;