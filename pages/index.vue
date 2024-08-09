<template>
   <div>

      <div style="width: 100vw; height: 100vh" class="fixed"></div>
      <div class="big:mx-auto relative">
         <div class="z-50">
            <banner />
            <process />
            <benefits />

            <catalogues />
            <hebergements />

            <contacts />
         </div>
      </div>
   </div>
</template>

<script>

import Banner from '~/components/SectionPages/Banner.vue';
import Process from '~/components/SectionPages/Process.vue';
import Benefits from '~/components/SectionPages/Benefits.vue';
import Functionality from '~/components/SectionPages/Functionality.vue';
import Contacts from '~/components/SectionPages/Contacts.vue';
import Hebergements from '~/components/SectionPages/Hebergements.vue';
import Catalogues from '~/components/SectionPages/Catalogues.vue';
export default {
   head: {
      title: 'Accueil - Dolubux',
      meta: [
         { hid: 'og:title', property: 'og:title', content: 'Dolubux' },
         {
            hid: 'og:description',
            property: 'og:description',
            content:
               'Dolubux est le partenaire pour mener à bien votre projet de conception et vous aider à démarrer ou à faire évoluer les performances de votre commerce, entreprise ou PME sur Internet. Chez Dolubux, nous faisons des applications web et mobiles professionnels , mais notre spécialité est de faire sonner votre téléphone d’affaires afin de générer de nombreux leads de qualité.',
         },
         {
            hid: 'og:image',
            property: 'og:image',
            content: 'https://dolubux.vercel.app/logo/LogoDlx.png',
         },
      ],
   },

   components: {
      Process,
      Benefits,
      Functionality,
      Contacts,
      Hebergements,
      Banner,
      Catalogues,
   },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
* {
   outline: none !important;
   @apply text-opacity-95 !important;
}
html {
   box-sizing: border-box;
   background-color: white !important;
   scroll-behavior: smooth;
}
.shadow-levl-2 {
   --tw-shadow: rgba(0, 0, 0, 0.05);
   box-shadow: -30px 0px 20px var(--tw-shadow);
}
</style>
