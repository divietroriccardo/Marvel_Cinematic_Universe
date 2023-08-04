<script setup lang="ts">
    import { useRoute } from 'vue-router';

    import { useListStore } from "../stores/list.js"

    const route = useRoute();

    const list: {name: string, class: string, isOn: boolean}[] = 
    [
        { name:"Tutti", class: "navAll", isOn: false },
        { name:"Film", class: "navFilms", isOn: false },
        { name:"Serie TV", class: "navShows", isOn: false },
        { name:"Speciali", class: "navSpecial", isOn: false},
        { name:"Cortometraggi", class: "navShorts", isOn: false },
        { name: "Web Serie", class: "navWeb", isOn: false }
    ]

    const selected = "cursor-pointer text-red-600 border-b-4 border-red-600"
    const notSelected = "cursor-pointer hover:text-red-600 hover:border-b-2 hover:border-red-600"

    const setPage = (el: string) => 
    {
      return route.params.type == el.replace(/\s/g, '') ? selected : notSelected
    }
</script>

<template>
    <div class="flex justify-around w-screen h-12 pt-3 bg-gray-900 sm:sticky top-0 text-base text-white invisible sm:visible">
      <div 
        :class = "setPage(el.name)"
        v-for = "el in list" 
        :key = "el.class"
      >
        <RouterLink :to="el.name.replace(/\s/g, '')" class="font-bold">{{ el.name }}</RouterLink>
      </div>
    </div>
</template>