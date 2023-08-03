import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../view/HomeView.vue"

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => HomeView,
		},/* 

		{
			path: "/about",
			name: "about",
			component: () => import AboutView from "../views/AboutView.vue",
		}, */
	],
})

export default router