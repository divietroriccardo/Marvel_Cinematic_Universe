<script lang="ts">
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
    <div class="flex justify-around w-screen h-12 pt-3  bg-gray-900 sm:sticky top-0 text-white invisible sm:visible">
      <!-- <div class="navAll cursor-pointer font-bold text-red-600 border-b-4 border-red-600">Tutti</div>
      <div class="navFilms cursor-pointer font-bold hover:text-red-600 hover:border-b-2 hover:border-red-600">Film</div>
      <div class="navShows cursor-pointer font-bold hover:text-red-600 hover:border-b-2 hover:border-red-600">Serie TV</div>
      <div class="navShorts cursor-pointer font-bold hover:text-red-600 hover:border-b-2 hover:border-red-600">Cortometraggi</div>
      <div class="navWeb cursor-pointer font-bold hover:text-red-600 hover:border-b-2 hover:border-red-600">Web Serie
      </div> 

      <div 
        v-for="type in list" 
        :key="type.name" 
        class="cursor-pointer font-bold hover:text-red-600 hover:border-b-2 hover:border-red-600"
      >
        {{ type.name }}
      </div>-->
      <ul>
        <li v-for="x in list" :key="x.class">{{ x.name }}</li>
      </ul>
    </div>
</template>