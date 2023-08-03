<script setup>
    import { useRoute } from 'vue-router';

    import Card from "./CardComponent.vue"
    import SideMenu from "./SideMenuComponent.vue"

    import { useListStore } from "../stores/list.js"

    const route = useRoute();

    const listStore = useListStore()
    listStore.loadData()
    

</script>

<template>
    <div class="w-screen flex lg:flex-row justify-end items-start pb-4 bg-white min-h-screen">
      <div class="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center lg:justify-start content-around w-screen lg:w-full">
        <Card 
          v-for="el in listStore.getList"
          :key="el.name"
          :type="el.type"
          :name="el.name"
          :releaseDate="el.releaseDate"
          :phase="el.phase"
          :img="el.img"
          :episodes="el.episodes"
        />
      </div>
      
      <!-- <SideMenu /> -->
    </div>
    <h1 class="text-black">{{ route.params.type }}</h1>
    <p class="text-black">Ciao</p>
</template>