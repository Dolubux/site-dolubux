<template>
  <section>
    <div
      class="pt-32 md:pt-24 h-full w-full big:w-8/12 m-auto"
      id="fonctionnalite"
    >
      <div>
        <header-section
          :sub="'In WebSite'"
          :title="'Nos Fonctionnalités !'"
          textColor="text-gray-700 "
        />
        <div class="flex flex-col gap-8 pt-16 md:pt-8 big:w-full m-auto">
          <order-functionality
            :LazyImage="'webInternet'"
            :list="ListWeb.slice(0, paginator + 6)"
            :OrderImage="'order-last'"
            :OrderSections="'lg:order-last'"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-start gap-3 mt-16 z-20 w-10/12 m-auto">
      <button @click="nextPage">
        <only-button
          :title="
            paginatorStart === paginatorEnd ? paginatorIndicator : 'Func - 1/2'
          "
          :bg="false"
          :nohref="true"
          :extraclass="'bg-yellow-300 ring-4 ring-yellow-200'"
        />
      </button>
    </div>
  </section>
</template>

<script>
import OnlyButton from '../__partiels/Buttons/OnlyButton.vue'
import OrderFunctionality from '../__partiels/Functionality/order-functionality.vue'
import HeaderSection from '../__partiels/Labels/HeaderSections.vue'
export default {
  components: { OrderFunctionality, HeaderSection, OnlyButton },
  data() {
    return {
      ftyToHide: false,
      pagnte: 6,
      paginator: 0,
      paginatorEnd: 0,
      paginatorStart: 1,
      paginatorIndicator: '',
      temp: 2,
      ListWeb: [
        {
          _id: 0,
          iconCard: 'responsive',
          title: 'Flexibilite',
          item: `Dolubux, concevoir des applications adaptaient pour tous les types d'écrans. Que ce soit mobile, tablette et/ou desktop nous l'adaptons à l'écran ! pour donner à vos utilisateurs plus de liberté, de consommer vos produits ou information où il le souhaite.`
        },
        {
          _id: 1,
          iconCard: 'optimization',
          title: 'Referencement Naturel',
          item: `Grâce au SEO, SMO, SXO, nous permettons à vos applications d'être facilement indexés par tous les moteurs de recherche. Nous optimisons vos sites web, afin qu'il soit accessible à un grand nombre de personnes qui désirent vos services ou produits.`
        },
        {
          _id: 2,
          iconCard: '/catalogue',
          title: 'Catalogue Produits',
          item: `Lorsque vous commercialisez un grand nombre de produits ou service, il est alors utile d’intégrer un module qui permette de générer un catalogue produit. la mise en place de votre catalogue permet de rendre votre offre beaucoup plus claire, et plus précise, donc plus alléchante.`
        },
        {
          _id: 3,
          iconCard: '/location',
          title: 'Carte Google Maps',
          item: `Sur internet, vos clients ont besoin d’être rassuré par votre entreprise. En effet, à l’ère du digital, il faut savoir recréer ce lien de confiance. Votre site internet serait un atout essentiel pour renseigner très facilement vos visiteurs. Vous pourrez ainsi leur montrer où se situe votre local, vos points de vente.`
        },
        {
          _id: 4,
          iconCard: '/web-site',
          title: 'Blog',
          item: `Le blog permet de rédiger des articles en lien avec votre secteur d’activité. L’objectif est d’offrir un contenu pertinent, riche et varié aux visiteurs. Cela permet d’appuyer l’expertise de la marque et sa notoriété. Aussi, cela permet d’être bien d’augmenter sa visibilité en étant bien référencé.`
        },
        {
          _id: 5,
          iconCard: 'gallery',
          title: 'Galerie Photos et Vidéos',
          item: `On le dit souvent qu’une image et video vaut 1000 mots. Tout ça pour dire que l’intégration de photos (et vidéos) est primordiale au dynamise de votre site internet, aussi elles permettent de faire découvrir l’environnement de l’entreprise, ses services, ses évènements, son équipe…`
        },
        {
          _id: 6,
          iconCard: 'contact-form',
          title: 'Formulaire de Contact',
          item: `Tout d’abord le formulaire de contact est là pour inciter vos visiteurs à démarrer une discussion avec vous. Il intervient soit dans une démarche de prospection (on cherche à obtenir de nouveaux leads), aussi dans la fidélisation (on cherche à se montrer disponible auprès de ses clients).`
        },
        {
          _id: 7,
          iconCard: '/shop',
          title: 'Bouton e-commerce',
          item: `Le bouton e-commerce permet à vos clients d'accéder à votre page e-commerce ou boutique en ligne en toutes simplicité. Insérez-le sur votre site web, à un endroit bien spécifique de la page, afin que les internautes ou visiteurs puissent y accéder à tout moment.`
        },
        {
          _id: 8,
          iconCard: 'design',
          title: 'Ui-Ux Prototype',
          item: `Le prototypage de votre site, application et solution digitale, vous donne un aperçu réal de la façon donc se comportera votre site dans les mains de vos clients. Le concept de l'interface utilisateur et de l'expérience utilisateur est d'adapter votre site internt, à votre cible..`
        },
        {
          _id: 9,
          iconCard: 'booking',
          title: 'Réservation en Ligne',
          item: `Réservation en Ligne, Prise de rendez-vous : Vous pouvez souhaiter parfois que vos clients puissent réserver votre service en ligne. Que ce soit pour une entrée à une conférence ou un concert, une table au restaurant, une chambre d’hôtel, un rendez-vous à un cours de gym ou chez le médecin.`
        },
        {
          _id: 10,
          iconCard: '/comment',
          title: 'Avis Clients',
          item: `Les Avis clients : vos internautes sont invités à laisser un avis sur vos produits; Commentaires: Il est recommandé de laisser la possibilité aux internautes de commenter vos articles, d’y ajouter leur opinion; Témoignages : vos internautes jugent la qualité du service de votre entreprise.`
        },
        {
          _id: 14,
          iconCard: 'laptop',
          title: 'Espace Clients',
          item: `Ce service digital, permet de mettre en avant votre marque, produits, services et/ou généralement votre entreprise ou business sur les réseaux sociaux, Qui devient de plus en plus un moins de communication ultra puissance et performante ou même indispensable pour la croissance de votre entreprise.`
        }

        // {
        //   _id: 11,
        //   iconCard: 'social-media',
        //   title: 'Reseaux sociaux partages',
        //   item: `Ce service digital, permet de mettre en avant votre marque, produits, services et/ou généralement votre entreprise ou business sur les réseaux sociaux, Qui devient de plus en plus un moins de communication ultra puissance et performante ou même indispensable pour la croissance de votre entreprise.`
        // },
        // {
        //   _id: 12,
        //   iconCard: 'social-media',
        //   title: 'chat',
        //   item: `Ce service digital, permet de mettre en avant votre marque, produits, services et/ou généralement votre entreprise ou business sur les réseaux sociaux, Qui devient de plus en plus un moins de communication ultra puissance et performante ou même indispensable pour la croissance de votre entreprise.`
        // },
        // {
        //   _id: 13,
        //   iconCard: 'social-media',
        //   title: 'Forun',
        //   item: `Ce service digital, permet de mettre en avant votre marque, produits, services et/ou généralement votre entreprise ou business sur les réseaux sociaux, Qui devient de plus en plus un moins de communication ultra puissance et performante ou même indispensable pour la croissance de votre entreprise.`
        // }
      ]
    }
  },

  computed: {},

  mounted() {
    this.paginatorEnd = Math.floor(this.ListWeb.length / 6)
  },

  methods: {
    nextPage() {
      const stay = Math.floor(this.ListWeb.length % this.pagnte)
      this.paginator = this.paginator + 6
      this.paginatorStart = this.paginatorStart + 1

      if (this.paginatorStart >= this.paginatorEnd) {
        this.paginatorIndicator = 'Func - 2/2'
      }
    },
    prevPage() {}
  }
}
</script>

<style>
.shadow-wx {
  box-shadow: 0px 0px 20px #f5f5f5;
}
.shadow-yellow {
  box-shadow: 0px 0px 50px #ffebaa;
}
.bg-noible {
  background-color: #182b3a;
}
.xw {
  overflow: hidden;
  position: relative;
  transition: height 0.4s cubic-bezier(0.865, 0.14, 0.095, 0.87);
  animation: dw 0.4s;
}
@keyframes dw {
  from {
    height: 0px;
  }
  to {
    height: 88px;
  }
}

.dn {
  overflow: hidden;
  height: 0px;
  position: relative;
  transition: height 0.4s cubic-bezier(0.865, 0.14, 0.095, 0.87);
  animation: dws 1s;
}
@keyframes dws {
  from {
    height: 110px;
  }
  to {
    height: 0px;
  }
}
</style>
