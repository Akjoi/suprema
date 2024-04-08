import { createRouter, createWebHistory } from 'vue-router'

import publicRouter from './public.router';

const routes = [
	...publicRouter
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	strict: true,
})

export default router