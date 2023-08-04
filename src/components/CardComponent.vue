<script setup>
    import { useRoute } from 'vue-router';

    const props = defineProps(['type','name', "releaseDate", "phase", "img", "episodes"])

    const imgPath = "src/assets/img/" + props.img
    const cover = "Copertina di " + props.name

    const route = useRoute()

    const whichDate = () =>
    {
        if (props.type == "Serie TV" || props.type == "Web Serie")
        {
            const year1 = props.episodes[0].releaseDate[2]
            const year2 = props.episodes[props.episodes.length - 1].releaseDate[2]
            
            return year1 != year2 ? year1 + "-" + year2 : year1
        }
        
        else
        {
            return props.releaseDate[0] + "/" + props.releaseDate[1] + "/" + props.releaseDate[2]
        }
    } 
        
</script>

<template>
    <div class="grid grid-flow-row auto-rows-max lg:max-w-sm overflow-hidden pt-6">
        <div class="flex justify-center h-52">
            <img class="w-40" :src="imgPath" :alt="cover">
        </div>
        
        <div class="h-28 lg:h-28 px-6 pt-4 pb-10">
            <div class="font-bold text-xl text-black text-center">{{ name }}</div>
        </div>

        <div class="flex justify-center h-14 px-6 pt-1 pb-2">
            <span
                v-if="route.params.type == 'Tutti'"
                class="inline-block bg-gray-200 rounded-full px-1 py-1 text-center text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
                {{ type }}
            </span>

            <span 
                v-if="phase != 'Nessuna'" 
                class="inline-block bg-gray-200 rounded-full px-1 py-1 text-center text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
                {{ "Fase " + phase }}
            </span>

            <span class="inline-block bg-gray-200 rounded-full px-1 py-1 text-center text-sm font-semibold text-gray-700 mr-2 mb-2">
                {{ whichDate() }}
            </span>
        </div>
    </div>
</template>