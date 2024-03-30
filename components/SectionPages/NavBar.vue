<template>
  <section class="fixed top-0 left-0 w-full bg-white/95 shadow-nav z-50 ">
    
    <div
      v-if="navView === false"
      class="w-10/12 lg:w-full big:w-8/12 m-auto grid grid-cols-3 relative bg-white h-18 mt-0 md:h-14 lg:h-20"
    >
      <a
        @click="ActiveLink(link.classLink, 'click')"
        class="flex justify-center items-center link_dolubux"
        v-for="link in LinksPage"
        :key="link.link"
        :class="[
          link.classLink,
          link.classLink === 'prestations' ? 'border-l-0' : 'border-l-2',
        ]"
        :href="link.address"
      >
        <!-- <img class="w-8 h-8" src="/functionality/booking.png" alt="" /> -->
        <span class="text-tiny md:flex 3xl:hidden md:text-sm LinkClass">
          {{ link.link_mobile }}</span
        >
        <span class="lg:flex md:hidden text-tiny LinkClass">
          {{ link.link }}</span
        >
      </a>

      <div
        @click="navView = true"
        class="absolute top-20 md:top-14 right-0 bg-white px-6 py-2 flex justify-center items-center text-center font-bold shadow-lg cursor-pointer text-lg"
      >
        &times;
      </div>
    </div>

    <div
      v-show="navView === true"
      class="w-10/12 big:w-8/12 transition-shadow flex items-center md:h-14 justify-between m-auto"
    >
      <div class="flex items-center gap-2">
        <a href="" class="flex items-center gap-2">
          <img class="h-9 md:w-10" v-lazy="'/logo/LogoDlx.png'" src="" alt="" />
          <!-- <span class="text-xl font-bold text-blue-500"> Dolubux. </span> -->
        </a>
        <div class="flex flex-col">
          <span class="text-xl md:text-base font-extrabold text-blue-500">
            Dolubux
          </span>
          <span class="text-sm">Notre Objectif, Votre Croissance.</span>
        </div>
      </div>

      <div class="flex gap-4 h-16 ">
        <a
          @click="ActiveLink(link.classLink, 'click')"
          class=" h-100 flex justify-center items-center  font-medium h-100 px-3 lg:hidden link_dolubux"
          v-for="link in LinksPage"
          :key="link.link"
          :class="[link.classLink]"
          :href="link.address"
          :id="link.classLink"
        >
          <!-- <img class="w-8 h-8" src="/functionality/booking.png" alt="" /> -->
          <span class="text-base"> {{ link.link }}</span>
        </a>
      </div>

      <div class="flex items-center gap-2">
        <a
          :href="get_wa_dataContacts"
          class="md:hidden flex items-center gap-2 text-sm lg:text-tiny xl:text-sm  border-2 py-3 px-4 rounded-full font-semibold md:text-xs transition delay-200"
        >
          <!-- <img class=" h-4" v-lazy="'/icons/dlx-message.png'" alt="" /> -->
          <span class="md:hidden 3xl:flex text-lg font-extrabold">Discutons du projet!</span>
        </a>

          <!-- <a
          href="/devis"
          class="md:hidden flex items-center gap-2 text-sm lg:text-tiny xl:text-sm uppercase text-blue-500  bg-blue-300/20 py-3 px-3 rounded-lg font-semibold md:text-xs transition delay-200"
        >
          <span class="md:hidden 3xl:flex">Devis</span>
        </a> -->

        <!-- <only-button
          :title="'On S\'eris Maintement ?'"
          :bg="true"
          :nohref="false"
          :emit="get_wa_dataContacts"
        /> -->
        <button
          @click="ShowMenuSecours"
          class="text-4xl md:text-3xl text-gray-500 lg:flex 3xl:hidden big:hidden cursor-pointer"
        >
          <img
            class="h-7 w-8 opacity-80 rounded-sm"
            v-lazy="'/logo/menu.png'"
            src=""
            alt=""
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import OnlyButton from '../__partiels/Buttons/OnlyButton.vue'
export default {
  components: { OnlyButton },
  filters: {
    FirstLetterUpper(value) {
      return value
    },
  },

  data() {
    return {
      navView: true,
      LinksPage: [
        {
          address: `/`,
          link: 'Accueil',
          link_mobile: 'Accueil',
          classLink: 'accueil',
        },
        {
          address: `/#catalogues`,
          link_mobile: 'Catalogues',
          link: 'Nos services',
          classLink: 'services',
        },

         {
          address: `/a-Propos`,
          link_mobile: 'A Propos',
          link: 'A Propos',
          classLink: 'a-Propos',
        },
       

        
        // {
        //   address: `/blog`,
        //   link_mobile: '6. blog',
        //   link: 'blog',
        //   classLink: 'blog',
        // },
        
        // {
        //   address: `/boutique`,
        //   link_mobile: '3. Heber',
        //   link: 'Boutique',
        //   classLink: 'boutique',
        // },
      ],
      prestations__activeByScroll: 0,
      catalogues__activeByScroll: 0,
      hebergement__activeByScroll: 0,
      contact__activeByScroll: 0,
      propos__activeByScroll: 0,
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
  mounted() {
 

    let __pathname = this.$route.path
    const pathname = __pathname.split('/')
    console.log(pathname)
    this.ActiveLink(pathname[1] === '' ? 'accueil' : pathname[1])
    
   
  },

  

  methods: {
    ShowMenuSecours() {
      this.navView = false
    },
    ActiveLink(classLinkToAtived, notif) {
      const links = document.querySelectorAll('.link_dolubux')
      links.forEach((el) => {
        el.classList.remove('ActivedLinkClass')
      })

      document
        .querySelector(`.${classLinkToAtived}`)
        .classList.add('ActivedLinkClass')
    },
  },
}
</script>
<style>
.shadow-nav {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
}

.LinkClass .LinkClass:active {
  font-weight: 500 !important;
  color: #3b82f2 !important;
}

.ActivedLinkClass {
  font-weight: 700 !important;
  color: #3b82f2 !important;
  border-bottom: 2px solid #3b82f2 !important;
}
</style>
