import VueLazyload from "vue3-lazyload"


export default defineNuxtPlugin(nuxtApp => {
   nuxtApp.vueApp.use(VueLazyload, {
      preLoad: 1.6,
      attempt: 1,
     loading: '/placeholder-gray.png',
     filter: {
     progressive (listener, options) {
           const isCDN = /qiniudn.com/
           if (isCDN.test(listener.src)) {
              listener.el.setAttribute('lazy-progressive', 'true')
              listener.loading = listener.src + '?imageView2/1/w/10/h/10'
           }
     },
     webp (listener, options) {
           if (!options.supportWebp) return
           const isCDN = /qiniudn.com/
           if (isCDN.test(listener.src)) {
              listener.src += '?imageView2/2/format/webp'
           }
     }
     }
  });
 })

