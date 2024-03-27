<template>
  <section class="">
    <div
      class="py-32 md:py-24 m-auto flex flex-col w-full big:w-8/12"
      id="a-Propos"
    >
      <div class="mb-16 md:mb-8">
        <header-section
          :sub="'À propos'"
          :title="'En Savoir plus sur Dolubux'"
          textColor=""
        />
      </div>
      <div
        class="flex justify-between gap-16 m-auto w-10/12 big:w-full lg:flex-col animate__animated animate__bounceInLeft"
      >
        <div class="flex flex-col w-4/12 lg:w-10/12">
          <only-text-title
            title="Notre Objectif, Votre Croissance."
            color="text-yellow-300 mb-4 "
            size="large"
          />
          <only-description
            title="Notre savoir-faire se met au service de vos besoins dans le respect
            de votre budget en ayant toujours dans le viseur le meilleur
            rapport/qualité prix du marché."
            format="deflaut"
          />
        </div>

        <div class="flex flex-col gap-4 w-8/12 lg:w-full">
          <div v-for="about in ListAbout" :key="about.id">
            <div class="flex flex-col border-t-2 border-gray-200 p-8 md:p-4">
              <span class="text-2xl md:text-lg font-semibold text-gray-700">
                {{ about.title }}
              </span>
              <only-description
                :title="about.comments"
                extraclass="mt-2"
                format="deflaut"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderSection from '../__partiels/Labels/HeaderSections.vue'
import OnlyDescription from '../__partiels/Texts/OnlyDescription.vue'
import OnlyTextTitle from '../__partiels/Texts/OnlyTextTitle.vue'

export default {
  components: {
    HeaderSection,
    OnlyDescription,
    OnlyTextTitle,
  },
  data() {
    return {
      ListAbout: [
        {
          id: '0',
          title: "Pourquoi, Nous et personne d'autres?",
          comments: `Dolubux est le partenaire pour mener à bien votre projet de
                conception et vous aider à démarrer ou à faire évoluer les
                performances de votre commerce, entreprise ou PME sur Internet.
                Chez Dolubux, nous faisons des applications web et mobiles
                professionnels , mais notre spécialité est de faire sonner votre
                téléphone d’affaires afin de générer de nombreux leads de
                qualité.`,
        },

        {
          id: '2',
          title: "Notre philosohpie D'entreprise...",
          comments: `Chaque entreprise est différente par sa taille, ses
                objectifs et son budget. C’est pourquoi nous ne proposons pas
                une solution calquée pour un client, tout au contraire, nous
                proposons que des solutions sur-mesure. Notre savoir-faire se
                met au service de vos besoins dans le respect de votre budget en
                ayant toujours dans le viseur le meilleur rapport/qualité prix
                du marché.`,
        },

        {
          id: '3',
          title: 'Relation Be to Be Avec Nos Clients...',
          comments: `Nous créons avec nos clients, une relation de confiance, afin
           de mieux comprendre-les besoin ou problématique lier à leurs projets,
           pour mettre sur pied une application web où mobile adapte à leurs différents
            besoins et celle de leurs entreprises. Pour ainsi donner à leurs clients
            ou audience sur le net une exprerience agréable, unique et inoubliable.
             Chez dolubux nous concevons des applications de qualité et de niveau supérieur.
              Nous faisons toujours plus, dans le but de vous émerveiller et d'attirer
              un Maximin de clients à votre business.`,
        },
      ],
    }
  },
}
</script>
