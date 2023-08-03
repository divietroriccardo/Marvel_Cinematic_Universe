import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../view/HomeView.vue"


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			redirect: "/Tutti"
		},

		{
			path: "/:type",
			name: "all",
			component: () => HomeView,
			props: true,
		},
	],
})

export default router