import { O as OnlyButton } from './OnlyButton-B9XUKSvb.mjs';
import { useSSRContext, resolveComponent, mergeProps, resolveDirective } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { a as OnlyTextTitle, O as OnlyDescription } from './OnlyTextTitle-CG6mVEzO.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-lazyload';

const _sfc_main$2 = {
  components: { OnlyButton },
  filters: {
    FirstLetterUpper(value) {
      return value;
    }
  },
  data() {
    return {
      navView: true,
      LinksPage: [
        {
          address: `/`,
          link: "Accueil",
          link_mobile: "Accueil",
          classLink: "accueil"
        },
        {
          address: `/#catalogues`,
          link_mobile: "Catalogues",
          link: "Nos services",
          classLink: "services"
        },
        {
          address: `/a-Propos`,
          link_mobile: "A Propos",
          link: "A Propos",
          classLink: "a-Propos"
        }
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
      propos__activeByScroll: 0
    };
  },
  computed: {
    get_phone_dataContacts() {
      return process.env.DOLUBUX_PHONE_NUMBER;
    },
    get_phone_name_dataContacts() {
      return process.env.DOLUBUX_PHONE_NUMBER;
    },
    get_email_dataContacts() {
      return process.env.DOLUBUX_EMAIL;
    },
    get_wa_dataContacts() {
      return process.env.DOLUBUX_WHATSAPP;
    },
    get_fb_dataContacts() {
      return process.env.DOLUBUX_FACEBOOK;
    }
  },
  mounted() {
    let __pathname = this.$route.path;
    const pathname = __pathname.split("/");
    console.log(pathname);
    this.ActiveLink(pathname[1] === "" ? "accueil" : pathname[1]);
  },
  methods: {
    ShowMenuSecours() {
      this.navView = false;
    },
    ActiveLink(classLinkToAtived, notif) {
      const links = (void 0).querySelectorAll(".link_dolubux");
      links.forEach((el) => {
        el.classList.remove("ActivedLinkClass");
      });
      (void 0).querySelector(`.${classLinkToAtived}`).classList.add("ActivedLinkClass");
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_lazy = resolveDirective("lazy");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 w-full bg-white/95 shadow-nav z-50" }, _attrs))}>`);
  if ($data.navView === false) {
    _push(`<div class="w-10/12 lg:w-full big:w-8/12 m-auto grid grid-cols-3 relative bg-white h-18 mt-0 md:h-14 lg:h-20"><!--[-->`);
    ssrRenderList($data.LinksPage, (link) => {
      _push(`<a class="${ssrRenderClass([[
        link.classLink,
        link.classLink === "prestations" ? "border-l-0" : "border-l-2"
      ], "flex justify-center items-center link_dolubux"])}"${ssrRenderAttr("href", link.address)}><span class="text-tiny md:flex 3xl:hidden md:text-sm LinkClass">${ssrInterpolate(link.link_mobile)}</span><span class="lg:flex md:hidden text-tiny LinkClass">${ssrInterpolate(link.link)}</span></a>`);
    });
    _push(`<!--]--><div class="absolute top-20 md:top-14 right-0 bg-white px-6 py-2 flex justify-center items-center text-center font-bold shadow-lg cursor-pointer text-lg"> \xD7 </div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle($data.navView === true ? null : { display: "none" })}" class="w-10/12 big:w-8/12 transition-shadow flex items-center md:h-14 justify-between m-auto"><div class="flex items-center gap-2"><a href="" class="flex items-center gap-2"><img${ssrRenderAttrs(mergeProps({
    class: "h-9 md:w-10",
    src: "",
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/logo/LogoDlx.png")))}></a><div class="flex flex-col"><span class="text-xl md:text-base font-extrabold text-blue-500"> Dolubux </span><span class="text-sm">Notre Objectif, Votre Croissance.</span></div></div><div class="flex gap-4 h-16"><!--[-->`);
  ssrRenderList($data.LinksPage, (link) => {
    _push(`<a class="${ssrRenderClass([[link.classLink], "h-100 flex justify-center items-center font-medium h-100 px-3 lg:hidden link_dolubux"])}"${ssrRenderAttr("href", link.address)}${ssrRenderAttr("id", link.classLink)}><span class="text-base">${ssrInterpolate(link.link)}</span></a>`);
  });
  _push(`<!--]--></div><div class="flex items-center gap-2"><a${ssrRenderAttr("href", $options.get_wa_dataContacts)} class="md:hidden flex items-center gap-2 text-sm lg:text-tiny xl:text-sm border-2 py-3 px-4 rounded-full font-semibold md:text-xs transition delay-200"><span class="md:hidden 3xl:flex text-lg font-extrabold">Discutons du projet!</span></a><button class="text-4xl md:text-3xl text-gray-500 lg:flex 3xl:hidden big:hidden cursor-pointer"><img${ssrRenderAttrs(mergeProps({
    class: "h-7 w-8 opacity-80 rounded-sm",
    src: "",
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/logo/menu.png")))}></button></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { OnlyTextTitle, OnlyDescription },
  data() {
    return {};
  },
  computed: {
    get_phone_dataContacts() {
      return process.env.DOLUBUX_PHONE_NUMBER;
    },
    get_phone_name_dataContacts() {
      return process.env.DOLUBUX_PHONE_NUMBER;
    },
    get_email_dataContacts() {
      return process.env.DOLUBUX_EMAIL;
    },
    get_wa_dataContacts() {
      return process.env.DOLUBUX_WHATSAPP;
    },
    get_fb_dataContacts() {
      return process.env.DOLUBUX_FACEBOOK;
    },
    get_in_dataContacts() {
      return process.env.DOLUBUX_LINKEDIN;
    },
    get_DataFooter() {
      const ListDataFooter = [
        {
          id: 1,
          heading: "Liens Rapide",
          heading_links: [
            {
              name: "Accueil",
              link: "/"
            },
            {
              name: "Nos services",
              link: "#catalogues"
            },
            {
              name: "A propos",
              link: "/a-propos"
            }
          ]
        },
        {
          id: 0,
          heading: "Nos Prestations",
          heading_links: [
            {
              name: "Site internet",
              link: this.get_wa_dataContacts
            },
            {
              name: "Application mobile",
              link: this.get_wa_dataContacts
            },
            {
              name: "Application web",
              link: this.get_wa_dataContacts
            },
            {
              name: "E-Commanerce",
              link: this.get_wa_dataContacts
            },
            {
              name: "Blog",
              link: this.get_wa_dataContacts
            }
            // {
            //   name:
            //     'Autre ( non officialiser : Redaction de contenu, PowerPoint, Ui-WebDesign, Banniere Web ) ',
            //   link: `mail:${StateContact.name}`
            // }
          ]
        },
        // {
        //   id: 2,
        //   heading: 'Service Digital',
        //   heading_links: [
        //     {
        //       name: 'Creation Newsletters',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'Compagne e-marketing',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'UI & UX Design Web',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'Banner Web',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'Spot publicitaire',
        //       link: '/#prestations',
        //     },
        //     {
        //       name: 'Affiche publicitaire media',
        //       link: '/#prestations',
        //     },
        //   ],
        // },
        {
          id: 3,
          heading: "Support",
          heading_links: [
            {
              name: "Telephone",
              link: `tel:${this.get_phone_dataContacts}`
            },
            {
              name: " WhatSapp",
              link: `${this.get_wa_dataContacts}`
            },
            {
              name: `Email`,
              link: `mail:${this.get_email_dataContacts}`
            },
            {
              name: `SMS`,
              link: `tel:${this.get_phone_dataContacts}`
            }
          ]
        }
      ];
      return {
        ListDataFooter
      };
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_only_description = resolveComponent("only-description");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative font-sans mt-32"><img${ssrRenderAttrs(mergeProps({
    class: "w-full h-full object-cover absolute -z-40",
    src: "",
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/images/dlx-illustra.jpg")))}><div class="absolute w-full h-full bg-gray-900 opacity-95 -z-40"></div><div class="text-center text-surface/75 5 z-50 lg:text-left text-white font-sans w-10/12 m-auto"><div class="flex items-center justify-center border-b-[1px] border-neutral-200/50 p-6 dark:border-white/10 lg:justify-between"><div class="me-12 hidden lg:block"><span>Nos r\xE9seaux sociaux:</span></div><div class="flex justify-center"><a${ssrRenderAttr("href", $options.get_fb_dataContacts)} target="_blank" class="me-6 [&amp;&gt;svg]:h-6 [&amp;&gt;svg]:w-6"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path></svg></a><a${ssrRenderAttr("href", $options.get_in_dataContacts)} target="_blank" class="me-6 [&amp;&gt;svg]:h-6 [&amp;&gt;svg]:w-6"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg></a><a href="" class="[&amp;&gt;svg]:h-6 [&amp;&gt;svg]:w-6"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></div></div><div class="m-auto py-10 text-center md:text-left"><div class="grid-1 grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-2 grid-cols-4"><div class="md:col-span-2"><h6 class="mb-4 flex gap-2 items-center justify-center font-semibold uppercase"><a href="" class="flex items-center gap-2"><img${ssrRenderAttrs(mergeProps({
    class: "h-10 md:w-10",
    src: "",
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/logo/LogoDlx.png")))}></a><div class="flex flex-col jusify-start items-start"><span class="text-xl md:text-base font-extrabold text-blue-500"> Dolubux </span><span class="text-xs">Notre Objectif, Votre Croissance.</span></div></h6><p>`);
  _push(ssrRenderComponent(_component_only_description, {
    title: "Dolubux est le partenaire pour mener \xE0 bien votre projet de\n            conception et vous aider \xE0 d\xE9marrer ou \xE0 faire \xE9voluer les\n            performances de votre commerce, entreprise ou PME sur\n            Internet.",
    extraclass: "flex text-center",
    format: "deflaut"
  }, null, _parent));
  _push(`</p></div><!--[-->`);
  ssrRenderList($options.get_DataFooter.ListDataFooter, (footer) => {
    _push(`<div><h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">${ssrInterpolate(footer.heading)}</h6><!--[-->`);
    ssrRenderList(footer.heading_links, (link) => {
      _push(`<p class="mb-4"><a${ssrRenderAttr("href", link.link)}>${ssrInterpolate(link.name)}</a></p>`);
    });
    _push(`<!--]--></div>`);
  });
  _push(`<!--]--></div></div></div></div><div class="bg-white z-80 px-6 text-gray-700 flex justify-center items-center text-center py-3 font-ligth text-base md:text-base"> Copyright \xA9 2024 Dolubux. Tous droits reserv\xE9s. D\xE9velopp\xE9 par dolubux. </div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterEnd = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    NavBar,
    FooterEnd
  },
  data() {
    return;
  },
  mounted() {
  },
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = resolveComponent("NavBar");
  const _component_FooterEnd = resolveComponent("FooterEnd");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_FooterEnd, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DyuHR6Rs.mjs.map
