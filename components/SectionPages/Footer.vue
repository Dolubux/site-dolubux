<template>


  <div>




    <div class=" relative font-sans mt-32">
      <img
          class="w-full h-full object-cover absolute -z-40"
          src=""
          v-lazy="'/images/dlx-illustra.jpg'"
          alt=""
        />
        <div class="absolute w-full h-full bg-gray-900 opacity-95 -z-40"></div>
        <div
  class=" text-center text-surface/75 5 z-50 lg:text-left text-white font-sans w-10/12 m-auto">
  <div
    class="flex items-center justify-center border-b-[1px] border-neutral-200/50 p-6 dark:border-white/10 lg:justify-between">
    <div class="me-12 hidden lg:block">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Social network icons container -->
    <div class="flex justify-center">
      <a :href="get_fb_dataContacts" target="_blank" class="me-6 [&>svg]:h-6 [&>svg]:w-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 320 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
          <path
            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </a>
      <a :href="get_in_dataContacts" target="_blank" class="me-6 [&>svg]:h-6 [&>svg]:w-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
          <path
            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </a>
      <a href="" class="[&>svg]:h-6 [&>svg]:w-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 496 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
  <div class="m-auto py-10 text-center md:text-left">
    <div class="grid-1 grid gap-4 md:grid-cols-8 lg:grid-cols-2 grid-cols-4">
      <!-- TW Elements section -->
      <div class=" md:col-span-2">
        <h6
          class="mb-4 flex gap-2 items-center justify-center font-semibold uppercase ">
          <a href="" class="flex items-center gap-2">
              <img
                class="h-10 md:w-10"
                src=""
                v-lazy="'/logo/LogoDlx.png'"
                alt=""
              />
              <!-- <span class="text-xl font-bold text-blue-500"> Dolubux. </span> -->
            </a>
            <div class="flex flex-col jusify-start items-start">
              <span class="text-xl md:text-base font-extrabold text-blue-500">
                Dolubux
              </span>
              <span class="text-xs">Notre Objectif, Votre Croissance.</span>
            </div>
        </h6>
        <p>
          <only-description
            title="Dolubux est le partenaire pour mener à bien votre projet de
            conception et vous aider à démarrer ou à faire évoluer les
            performances de votre commerce, entreprise ou PME sur
            Internet."
            extraclass="flex text-center"
            format="deflaut"
          />
        </p>
      </div>
      <!-- Products section -->
      <div v-for="footer in get_DataFooter.ListDataFooter">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          {{footer.heading}}
        </h6>
        <p class="mb-4" v-for="link in footer.heading_links">
          <a :href="link.link">{{link.name}}</a>
        </p>
       
      </div>
    </div>
  </div>

</div>
    </div>
    <div
      class="bg-white z-80  px-6 text-gray-700 flex justify-center items-center text-center py-3 font-ligth text-base md:text-base"
    >
    Copyright © 2024 Dolubux. Tous droits reservés. Développé par dolubux.
    </div>
  </div>


  <!-- Footer container -->

</template>

<script>
import OnlyDescription from '../__partiels/Texts/OnlyDescription.vue'
import OnlyTextTitle from '../__partiels/Texts/OnlyTextTitle.vue'
export default {
  components: { OnlyTextTitle, OnlyDescription },
  data() {
    return {}
  },

  computed: {
    get_phone_dataContacts() {
      return process.env.DOLUBUX_PHONE_NUMBER
    },
    get_phone_name_dataContacts() {
      return process.env.DOLUBUX_PHONE_NUMBER
    },
    get_email_dataContacts() {
      return process.env.DOLUBUX_EMAIL
    },
    get_wa_dataContacts() {
      return process.env.DOLUBUX_WHATSAPP
    },
    get_fb_dataContacts() {
      return process.env.DOLUBUX_FACEBOOK
    },
    get_in_dataContacts() {
      return process.env.DOLUBUX_LINKEDIN
    },

    get_DataFooter() {
      const ListDataFooter = [
        {
          id: 1,
          heading: 'Liens Rapide',
          heading_links: [
            {
              name: 'Accueil',
              link: '/'
            },
            {
              name: 'Nos services',
              link: '#catalogues'
            },
            {
              name: 'A propos',
              link: '/a-propos'
            },
          ]
        },
        {
          id: 0,
          heading: 'Nos Prestations',
          heading_links: [
            {
              name: 'Site internet',
              link: this.get_wa_dataContacts,
            },
            {
              name: "Application mobile",
              link: this.get_wa_dataContacts,
            },
            {
              name: 'Application web',
              link: this.get_wa_dataContacts,
            },

            {
              name: 'E-Commanerce',
              link: this.get_wa_dataContacts,
            },
            {
              name: 'Blog',
              link: this.get_wa_dataContacts,
            },
            // {
            //   name:
            //     'Autre ( non officialiser : Redaction de contenu, PowerPoint, Ui-WebDesign, Banniere Web ) ',
            //   link: `mail:${StateContact.name}`
            // }
          ],
        },
        // {
        //   id: 2,
        //   heading: 'Service Digital',
        //   heading_links: [
        //     {
        //       name: 'Creation Newsletters',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'Compagne e-marketing',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'UI & UX Design Web',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'Banner Web',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'Spot publicitaire',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'Affiche publicitaire media',
        //       link: '/#prestations',
        //     },
        //   ],
        // },

        {
          id: 3,
          heading: 'Support',
          heading_links: [
            {
              name: 'Telephone',
              link: `tel:${this.get_phone_dataContacts}`,
            },
            {
              name: ' WhatSapp',
              link: `${this.get_wa_dataContacts}`,
            },
            {
              name: `Email`,
              link: `mail:${this.get_email_dataContacts}`,
            },
            {
              name: `SMS`,
              link: `tel:${this.get_phone_dataContacts}`,
            },
          ],
        },

      
      ]

      return {
        ListDataFooter: ListDataFooter,
      }
    },
  },
}
</script>
<style>
.grid-bos {
  grid-template-columns: 40% 60%;
}
</style>
