<template>
  <section>
    <div
      class="flex flex-col pt-32 md:pt-24 w-full big:w-8/12 m-auto"
      id="hebergement"
    >
      <div class="mb-4 md:mb-8">
        <header-section
          :sub="'Packages'"
          :title="'Nos Packages'"
          textColor="text-blue-500"
          :subColor="'text-gray-500'"
        />
      </div>

      <div>
        <div
          class="grid grid-cols-3 gap-8 md:gap-4 w-10/12 mt-8 m-auto md:grid-cols-1 xl:grid-cols-2 big:w-full"
        >
          <div
            class="flex justify-center items-start border rounded-lg"
            v-for="price in PricingPay"
            :key="price.id"
            :class="price.bgColor"
          >
            <div
              class="w-full md:w-full big:w-11/12 transition duration-500 ease-in-out cursor-pointer p-10 md:px-6 wow animate__animated animate__backInLeft"
              data-wow-offset="30"
            >
              <div class="flex flex-col mb-5 items-start">
                <span
                  class="text-3xl md:text-2xl font-extrabold mb-2"
                  :class="price.textColor"
                >
                  {{ price.type }}
                </span>
                <!-- <only-description :title="price.describle" format="small" /> -->
                <span class="text-tiny font-ligth opacity-80 mb-0"
                  >{{ price.describle }}.</span
                >
                <!-- <div class="flex justify-center items-end gap-x-1">
                  <span class="text-1xl font-ligth relative bottom-1">
                    {{ price.evalue }}
                  </span> -->
                <span class="text-3xl font-extrabold pt-2">
                  {{ price.price }}
                </span>
                <!-- </div> -->

                <!-- <span class="text-sm font-medium mt-1 opacity-90">
                {{ price.preview }}
              </span> -->
              </div>

              <div class="mt-1 mb-6">
                <a
                  v-if="price.intenion !== 'Bientot Disponsible'"
                  href="#contact-nous"
                  class="flex justify-center items-center rounded-lg py-4 text-base text-white"
                  :class="price.btnColor"
                >
                  {{ price.intenion }}
                </a>
                <a
                  v-else
                  class="flex justify-center items-center rounded-lg py-4 text-white text-base font-light"
                  :class="price.btnColor"
                  >{{ price.intenion }}</a
                >
              </div>
              <div class="flex-col gap-y-1 mb-0">
                <div
                  class="grid grid-cols-wx gap-1"
                  v-for="rules of price.advantage"
                  :key="rules.rules"
                >
                  <div
                    style="width: 16px; height: 16px"
                    class="inline-flex justify-center items-center rounded-full relative top-[2px]"
                    :class="price.btnColor"
                  >
                    <span
                      style="width: 5px; height: 5px"
                      class="inline-flex rounded-full bg-white"
                    ></span>
                  </div>
                  <span class="text-tiny font-light opacity-80">
                    {{ rules.rule }}
                  </span>
                </div>
              </div>

              <div class="text-sm text-center font-ligth opacity-80 hidden">
                {{ price.spn }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderSection from "../__partiels/Labels/HeaderSections.vue";
import OnlyDescription from "../__partiels/Texts/OnlyDescription.vue";
export default {
  //...
  components: {
    HeaderSection,
    OnlyDescription,
  },

  data() {
    return {
      PricingPay: [
        {
          id: "1",
          custom: false,
          type: "Entrepreneur",
          describle:
            "Le bon plan, pour cibler les personnes intéressées par vos produits",
          price: "50.000 FCFA",
          evalue: "",
          preview: "Notre Extimation pour la creaton d'un site web complete .",

          textColor: "text-blue-500",
          // bgColor: 'bg-blue-100',
          btnColor: "bg-blue-500",
          intenion: "Commencez Maintement",
          spn: `

          `,
          links: "/contacts/site_internet_basique",
          advantage: [
            {
              rule: " Creation site landing Page",
            },
            {
              rule: "Hebergement & Maintenance",
            },
            {
              rule: "Domaine - Nom de domaine (1an)",
            },
            { rule: "Email Professionnel - (15 emails/1Go)" },
            { rule: "02 sous-domaines" },
            {
              rule: "Certificat SSL - Sécuriser",
            },
            { rule: "Mise à jour - Fonctionnalité" },
            { rule: "Marketing Digital - Gestion de page FB :Un (01) Sponsoring par semaine, Quatre (04) publications par semaine" },
            { rule: "Administrateur - Webmaster" },
            { rule: "Trafic illimite - Site Web" },
          ],
        },

        {
          id: "2",
          type: "Business",
          custom: true,
          describle:
            "Sans aucune limite, pour faire évoluer les performances de votre business",
          price: "250.000 FCFA",

          evalue: "",
          preview:
            "Pour concevoir une application mémorable qui surpassera vos attentes.",
          textColor: "text-yellow-300",
          // bgColor: 'bg-yellow-100',
          btnColor: "bg-yellow-300",
          intenion: "Commencez Maintement",
          spn: `

            `,
          links: "",
          advantage: [
          {
              rule: " Creation site e-ecommerce",
            },
            {
              rule: "Hebergement & Maintenance",
            },
            {
              rule: "Domaine - Nom de domaine (1an)",
            },
            { rule: "Email Professionnel - (50 emails/1Go)" },
            { rule: "08 sous-domaines" },
            {
              rule: "Certificat SSL - Sécuriser",
            },
            { rule: "Mise à jour - Fonctionnalité" },
            { rule: "Marketing Digital - Gestion de page FB : Deux (02) Sponsoring par semaine, Six (06) publications par semaine" },
            { rule: "Administrateur - Webmaster" },
            { rule: "Trafic illimite - Site Web" },
            { rule: "Application web - Gestion de ventes (CRM) | Gestion des stocks (X1)" },
            { rule: "Internalisation - (Francais, Anglais)" }
          ],
          spn: `

          `,
        },
        {
          id: "10",
          type: "Entreprise",
          custom: true,
          describle:
            "Pour les entreprises qui maîtrisent parfaitement leur domaine d'activité",
          price: "450.000 FCFA",
          evalue: "",
          preview: "Notre Extimation pour la creaton d'un site web complete .",
          textColor: "text-blue-500",
          // bgColor: 'bg-blue-100',
          btnColor: "bg-blue-500",
          intenion: "Commencez Maintementt",
          spn: `
           `,
          links: "/contacts/site_internet_custom",
          advantage: [

          {
              rule: "Creation de site proffessionnel",
            },
            {
              rule: "Hebergement & Maintenance",
            },
            {
              rule: "Domaine - Nom de domaine (1an)",
            },
            { rule: "Email Professionnel - (100 emails/1Go)" },
            { rule: "20 sous-domaines" },
            {
              rule: "Certificat SSL - Sécuriser",
            },
            { rule: "Mise à jour - Fonctionnalité" },
            { rule: "Marketing Digital - Gestion de page FB : Quatre (04) Sponsoring par semaine, Six (06) publications par semaine, une (01) publications vidéo par semaine" },
            { rule: "Administrateur - Webmaster" },
            { rule: "Application web - Gestion de ventes (CRM) | Gestion des stocks | ERP | Gestion immobilière | Gestion des livraisons & reservation" },
            { rule: "Internalisation - (Francais, Anglais et autres)" },
            
          ],
        },
      ],
    };
  },

  methods: {
    openModalForm({ bool, custom }) {
      this.$store.commit("modalForm", { bool, custom });
      console.log(this.$store.state.customContactForm);
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
