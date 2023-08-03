<script setup lang="ts">
    const list: {name: string, class: string}[] = 
    [
        { name:"Tutti", class: "navAll" },
        { name:"Film", class: "navFilms" },
        { name:"Serie TV", class: "navShows" },
        { name:"Cortometraggi", class: "navShorts" },
        { name: "Web Serie", class: "navWeb" }
    ]
</script>

<template>
    <div class="flex justify-around w-screen h-12 pt-3 bg-gray-900 sm:sticky top-0 text-base text-white invisible sm:visible">
      <div 
        class="cursor-pointer font-bold hover:text-red-600 hover:border-b-2 hover:border-red-600"
        v-for="el in list" 
        :key="el.class"
        :class="el.class"
      >
        {{ el.name }}
      </div>
    </div>
</template>