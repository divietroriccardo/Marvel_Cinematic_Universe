<script setup>
    import { useRoute } from 'vue-router';
    import { useListStore } from "../stores/list.js"

    import Card from "./CardComponent.vue"
    import SideMenu from "./SideMenuComponent.vue"

    const route = useRoute();

    const listStore = useListStore()
    listStore.loadData()
</script>

<template>
    <div class="w-screen flex lg:flex-row justify-end items-start pb-4 bg-white min-h-screen">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center lg:justify-start content-around w-screen lg:w-full">
        <Card 
          v-for="list in listStore.getFilteredList(route.params.type)"
          :key="list.name"
          :type="list.type"
          :name="list.name"
          :releaseDate="list.releaseDate"
          :phase="list.phase"
          :img="list.img"
          :episodes="list.episodes"
        />
      </div>
      
      <!-- <SideMenu /> -->
    </div>
</template>