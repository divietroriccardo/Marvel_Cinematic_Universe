<script setup>
    const links =
    [
        {
            title: "RESOURCES", 
            pages: [
                        { name: "Marvel", link: "https://marvel.com/" }, 
                        { name: "Tailwind CSS", link: "https://tailwindcss.com/" }
                    ]
        },
        {
            title: "FOLLOW US", 
            pages: [
                        { name: "Instagram", link: "https://marvel.com/" }, 
                        { name: "Facebook", link: "https://tailwindcss.com/" },
                    ]
        },
        {
            title: "LEGAL", 
            pages: [
                        { name: "Privacy Policy", link: "#" }, 
                        { name: "Terms & Conditions", link: "#" }
                    ]
        },
    ]
</script>

<template>
    <div class="ml-6" v-for="el in links" :key="el.title">
        <h2 class="mb-6 text-sm font-semibold uppercase text-white">{{ el.title }}</h2>

        <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4" v-for="page in el.pages" :key="page.name">
                <a :href="page.link" class="hover:underline">{{ page.name }}</a>
            </li>
        </ul>
    </div>
</template>