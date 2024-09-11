<template>
   <div class="m-auto flex flex-col mt-8 gap-4">
      <span class="text-center font-bold text-xl"
         >+ de 30 entreprises nous font déjà confiance</span
      >

      <div class="bg-gray-50 w-full">
         <div class="flex justify-between py-8 w-10/12 m-auto">
            <swiper
               :navigation="false"
               :modules="modules"
              
               :space-between="50"
               :loop="true"
               :autoplay="{
                  delay: 1000,
                  disableOnInteraction: true,
               }"
               :breakpoints="{
                  320: { slidesPerView: 2, spaceBetween: 10 },
                  480: { slidesPerView: 3, spaceBetween: 10 },
                  768: { slidesPerView: 4, spaceBetween: 10 },
                  1024: { slidesPerView: 4, spaceBetween: 10 },
               }"
               class="w-full"
            >
               <swiper-slide v-for="partenaire in Partenaires">
                  <div class="h-12 w-32">
                     <img
                        :src="partenaire.name"
                        class="w-full h-full object-contain"
                        alt=""
                     />
                  </div>
               </swiper-slide>
            </swiper>
         </div>
      </div>
   </div>
</template>
<script>
// Import Swiper Vue.js components
import { reactive } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default {
   components: {
      Swiper,
      SwiperSlide,
   },
   setup() {
      const Partenaires = reactive([
         {
            name: '/partenaires/dooya.png',
         },
         {
            name: '/partenaires/phylosanite.png',
         },
         {
            name: '/partenaires/logo_carmen_security.webp',
         },
         {
            name: '/partenaires/likidons.png',
         },
         {
            name: '/partenaires/zoolouk.png',
         },
         {
            name: '/partenaires/logo_djoumaf.png',
         },
      ]);

      return {
         Partenaires,
         modules: [Navigation, Autoplay],
      };
   },
};
</script>
