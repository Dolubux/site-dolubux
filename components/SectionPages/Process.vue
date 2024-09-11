<template>
  <div class="flex flex-col m-auto pt-8 lg:pt-16 w-full big:w-8/12">
    <div class="">
      <div class="mb-16 md:mb-8">
        <header-section
          :sub="'Valeurs'"
          :title="'Nos Valeurs'"
          textColor="text-gray-700"
        />
      </div>
      <div
        class="grid grid-cols-3 gap-16 w-10/12 m-auto md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8 big:w-full"
        data-wow-offset="30"
      >
        <div v-for="item in Process" :key="item.id">
          <div class="flex flex-col justify-start items-censtartter wow animate__animated animate__flipInX">
            <NuxtImg
              class="mb-4 h-12 w-12"
              :src="`/icons/${item.NuxtImg}.png`"
              
              alt=""
            />
            <div class="flex flex-col items-start">
              <only-text-title
                :title="item.title"
                :color="item.color"
                size="large"
              />
              <only-description
                :title="item.description"
                extraclass="mt-2 text-start"
                format="deflaut"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from '../__partiels/Labels/HeaderSections.vue'
import OnlyDescription from '../__partiels/Texts/OnlyDescription.vue'
import OnlyTextTitle from '../__partiels/Texts/OnlyTextTitle.vue'
export default {
  components: { HeaderSection, OnlyDescription, OnlyTextTitle },
  data() {
    return {
      Process: [
        {
          id: '0',
          title: 'Transparence',
          description:
            "Chaque projet se déroule dans un environnement qui peut varier d'un projet à un autre. Ainsi, la réalisation de votre projet pourrait se frotter à des variables indépendantes de votre volonté.",
          color: 'text-blue-500',
          NuxtImg: 'dlx-transparence',
        },
        {
          id: '1',
          title: 'Créativité',
          description:
            "Il y a trois réactions possibles à tout design oui, non et whaou !La troisième est celle que nous visons. Un design de qualité, est celui qui s'accorde parfaitement au cadre dans lequel il s'inscrit.",
          color: 'text-yellow-300',
          NuxtImg: 'dlx-creativite',
        },
        {
          id: '2',
          title: 'Expérience',
          description: `Dolubux, met à votre disposition son expérience et son savoir-faire, afin de concevoir la meilleure solution pour votre projet business. Nous vous assurerons un service efficace  et de qualité superieur.`,
          color: 'text-blue-500',
          NuxtImg: 'dlx-experiance',
        },
        // {
        //   id: '3',
        //   title: 'Performance',
        //   description: `Quoi que nous faisions, ont le faire bien mieux ! pour toujours mettre à vos dispositions des services de qualité supérieure ! pour vos sites web, application mobile, produits digitaux et autres.`,
        //   color: 'text-yellow-300',
        //   NuxtImg: 'dlx-performance',
        // },
      ],
    }
  },
}
</script>
