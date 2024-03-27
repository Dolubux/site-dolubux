// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ['@nuxt/content'],

   css: ['@/assets/css/main.css'],
   app: {
      head: {
         title: 'Dolubux',
         htmlAttrs: {
           lang: 'fr',
         },
         meta: [
           { charset: 'utf-8' },
           { name: 'viewport', content: 'width=device-width, initial-scale=1' },
           { hid: 'description', name: 'description', content: '' },
           { name: 'format-detection', content: 'telephone=no' },
         ],
         link: [
           { rel: 'icon', type: 'image/png', href: '/logo/LogoDlx.png' },
           {
             href: 'https://use.typekit.net/vjy4axf.css',
             rel: 'stylesheet',
           },
           {
             href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
             rel: 'stylesheet',
           },
         ],
       },
   },

   devtools: {
      enabled: true,
   },
   typescript: {
      strict: false,
   },
   plugins: [
      '@/plugins/vue-lazyload',
      { src: '@/plugins/wow_pg.js', ssr: false },
    ],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
});
