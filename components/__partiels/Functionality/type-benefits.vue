<template>
   <div class="">
      <!--className -->
      <div class="hidden" v-for="site in WebSite" :key="site.bgcolor">
         <a
            :class="' relative flex flex-col text-gray-700 px-6 py-8 h-[12em]  rounded-lg transition duration-300 ease-in-out '"
         >
            <div
               class="absolute inset-0 z-20 w-full h-full border-0 rounded-md bg-gray-700/95"
            >
               <NuxtImg
                  class="w-full h-full object-cover border-0 rounded-md opacity-30"
                  :src="site.image"
                  alt=""
               />
            </div>
            <!-- <div class="flex justify-end text-3xl text-blue-500 absolute inset-0 z-20 right-5 top-4">
          <span>&uarr;</span>
        </div> -->
            <div class="flex flex-col h-full z-20">
               <span class="flex items-center text-blue-500 text-xl font-bold">
                  {{ site.number }}
               </span>

               <div class="flex flex-col">
                  <span class="text-lg font-medium text-gray-50 py-2">
                     {{ site.title }}
                  </span>

                  <OnlyDescription
                     :title="site.short_describle"
                     extraclass="text-gray-100"
                     format="small"
                  />
               </div>
            </div>
         </a>
      </div>

      <div class="relative">
         <video
            id="video-dlx"
            class="w-[640px]"
            @loadedmetadata="loadedmetadata"
            @ended="endedvideo"
            preload="auto"
           controls
         >
            <source src="/videos/sw7.mp4" type="video/mp4" />
         </video>

         <div
            v-if="videoG"
            class="absolute flex justify-center items-center top-0 left-0 w-full h-full outline-none"
         >
            <div
               @click="play"
               class="rounded-full shadow-xl bg-blue-500/80 cursor-pointer p-6"
            >
               <NuxtImg class="h-8" src="/icons/play.svg" alt="" />
            </div>
         </div>
         <!--  -->
         <div
            v-if="!videoG"
            class="absolute flex justify-center items-center top-0 left-0 w-full h-full outline-none"
         >
            <div
               @click="play"
               class="rounded-full shadow-xl bg-blue-500/80 cursor-pointer p-6"
            >
               <NuxtImg class="h-8" src="/icons/pause.png" alt="" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import OnlyDescription from '../Texts/OnlyDescription.vue';

export default {
   name: 'BenefitsTypes',
   props: ['className', 'Describle'],
   filters: {
      sub(value) {
         if (value != '') {
            let test = value.substr(0, 20);
            return test;
         }
      },
   },
   data() {
      return {
         videoG: true,
         HeightAnnimate: '',
         contentVisible: '00',
         WebSite: [
            {
               number: 'Site  Internet',
               title: 'Creation Site internet Web',
               logo: `company`,
               HoverClass: ' ',
               short_describle: `site vitrine,
           site sur messure,
            site E-Commerce, 
              Blog,Landing Page,
               Portfolio,
                Autres...`,
               describle_def_1: [],
               href_id: '/nos-prestations/website',
               image: `https://NuxtImg.freepik.com/photos-gratuite/developpement-site-web_53876-95315.jpg?w=826&t=st=1650817877~exp=1650818477~hmac=a36ffdb4c4158413d19628afa88276d18cf2a8fc13e76402df5acfc63f2ac400`,
            },
            {
               number: 'Application Mobile',
               title: 'Creation Application Mobile',
               logo: `company`,
               HoverClass: 'hover:border-2  hover:text-gray-700',
               href_id: '/nos-prestations/desgin',
               short_describle: `Via application : Commande, réservation, web App, blog formation, Custom App, Application sur mesure`,
               image: `https://NuxtImg.freepik.com/psd-gratuit/gros-plan-telephone-portable-montrant-recette-ecran_53876-11966.jpg?t=st=1650817790~exp=1650818390~hmac=d7db37de2a9adea151cced1a6d9dda01104c4d0f641a3cde94efd34ac28d2fd1&w=740`,
            },
            {
               number: 'Marketing Digital',
               title: 'Creation de media',
               logo: `company`,
               HoverClass: 'hover:border-2  hover:text-gray-700',
               href_id: '/nos-prestations/desgin',
               short_describle: `Spot Publicitaire, publicité digitale, e-mail marketing, e-whatsapp Compagne, Sms en masse`,
               image: `https://NuxtImg.freepik.com/photos-gratuite/marketing-numerique-icones-gens-affaires_53876-94833.jpg?t=st=1650817913~exp=1650818513~hmac=bae771aef67d14b3b0de1d2f68087fbc4195aef5bb74994aaa3bbd65abd8ee91&w=740`,
            },
            {
               number: 'Évènements',
               title: 'Nous les trouverons pour vos!',
               logo: `company`,
               HoverClass: 'hover:border-2  hover:text-gray-700',
               href_id: '/nos-prestations/desgin',
               short_describle: `Photographe, Cameramen, Cuisiner, Cadeau, Croquet, Cambuse, personnel, salles, assistance et bien autres....`,
               image: `https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789__480.jpg`,
            },
         ],
      };
   },
   components: { OnlyDescription },

   mounted() {
      const myVideo = document.getElementById('video-dlx');
      myVideo.currentTime = 10;
   },

   methods: {
      play() {
         const myVideo = document.getElementById('video-dlx');
        
         if (myVideo.paused) {
            this.videoG = false;
            myVideo.play();
         } else {
            this.videoG = true;
            myVideo.pause();
         }
      },
      endedvideo(){
        this.videoG = true;
      }
   },
};
</script>
