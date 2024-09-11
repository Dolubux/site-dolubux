<template>
   <div
      class="w-full big:w-10/12 m-auto rounded-lg pt-24 pb-8 md:pt-20 relative"
   >
      <!-- <div
      class="absolute inset-0 z-20 bg-gray-900 opacity-10 w-full h-full border-0"
    >
      <NuxtImg
      class="w-full h-full object-cover border-0"
      src="https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789__480.jpg"
      alt=""
    />
    </div> -->

      <div
         class="grid grid-cols-2 gap-x-16 lg:grid-cols-1 w-10/12 m-auto md:text-3nxl font-sans"
      >
         <div class="py-8 px-4 md:px-0 z-20 w-full">
            <div class="flex flex-col gap-4 w-[95%] md:w-full xl:w-10/12">
               <div
                  class="flex flex-col animate__animated animate__slideInLeft z-20 w-full lg:text-5xl text-gray-700 text-[3.8em] leading-[1em] md:text-[1.3em] xl:text-5xl font-bold"
               >
                  <span class="text-blue-500 font-black">
                     Propulser votre entreprise,
                  </span>
                  <span class=""> vers le succès.</span>
               </div>
               <only-description
                  title="Dolubux vous accompagne dans la conception d'applications Web et mobile visant à améliorer les performances commerciales de votre entreprise."
                  :extraclass="'pt-2 pb-6 text-gray-700 w-10/12 font-medium'"
                  format="small"
               />
            </div>

            <div
               class="flex justify-between w-10/12 md:w-full mb-8 text-gray-700"
            >
               <div v-for="(ch, index) in Chiff">
                  <div
                     class="flex flex-col justify-center text-center"
                     :class="index % 2 != 0 ? 'border-x-2 px-6' : 'pr-4'"
                  >
                     <span class="text-5xl md:text-4xl font-black">
                        <span class=""></span>
                        <span class=""> {{ ch.value }} </span>
                     </span>
                     <span class="text-base">{{ ch.name }}</span>
                  </div>
               </div>
            </div>
            <div class="flex items-center gap-x-4">
               <only-button
                  :title="'Commencez'"
                  :bg="true"
                  :nohref="false"
                  :emit="'#catalogues'"
               />
            </div>
         </div>

         <div class="">
            <NuxtImg
               class="lg:hidden w-full h-full object-cover"
               
               :src="'/images/banner-two.jpg'"
               alt=""
            />
         </div>
      </div>
   </div>

   <div class="">
      <Partner />
   </div>
</template>

<script>
import OnlyButton from '../__partiels/Buttons/OnlyButton.vue';
import OnlyDescription from '../__partiels/Texts/OnlyDescription.vue';
import { reactive } from 'vue';
import Partner from './partner.vue';
export default {
   components: { OnlyButton, OnlyDescription, Partner },
   setup() {
      const Chiff = reactive([
         {
            name: 'Projets',
            value: '+30',
         },
         {
            name: 'Satisfaits',
            value: '100% ',
         },
         {
            name: 'Trafic',
            value: 'x150',
         },
      ]);

     

      return { Chiff };
   },
};
</script>

<style>
.animate__delay-05s {
   animation-delay: 0.5s !important;
}
.animate__delay-1s {
   animation-delay: 1s !important;
}
.animate__delay-2s {
   animation-delay: 2s !important;
}
.animate__delay-03s {
   animation-delay: 0.3s !important;
}
</style>
