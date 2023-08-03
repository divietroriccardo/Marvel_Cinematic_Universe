<script setup>
    const props = defineProps(['type','name', "releaseDate", "phase", "img", "episodes"])

    const imgPath = "src/assets/img/" + props.img
    const cover = "Copertina di " + props.name

    const whatDate = () =>
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
    <div class="grid grid-flow-row auto-rows-max max-w-sm overflow-hidden pt-6">
        <div class="flex justify-center">
            <img class="w-32" :src="imgPath" :alt="cover">
        </div>
        
        <div class="px-6 pt-4 pb-10">
            <div class="font-bold text-xl text-black mb-2 text-center">{{ name }}</div>
        </div>

        <div class="flex justify-center px-6 pt-1 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ type }}</span>
            <span v-if="phase != 'Nessuna'" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ "Fase " + phase }}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ whatDate() }}</span>
        </div>
    </div>
</template>