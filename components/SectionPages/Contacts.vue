<template>
  <section class="flex flex-col w-full m-auto pt-32 md:pt-24" id="contact-nous">
    <div class="flex flex-col w-full">
      <div class="mb-16 w-full m-auto big:w-8/12">
        <header-section
          :sub="'Contacts'"
          :title="'Votre Projet, on n\'en parle?'"
          textColor="text-gray-700"
        />
      </div>
      <div class="w-full relative">
        <img
          class="w-full h-full object-cover absolute"
          src=""
          v-lazy="'/images/dlx-illustra.jpg'"
          alt=""
        />
        <div class="absolute w-full h-full bg-gray-900 opacity-90"></div>
        <div
          class="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 w-10/12 big:w-8/12 py-16 m-auto rounded-lg h-full opacity-95 z-20 xl:gap-x-8 gap-x-16 gap-y-8"
        >
          <div :class="globalContactClass">
            <img
              v-lazy="'/icons/dlx-email.png'"
              src=""
              :class="iconeClass"
              alt=""
            />
            <only-text-title
              title="En Ligne"
              color="text-blue-500"
              size="middle"
            />

            <only-description
              title=""
              :extraclass="describleClass"
              format="deflaut"
            >
              Tous les jours. 24hrs/24.<br />
              Faites nous savoir vos besion en linge par Mail :
              <a
                target="_blank"
                :href="'mailto:' + get_email_dataContacts"
                :class="extraInDescribleClass"
              >
                {{ get_email_dataContacts }}
              </a>
              Nous serons disponible pour vous, sans contrainnte de temps.
            </only-description>
          </div>

          <div :class="globalContactClass">
            <img
              v-lazy="'/icons/dlx-message.png'"
              src=""
              :class="iconeClass"
              alt=""
            />
            <only-text-title
              title="Par Message"
              color="text-yellow-300"
              size="small"
            />
            <only-description
              title=""
              :extraclass="describleClass"
              format="deflaut"
            >
              Du lundi au vendredi. De 9h à 18h. <br />
              <a
                target="_blank"
                :href="'mailto:' + get_email_dataContacts"
                :class="extraInDescribleClass"
              >
                {{ get_phone_name_dataContacts }}
              </a> / <a
                target="_blank"
                :href="'tel:' + '0779613593'"
                :class="extraInDescribleClass"
              >
              +2250779613593
              </a>
              ou sur
              <a
                :class="extraInDescribleClass"
                target="_blank"
                :href="get_wa_dataContacts"
                >WhatsApp</a
              >. On s'ecris maintement ? Nous serons disposer à repondre, a tous
              vos questions.
            </only-description>
          </div>

          <div :class="globalContactClass">
            <img v-lazy="'/icons/dlx-call.png'" src="" :class="iconeClass" />
            <only-text-title
              title="Par Telephone"
              color="text-blue-500"
              size="middle"
            />
            <only-description
              title=""
              :extraclass="describleClass"
              format="deflaut"
            >
              Du lundi au vendredi. De 9h à 18h.<br />
              Au
              <a
                target="_blank"
                :class="extraInDescribleClass"
                :href="'tel:' + get_phone_dataContacts"
              >
                {{ get_phone_name_dataContacts }}
              </a> / <a
                target="_blank"
                :href="'tel:' + '0779613593'"
                :class="extraInDescribleClass"
              >
              +2250779613593
              </a>
              ou sur
              <a
                :class="extraInDescribleClass"
                target="_blank"
                :href="get_wa_dataContacts"
                >WhatsApp</a
              >. On s'appelle maintement? nous serons attentive a l'ecoute de
              vos besion.
            </only-description>
          </div>
        </div>
      </div>
    </div>
    <!-- 

          **
         -->
    <div class="flex flex-col gap-4 w-7/12 lg:w-10/12 m-auto mt-32">
      <h1 class="z-40 text-6xl font-black text-center md:text-5xl text-gray-700 font-sans">
        Le meilleur pour vos projets
      </h1>
      <only-description
        title="Dolubux est à la fois une micro-startup et un prestataire de services en ligne. Pour tous vos projets de création (web, mobile, digitales et bien autres), dolubux s'engage à vous donner le meilleur de ses services. notre objectif, quand vous nous confiez votre projet c'est d'en fait la vedette auprès de vos clients cible. Faitez nous confiance pour votre prochain projet ou celui que vous avez en tete."
        format="deflaut"
        extraclass="font-normal text-center text-lg opacity-80"
      />
      
      <div class="flex md:flex-col gap-4 w-full m-auto border-[1px] md:border-0 border-gray-100 p-1 rounded-full justify-between">
      <!--  -->
        <div class="flex justify-center items-center gap-2">
        <figure >
          <img
            class="h-16 w-16 rounded-full object-contain"
            v-lazy="'/personnel/ceo_alex.jpeg'"
            src=""
            alt=""
          />
        </figure>
        <div class="flex flex-col">
          <span class="text-lg font-extrabold">Alex kouamelan</span>
          <span class="text-sm font-light">Co-Founder | Software Analyst</span>
        </div>
      </div>

<!--  -->
      <div class="flex justify-center items-center gap-2">
        <figure class="order-1   ">
          <img
            class="h-16 w-16 rounded-full object-contain"
            v-lazy="'/personnel/cto.jpg'"
            src=""
            alt=""
          />
        </figure>
        <div class="flex flex-col">
          <span class="text-lg font-extrabold">Emmanuel Diomande</span>
          <span class="text-sm font-light">Co-Founder | FullStack Developper </span>
        </div>
      </div>


 


      </div>

    </div>
  </section>
</template>

<script>
import HeaderSection from '../__partiels/Labels/HeaderSections.vue'
import OnlyTextTitle from '../__partiels/Texts/OnlyTextTitle.vue'
import OnlyDescription from '../__partiels/Texts/OnlyDescription.vue'

export default {
  components: { HeaderSection, OnlyTextTitle, OnlyDescription },
  data() {
    const globalContactClass = 'flex flex-col gap-2'
    const iconeClass = 'h-8 w-8 '
    const headClass = ''
    const DayAndHoursClass = ''
    const extraInDescribleClass =
      'text-gray-50  font-bold opacity-90 cursor-pointer'
    const describleClass = 'text-gray-50 z-20'

    return {
      iconeClass,
      headClass,
      DayAndHoursClass,
      extraInDescribleClass,
      describleClass,
      globalContactClass,
    }
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
  },
}
</script>

<style></style>
