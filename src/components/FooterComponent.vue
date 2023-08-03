<script setup>
    import FooterLogo from "./FooterLogoComponent.vue"
    import FooterLinks from "./FooterLinksComponent.vue"
    import FooterSocials from "./FooterSocialsComponent.vue"
</script>

<template>
    <footer class="p-4 sm:p-6 bg-gray-900">
        <div class="md:flex md:justify-between">
            <FooterLogo />

            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <FooterLinks />
            </div>
        </div>

        <hr class="border-gray-600 sm:mx-auto lg:my-8" />

        <div class="mt-5 sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center">
                © 2023 
                <a href="https://www.marvel.com/" class="hover:underline">MARVEL</a>
            </span>

            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <FooterSocials />
            </div>
        </div>
    </footer>
</template>