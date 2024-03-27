<template>
  <section id="prestations">
    <div
      class="flex flex-col pt-32 md:pt-24 w-full big:w-8/12 m-auto"
      
    >
      <div class="mb-16 md:mb-8">
        <header-section
          :sub="'Prestations'"
          :title="'Nos prestations business.'"
          textColor="text-gray-700"
        />
      </div>
      <div class="rounded-3xl">
        <div
          class="flex items-start gap-16 w-10/12 m-auto xl:grid-cols-1 md:w-full lg:flex-col big:w-full"
        >
          <div
            class="flex flex-col w-4/12 col-span-1 lg:w-4/5 md:mx-8 wow animate__animated animate__slideInLeft"
          >
            <only-text-title
              title="Nos Services vedette"
              color="text-yellow-300 mb-4"
              size="large"
            />

            <only-description
              title="Pour transformer vos idées en réalité, nous vous offrons nos services pour faciliter le développement de votre projet commercial. Notre objectif est de concevoir des solutions sur mesure pour répondre aux besoins de votre entreprise et les aider à atteindre de nouveaux sommets."
              format="deflaut"
            />
          </div>
          <type-benefits
            className="grid grid-cols-2 col-span-1 w-8/12 gap-4 w-4/4 md:grid-cols-1 lg:grid-cols-2 lg:w-full xl:grid-cols-2 md:px-8"
            Describle="hidden"
          />
        </div>
      </div>
    </div>
    <div class="pt-32">
      <order-benefits :lists="BenefitsDetailsList" OrderSection="" />
    </div>
  </section>
</template>

<script>
import OrderBenefits from '../__partiels/Functionality/order-benefits.vue'
import TypeBenefits from '../__partiels/Functionality/type-benefits.vue'
import HeaderSection from '../__partiels/Labels/HeaderSections.vue'
import OnlyDescription from '../__partiels/Texts/OnlyDescription.vue'
import OnlyTextTitle from '../__partiels/Texts/OnlyTextTitle.vue'
export default {
  components: {
    HeaderSection,
    TypeBenefits,
    OrderBenefits,
    OnlyDescription,
    OnlyTextTitle,
  },
  data() {
    const BenefitsDetailsList = [
      {
        id: 0,
        title_EXTRA: 'Creation De Site Internet Moderne.',
        title: `Devenez la reference dans votre secteur d'activiter`,
        describle: `Pour créer et développer vos sites internet, notre priorité est de mettre en valeur vos produits, services ou activités. Nous nous engageons à vous proposer des interfaces adaptées à votre activité et à votre public, en mettant l'accent sur l'ergonomie (expérience utilisateur) et le webdesign. Notre objectif est de vous offrir des solutions qui répondent parfaitement à vos besoins et qui mettent en avant votre entreprise de manière optimale.`,
        services: `Site Internet vitrine,
           Site Internet sur messure,
            Site Internet E-Commerce,
             Sites Editoriaux,
              Blog,Landing Page,
               Portfolio,
                Autres...`,
        icone: '/icons/dlx-web.png',
        image: '/images/dlx-website.jpg',
        boolIfMobile: 'web',
        textColorClass: 'text-blue-500',
        bgColorClass: ' shadow-2xl  hover:shadow-md',
      },
      {
        id: 1,
        title_EXTRA: 'Creation Application Mobile Moderne.',
        title: `Rapprochez-vous en encore plus, de vos clients`,
        describle: `Notre objectif principal dans le développement de vos applications mobiles est de concevoir un outil exceptionnel et pratique pour vos utilisateurs. Nous souhaitons vous aider à vous rapprocher de vos clients en créant des interfaces et des expériences adaptées à votre activité et à votre public cible. Notre priorité est de vous offrir des solutions qui répondent parfaitement à vos besoins et qui favorisent une meilleure interaction avec votre entreprise.`,
        services: ` Application Mobile vitrine,
           Application Mobile sur messure,
           Application Mobile E-Commerce,
           Application Mobile Editoriaux `,
        icone: '/icons/dlx-mobile.png',
        image: '/images/dlx-mobile.jpg',
        boolIfMobile: 'mobile',
        textColorClass: 'text-blue-500',
        bgColorClass: ' shadow-2xl  hover:shadow-md',
      },
      {
        id: 2,
        title_EXTRA: 'Marketing Digital',
        title: `Rapprochez-vous en encore plus, de vos clients`,
        describle: `Le marketing digital est une clé essentielle pour ouvrir de nouvelles perspectives de croissance à votre entreprise. Pour tous vos besoins en services digitaux, nous nous engageons à vous offrir le meilleur en termes de qualité de production et de stratégie de croissance. Laissez-nous vous accompagner pour vous fournir des solutions sur mesure qui propulseront votre entreprise vers de nouveaux succès.`,
        services: `Creation de newsletters,
           Campagne promotionale Whatsapp & Email,
            Design UI & UX,
             Affiche Media Sociaux,
              Spot Publicitaire.`,
        icone: '/icons/dlx-marketing.png',
        image: '/images/dlx-digitale.jpg',
        boolIfMobile: 'digital',
        textColorClass: 'text-blue-500',
        bgColorClass: ' shadow-2xl  hover:shadow-md',
      },
    ]
    return {
      BenefitsDetailsList,
    }
  },
}
</script>

<style scoped>
.w-medium {
  width: 60%;
}
.grid-col-x2 {
  grid-template-columns: 40% 40%;
}
</style>
