<template>
   <section>
      <div
         class="flex flex-col pt-32 md:pt-24 w-full big:w-8/12 m-auto"
         id="catalogues"
      >
         <div class="mb-16 md:mb-8">
            <header-section :sub="'Catalogues'" :title="'Notre Catalogues'" />
         </div>

         <div class="grid grid-cols-4 w-10/12 m-auto lg:w-10/12">
            <div
               class="flex justify-center items-center border-b-2 py-4 text-center cursor-pointer gap-2 min-w-max"
               :class="[
                  menu.active === true
                     ? 'border-b-2 border-blue-500 text-gray-700 '
                     : '',
               ]"
               v-for="menu in catalogueMenu"
               :key="menu.id"
               @click="activeLinksInCatalogueMenu(menu.id)"
            >
               <NuxtImg class="h-8" :src="menu.icon" alt="" />
               <span class="md:text-sm text-lg font-bold md:hidden">{{
                  menu.name
               }}</span>
            </div>
         </div>

         <div class="">
            <div
               class="grid grid-cols-3 gap-8 md:gap-4 w-10/12 mt-8 m-auto md:grid-cols-1 xl:grid-cols-2 big:w-full wow animate__animated animate__backInLeft transition duration-500 ease-in-out"
            >
               <div
                  v-for="catalogue in catalogues"
                  v-show="filterProducts === catalogue.type"
                  :key="catalogue.id"
                  class="relative flex flex-col justify-between gap-2 ring-[1px] ring-gray-50 p-4 rounded-md cursor-pointer"
               >
                 <div class="flex flex-col gap-1">
                  <div class="w-full">
                     <NuxtImg
                        :src="catalogue.image"
                        class="rounded-md w-full h-[220px] md:h-[180px] object-cover object-top"
                        
                        alt=""
                     />
                  </div>
                  <div class="flex flex-col items-between h-full">
                     <div class="flex justify-between h-full mt-1">
                        <span class="text-lg font-bold mr-2 w-full">
                           {{ catalogue.title }}
                        </span>
                     </div>
                     <span class="text-xl mt-2">
                        {{ catalogue.price }}
                     </span>
                     <!-- <only-description
                        :title="catalogue.describle"
                        :extraclass="'mt-3 hidden'"
                        format="small"
                     /> -->
                  </div>
                 </div>
                  <div class="py-2 flex flex-col ">
                     <span class="text-base font-extralight"
                        >Contactez-nous :</span
                     >

                     <div class="flex items-center  gap-2">
                        <a  target="_blank"
                           href="tel:+2250150688497"
                           class="border-[1px] px-4 py-3"
                        >
                           <span class="text-base text-blue-500 font-extrabold"
                              >Appeler</span
                           >
                        </a>
                        Ou
                        <a  target="_blank"
                           :href="get_wa_dataContacts"
                           class="border-[1px] px-4 py-3"
                        >
                           <span class="text-base text-blue-500 font-extrabold"
                              >WhatsApp</span
                           >
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import HeaderSection from '../__partiels/Labels/HeaderSections.vue';
import OnlyDescription from '../__partiels/Texts/OnlyDescription.vue';

export default {
   //...
   components: {
      HeaderSection,
      OnlyDescription,
   },

   data() {
      return {
         catalogueMenu: [
            {
               id: 0,
               name: 'Site Web',
               ref: 'sw',
               active: true,
               icon: '/catalogues/web.png',
            },
            {
               id: 1,
               name: 'Application Mobile',
               ref: 'am',
               active: false,
               icon: '/catalogues/phone.png',
            },
            {
               id: 2,
               name: 'E-commerce',
               ref: 'bq',
               active: false,
               icon: '/catalogues/bq.png',
            },
            {
               id: 3,
               name: 'Formations',
               ref: 'fm',
               active: false,
               icon: '/catalogues/dlx-student.svg',
            },
         ],
         filterProducts: 'sw',
         catalogues: [
            {
               id: '3',
               image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.futura-sciences.com%2Fbuildsv6%2Fimages%2Fwide1920%2F6%2F0%2F7%2F6075cf7578_50173490_e-shop.jpg&f=1&nofb=1',
               title: 'Créez un site e-commerce',
               label: 'Site Web',
               price: 'A partir 500.000Fcfa',
               type: 'bq',
               describle:
                  'Nous vous proposerons des thèmes de qualité supérieur que nous pouvons mettre en place pour vous. contactez-nous et ensemble nous trouverons la meilleure solution adaptée à votre projet e-commerce. Faite nous confiance, nous le mènerons à bien et dans les délais.',
            },
            {
               id: '1',
               image: '/catalogues/e-commerce-single.jpg',
               title: 'Créez une Boutique en ligne',
               label: 'Site Boutique',
               price: 'A partir 225.000Fcfa',
               type: 'bq',
               describle:
                  "Wahoo! devenez proprietaire de votre boutique en linge, afin de faire grandir votre business. entendez dès maintenant votre réseau d'influence et votre crédibilité sur le net auprès de vos clients.",
            },
            {
               id: '8',
               image: '/catalogues/e-commerce-unique.png',
               title: 'Site e-commence & App Mobile',
               label: 'Site E-commerce',
               price: 'A partir 1.100.000',
               type: 'bq',
               describle:
                  "Wahoo! devenez proprietaire de votre boutique en linge, afin de faire grandir votre business. entendez dès maintenant votre réseau d'influence et votre crédibilité sur le net auprès de vos clients.",
            },
            {
               id: '3',
               image: '/catalogues/sit-web-app.png',
               title: 'Créez une application web',
               label: 'Site Web',
               price: 'A partir 400.000Fcfa',
               type: 'sw',
               describle:
                  "Pour tous vos projets de création d'avance... contactez-nous et ensemble nous trouverons la meilleure solution adaptée à votre projet. Faite nous confiance, nous le mènerons à bien et dans les délais.",
            },

            {
               id: '3',
               image: '/catalogues/sit-landing.jpg',
               title: 'Créez une Landing Page',
               label: 'Site Web',
               price: 'A partir 120.000Fcfa',
               type: 'sw',
               describle:
                  'Faite la promotion de vos produits, services et autres. Grâce à une landing Page vous pouriez attiendre ou meme toucher des millons de personne intersse.',
            },
            {
               id: '3',
               image: '/catalogues/sit-web-pro.png',
               title: 'Créez un site web Professionnel',
               label: 'Site Web',
               price: 'A partir 200.000Fcfa',
               type: 'sw',
               describle:
                  "Vous être une entreprise, un startup ou un indépendant. Et vous aimerez augmenter la visibilité, de votre entreprise, de vos produits et service sur le net ! ceci est pour vous ! Commencez dès aujourd'huit",
            },
            {
               id: '3',
               image: 'https://cdn.dribbble.com/userupload/15607301/file/original-aec2f51d33fc6d02209c18dc9fec4615.png?resize=1024x768',
               title: 'Créez un logiciel de gestion de stocks',
               label: 'Site Web',
               price: 'A partir 500.000Fcfa',
               type: 'sw',
               describle:
                  "Pour tous vos projets de création d'avance... contactez-nous et ensemble nous trouverons la meilleure solution adaptée à votre projet. Faite nous confiance, nous le mènerons à bien et dans les délais.",
            },
            {
               id: '3',
               image: 'https://cdn.dribbble.com/userupload/15745775/file/original-f66e4149efee704c2d7f2e15b08b4e4c.png?crop=0x0-4800x3600&resize=320x240&vertical=center',
               title: 'Créez une app de gestion de vente',
               label: 'Site Web',
               price: 'A partir 600.000Fcfa',
               type: 'sw',
               describle:
                  "Pour tous vos projets de création d'avance... contactez-nous et ensemble nous trouverons la meilleure solution adaptée à votre projet. Faite nous confiance, nous le mènerons à bien et dans les délais.",
            },
            {
               id: '3',
               image: '/catalogues/image_delivery.png',
               title: 'Créez un site & webApp de livraison',
               label: 'Site Web',
               price: 'A partir 750.000Fcfa',
               type: 'sw',
               describle:
                  "Pour tous vos projets de création d'avance... contactez-nous et ensemble nous trouverons la meilleure solution adaptée à votre projet. Faite nous confiance, nous le mènerons à bien et dans les délais.",
            },
            // {
            //    id: '4',
            //    image: '/catalogues/sit-web-pro.png',
            //    title: 'ERP (Progiciel de gestion entreprise)',
            //    label: 'Site Web',
            //    price: '200.000',
            //    type: 'sw',
            //    describle:
            //       "Vous être une entreprise, un startup ou un indépendant. Et vous aimerez augmenter la visibilité, de votre entreprise, de vos produits et service sur le net ! ceci est pour vous ! Commencez dès aujourd'huit",
            // },
            // {
            //    id: '4',
            //    image: '/catalogues/sit-web-pro.png',
            //    title: 'Logiciel de gestion de stock ',
            //    label: 'Site Web',
            //    price: '200.000',
            //    type: 'sw',
            //    describle:
            //       "Vous être une entreprise, un startup ou un indépendant. Et vous aimerez augmenter la visibilité, de votre entreprise, de vos produits et service sur le net ! ceci est pour vous ! Commencez dès aujourd'huit",
            // },


            // Application Mobile
            {
               id: '5',
               image: '/catalogues/am-android.png',
               title: 'Créez une application Android & IOS',
               label: 'Application Mobile',
               price: 'A partir 800.000Fcfa',
               type: 'am',
               describle:
                  "Vous avez un évènement à promouvoir, une conférence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut.",
            },
            {
               id: '5',
               image: '/catalogues/am-android-ios.png',
               title: 'Créez une web app (PWA)',
               label: 'Application Mobile',
               price: 'A partir 450.000Fcfa',
               type: 'am',
               describle:
                  "Vous avez un évènement à promouvoir, une conférence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut.",
            },

            {
               id: '5',
               image: '/catalogues/am-ios.png',
               title: 'Créez une application sur messure',
               label: 'Application Mobile',
               price: '(SUR MESURE)',
               type: 'am',
               describle:
                  "Vous avez un évènement à promouvoir, une conférence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut.",
            },

            // Formations

            {
               id: '5',
               image: '/catalogues/formation-word.jpeg',
               title: 'Formation en bureautique : Word, Excel, PowerPoint, et autres outils.',
               label: 'Application Mobile',
               price: '15.000Fcfa pendant 2mois',
               type: 'fm',
               describle:
                  "Vous avez un évènement à promouvoir, une conférence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut.",
            },
            {
               id: '5',
               image: '/catalogues/fm-ia.jpg',
               title: `Apprenez à travailler rapidement avec les outils d'intelligence artificielle.`,
               label: 'Application Mobile',
               price: '30.000Fcfa pendant 1-2mois',
               type: 'fm',
               describle:
                  "Vous avez un évènement à promouvoir, une conférence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut.",
            },
            
            {
               id: '5',
               image: '/catalogues/fm-infographie.jpg',
               title: "Formation Infographie (Les basses de photoshop et d'autres outils.)",
               label: 'Application Mobile',
               price: '35.000Fcfa pendant 2-3mois',
               type: 'fm',
               describle:
                  "Vous avez un évènement à promouvoir, une conférence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut.",
            },
            {
               id: '5',
               image: '/catalogues/fm-developpement-front-end.jpg',
               title: 'MENTOR : Développement Front-end JS/TS | VueJs | ReactJs, TailwindCss',
               label: 'Application Mobile',
               price: '50.000Fcfa pendant 3-6mois',
               type: 'fm',
               describle:
                  "Vous avez un évènement à promouvoir, une conférence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut.",
            },
            {
               id: '5',
               image: '/catalogues/fm-dev.jpg',
               title: 'MENTOR : Développement Back-end Laravel | Express | NestJs, BD',
               label: 'Application Mobile',
               price: '50.000Fcfa pendant 3-6mois',
               type: 'fm',
               describle:
                  "Vous avez un évènement à promouvoir, une conférence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut.",
            },
            {
               id: '5',
               image: '/catalogues/fm-mobile-app.jpg',
               title: 'MENTOR : Développement Mobile Ionic Framework | React Native | Flutter',
               label: 'Application Mobile',
               price: '50.000Fcfa pendant 3-6mois',
               type: 'fm',
               describle:
                  "Vous avez un évènement à promouvoir, une conférence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut.",
            },
         ],
      };
   },

   computed: {
      get_wa_dataContacts() {
         return process.env.DOLUBUX_WHATSAPP;
      },
   },

   mounted() {},

   methods: {
      openModalForm({ bool, custom }) {
         this.$store.commit('modalForm', { bool, custom });
         console.log(this.$store.state.customContactForm);
      },

      fliterProductsByCatalogue(reference) {
         this.filterProducts = reference;
      },

      activeLinksInCatalogueMenu(linksHasActived) {
         for (let i = 0; i < this.catalogueMenu.length; i++) {
            const el = this.catalogueMenu[i];
            el.active = false;
            this.catalogueMenu[linksHasActived].active = true;
            this.fliterProductsByCatalogue(
               this.catalogueMenu[linksHasActived].ref
            );
         }
      },
   },
};
</script>
<style>
html {
   background-color: white !important;
}
.shadow-3xl {
   --tw-shadow: 0px 30px 75px -25px rgba(0, 0, 0, 0.25);
   box-shadow: var(--tw-shadow);
}
.h-72 {
   height: 20rem;
}
.grid-cols-wx {
   grid-template-columns: 24px calc(100% - 24px);
}
</style>
