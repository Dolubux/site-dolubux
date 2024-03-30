import { O as OnlyButton } from './OnlyButton-B9XUKSvb.mjs';
import { O as OnlyDescription, a as OnlyTextTitle } from './OnlyTextTitle-CG6mVEzO.mjs';
import { useSSRContext, resolveComponent, reactive, resolveDirective, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, withDirectives, openBlock, createBlock, Fragment, renderList } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL, _ as _export_sfc } from './server.mjs';
import { H as HeaderSection } from './HeaderSections-BoASx93b.mjs';
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

const _sfc_main$b = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const Partenaires = reactive([
      {
        name: "/partenaires/dooya.png"
      },
      {
        name: "/partenaires/phylosanite.png"
      },
      {
        name: "/partenaires/logo_carmen_security.webp"
      },
      {
        name: "/partenaires/likidons.png"
      },
      {
        name: "/partenaires/zoolouk.png"
      },
      {
        name: "/partenaires/logo_djoumaf.png"
      }
    ]);
    return {
      Partenaires,
      modules: [Navigation, Autoplay]
    };
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-auto flex flex-col mt-8 gap-4" }, _attrs))}><span class="text-center font-bold text-xl">+ de 30 entreprises nous font d\xE9j\xE0 confiance</span><div class="bg-gray-50 w-full"><div class="flex justify-between py-8 w-10/12 m-auto">`);
  _push(ssrRenderComponent(_component_swiper, {
    navigation: false,
    modules: $setup.modules,
    "space-between": 50,
    loop: true,
    autoplay: {
      delay: 1e3,
      disableOnInteraction: true
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      480: { slidesPerView: 3, spaceBetween: 10 },
      768: { slidesPerView: 4, spaceBetween: 10 },
      1024: { slidesPerView: 4, spaceBetween: 10 }
    },
    class: "mySwiper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.Partenaires, (partenaire) => {
          _push2(ssrRenderComponent(_component_swiper_slide, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="h-12 w-32"${_scopeId2}><img${ssrRenderAttrs(mergeProps({
                  class: "w-full h-full object-contain",
                  alt: ""
                }, ssrGetDirectiveProps(_ctx, _directive_lazy, partenaire.name)))}${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "h-12 w-32" }, [
                    withDirectives(createVNode("img", {
                      class: "w-full h-full object-contain",
                      alt: ""
                    }, null, 512), [
                      [_directive_lazy, partenaire.name]
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.Partenaires, (partenaire) => {
            return openBlock(), createBlock(_component_swiper_slide, null, {
              default: withCtx(() => [
                createVNode("div", { class: "h-12 w-32" }, [
                  withDirectives(createVNode("img", {
                    class: "w-full h-full object-contain",
                    alt: ""
                  }, null, 512), [
                    [_directive_lazy, partenaire.name]
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 256))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/partner.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Partner = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
  components: { OnlyButton, OnlyDescription, Partner },
  setup() {
    const Chiff = reactive([
      {
        name: "Projets",
        value: "+30"
      },
      {
        name: "Satisfaits",
        value: "100% "
      },
      {
        name: "Trafic",
        value: "x150"
      }
    ]);
    return { Chiff };
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_only_description = resolveComponent("only-description");
  const _component_only_button = resolveComponent("only-button");
  const _component_Partner = resolveComponent("Partner");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<!--[--><div class="w-full big:w-10/12 m-auto rounded-lg pt-24 pb-8 md:pt-20 relative"><div class="grid grid-cols-2 gap-x-16 lg:grid-cols-1 w-10/12 m-auto md:text-3nxl font-sans"><div class="py-8 px-4 md:px-0 z-20 w-full"><div class="flex flex-col gap-4 w-[95%] md:w-full xl:w-10/12"><div class="flex flex-col animate__animated animate__slideInLeft z-20 w-full lg:text-5xl text-gray-700 text-[3.8em] leading-[1em] md:text-[1.3em] xl:text-5xl font-bold"><span class="text-blue-500 font-black"> Propulser votre entreprise, </span><span class=""> vers le succ\xE8s.</span></div>`);
  _push(ssrRenderComponent(_component_only_description, {
    title: "Dolubux vous accompagne dans la conception d'applications Web et mobile visant \xE0 am\xE9liorer les performances commerciales de votre entreprise.",
    extraclass: "pt-2 pb-6 text-gray-700 w-10/12 font-medium",
    format: "small"
  }, null, _parent));
  _push(`</div><div class="flex justify-between w-10/12 md:w-full mb-8 text-gray-700"><!--[-->`);
  ssrRenderList($setup.Chiff, (ch, index2) => {
    _push(`<div><div class="${ssrRenderClass([index2 % 2 != 0 ? "border-x-2 px-6" : "pr-4", "flex flex-col justify-center text-center"])}"><span class="text-5xl md:text-4xl font-black"><span class=""></span><span class="">${ssrInterpolate(ch.value)}</span></span><span class="text-base">${ssrInterpolate(ch.name)}</span></div></div>`);
  });
  _push(`<!--]--></div><div class="flex items-center gap-x-4">`);
  _push(ssrRenderComponent(_component_only_button, {
    title: "Commencez",
    bg: true,
    nohref: false,
    emit: "#catalogues"
  }, null, _parent));
  _push(`</div></div><div class=""><img${ssrRenderAttrs(mergeProps({
    class: "lg:hidden w-full h-full object-cover",
    src: "",
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/images/banner-two.jpg")))}></div></div></div><div class="">`);
  _push(ssrRenderComponent(_component_Partner, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/Banner.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  components: { HeaderSection, OnlyDescription, OnlyTextTitle },
  data() {
    return {
      Process: [
        {
          id: "0",
          title: "Transparence",
          description: "Chaque projet se d\xE9roule dans un environnement qui peut varier d'un projet \xE0 un autre. Ainsi, la r\xE9alisation de votre projet pourrait se frotter \xE0 des variables ind\xE9pendantes de votre volont\xE9.",
          color: "text-blue-500",
          img: "dlx-transparence"
        },
        {
          id: "1",
          title: "Cr\xE9ativit\xE9",
          description: "Il y a trois r\xE9actions possibles \xE0 tout design oui, non et whaou !La troisi\xE8me est celle que nous visons. Un design de qualit\xE9, est celui qui s'accorde parfaitement au cadre dans lequel il s'inscrit.",
          color: "text-yellow-300",
          img: "dlx-creativite"
        },
        {
          id: "2",
          title: "Exp\xE9rience",
          description: `Dolubux, met \xE0 votre disposition son exp\xE9rience et son savoir-faire, afin de concevoir la meilleure solution pour votre projet business. Nous vous assurerons un service efficace  et de qualit\xE9 superieur.`,
          color: "text-blue-500",
          img: "dlx-experiance"
        }
        // {
        //   id: '3',
        //   title: 'Performance',
        //   description: `Quoi que nous faisions, ont le faire bien mieux ! pour toujours mettre à vos dispositions des services de qualité supérieure ! pour vos sites web, application mobile, produits digitaux et autres.`,
        //   color: 'text-yellow-300',
        //   img: 'dlx-performance',
        // },
      ]
    };
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_section = resolveComponent("header-section");
  const _component_only_text_title = resolveComponent("only-text-title");
  const _component_only_description = resolveComponent("only-description");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col m-auto pt-8 lg:pt-16 w-full big:w-8/12" }, _attrs))}><div class=""><div class="mb-16 md:mb-8">`);
  _push(ssrRenderComponent(_component_header_section, {
    sub: "Valeurs",
    title: "Nos Valeurs",
    textColor: "text-gray-700"
  }, null, _parent));
  _push(`</div><div class="grid grid-cols-3 gap-16 w-10/12 m-auto md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8 big:w-full" data-wow-offset="30"><!--[-->`);
  ssrRenderList($data.Process, (item) => {
    _push(`<div><div class="flex flex-col justify-start items-censtartter wow animate__animated animate__flipInX"><img${ssrRenderAttrs(mergeProps({
      class: "mb-4 h-12 w-12",
      src: "",
      alt: ""
    }, ssrGetDirectiveProps(_ctx, _directive_lazy, `/icons/${item.img}.png`)))}><div class="flex flex-col items-start">`);
    _push(ssrRenderComponent(_component_only_text_title, {
      title: item.title,
      color: item.color,
      size: "large"
    }, null, _parent));
    _push(ssrRenderComponent(_component_only_description, {
      title: item.description,
      extraclass: "mt-2 text-start",
      format: "deflaut"
    }, null, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/Process.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Process = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  components: { OnlyDescription },
  props: {
    imageSection: String,
    list: Array["iconCard"],
    OrderImage: String,
    OrderSections: String,
    LazyImage: String,
    contentVisible: Number
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_only_description = resolveComponent("only-description");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center gap-8 w-10/12 m-auto big:w-full lg:flex-col" }, _attrs))}><div class="${ssrRenderClass([$props.OrderSections, "lg:w-full w-full"])}"><ul class="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 gap-12"><!--[-->`);
  ssrRenderList($props.list, (index2) => {
    _push(`<li><div class="relative rounded-lg lg:px-4"><div class="flex items-center gap-4 mb-4"><div class="flex items-center justify-center"><img${ssrRenderAttrs(mergeProps({
      class: "h-9 w-10",
      src: "",
      alt: ""
    }, ssrGetDirectiveProps(_ctx, _directive_lazy, `/functionality/${index2.iconCard}.png`)))}></div><span class="text-lg font-semibold text-yellow-300 w-full cursor-pointer">${ssrInterpolate(index2.title)}</span></div><div class="">`);
    _push(ssrRenderComponent(_component_only_description, {
      title: index2.item,
      extraclass: "py-4"
    }, null, _parent));
    _push(`</div></div></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/__partiels/Functionality/order-functionality.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const OrderFunctionality = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  components: { OrderFunctionality, HeaderSection, OnlyButton },
  data() {
    return {
      ftyToHide: false,
      pagnte: 6,
      paginator: 0,
      paginatorEnd: 0,
      paginatorStart: 1,
      paginatorIndicator: "",
      temp: 2,
      ListWeb: [
        {
          _id: 0,
          iconCard: "responsive",
          title: "Flexibilite",
          item: `Dolubux, concevoir des applications adaptaient pour tous les types d'\xE9crans. Que ce soit mobile, tablette et/ou desktop nous l'adaptons \xE0 l'\xE9cran ! pour donner \xE0 vos utilisateurs plus de libert\xE9, de consommer vos produits ou information o\xF9 il le souhaite.`
        },
        {
          _id: 1,
          iconCard: "optimization",
          title: "Referencement Naturel",
          item: `Gr\xE2ce au SEO, SMO, SXO, nous permettons \xE0 vos applications d'\xEAtre facilement index\xE9s par tous les moteurs de recherche. Nous optimisons vos sites web, afin qu'il soit accessible \xE0 un grand nombre de personnes qui d\xE9sirent vos services ou produits.`
        },
        {
          _id: 2,
          iconCard: "/catalogue",
          title: "Catalogue Produits",
          item: `Lorsque vous commercialisez un grand nombre de produits ou service, il est alors utile d\u2019int\xE9grer un module qui permette de g\xE9n\xE9rer un catalogue produit. la mise en place de votre catalogue permet de rendre votre offre beaucoup plus claire, et plus pr\xE9cise, donc plus all\xE9chante.`
        },
        {
          _id: 3,
          iconCard: "/location",
          title: "Carte Google Maps",
          item: `Sur internet, vos clients ont besoin d\u2019\xEAtre rassur\xE9 par votre entreprise. En effet, \xE0 l\u2019\xE8re du digital, il faut savoir recr\xE9er ce lien de confiance. Votre site internet serait un atout essentiel pour renseigner tr\xE8s facilement vos visiteurs. Vous pourrez ainsi leur montrer o\xF9 se situe votre local, vos points de vente.`
        },
        {
          _id: 4,
          iconCard: "/web-site",
          title: "Blog",
          item: `Le blog permet de r\xE9diger des articles en lien avec votre secteur d\u2019activit\xE9. L\u2019objectif est d\u2019offrir un contenu pertinent, riche et vari\xE9 aux visiteurs. Cela permet d\u2019appuyer l\u2019expertise de la marque et sa notori\xE9t\xE9. Aussi, cela permet d\u2019\xEAtre bien d\u2019augmenter sa visibilit\xE9 en \xE9tant bien r\xE9f\xE9renc\xE9.`
        },
        {
          _id: 5,
          iconCard: "gallery",
          title: "Galerie Photos et Vid\xE9os",
          item: `On le dit souvent qu\u2019une image et video vaut 1000 mots. Tout \xE7a pour dire que l\u2019int\xE9gration de photos (et vid\xE9os) est primordiale au dynamise de votre site internet, aussi elles permettent de faire d\xE9couvrir l\u2019environnement de l\u2019entreprise, ses services, ses \xE9v\xE8nements, son \xE9quipe\u2026`
        },
        {
          _id: 6,
          iconCard: "contact-form",
          title: "Formulaire de Contact",
          item: `Tout d\u2019abord le formulaire de contact est l\xE0 pour inciter vos visiteurs \xE0 d\xE9marrer une discussion avec vous. Il intervient soit dans une d\xE9marche de prospection (on cherche \xE0 obtenir de nouveaux leads), aussi dans la fid\xE9lisation (on cherche \xE0 se montrer disponible aupr\xE8s de ses clients).`
        },
        {
          _id: 7,
          iconCard: "/shop",
          title: "Bouton e-commerce",
          item: `Le bouton e-commerce permet \xE0 vos clients d'acc\xE9der \xE0 votre page e-commerce ou boutique en ligne en toutes simplicit\xE9. Ins\xE9rez-le sur votre site web, \xE0 un endroit bien sp\xE9cifique de la page, afin que les internautes ou visiteurs puissent y acc\xE9der \xE0 tout moment.`
        },
        {
          _id: 8,
          iconCard: "design",
          title: "Ui-Ux Prototype",
          item: `Le prototypage de votre site, application et solution digitale, vous donne un aper\xE7u r\xE9al de la fa\xE7on donc se comportera votre site dans les mains de vos clients. Le concept de l'interface utilisateur et de l'exp\xE9rience utilisateur est d'adapter votre site internt, \xE0 votre cible..`
        },
        {
          _id: 9,
          iconCard: "booking",
          title: "R\xE9servation en Ligne",
          item: `R\xE9servation en Ligne, Prise de rendez-vous : Vous pouvez souhaiter parfois que vos clients puissent r\xE9server votre service en ligne. Que ce soit pour une entr\xE9e \xE0 une conf\xE9rence ou un concert, une table au restaurant, une chambre d\u2019h\xF4tel, un rendez-vous \xE0 un cours de gym ou chez le m\xE9decin.`
        },
        {
          _id: 10,
          iconCard: "/comment",
          title: "Avis Clients",
          item: `Les Avis clients : vos internautes sont invit\xE9s \xE0 laisser un avis sur vos produits; Commentaires: Il est recommand\xE9 de laisser la possibilit\xE9 aux internautes de commenter vos articles, d\u2019y ajouter leur opinion; T\xE9moignages : vos internautes jugent la qualit\xE9 du service de votre entreprise.`
        },
        {
          _id: 14,
          iconCard: "laptop",
          title: "Espace Clients",
          item: `Ce service digital, permet de mettre en avant votre marque, produits, services et/ou g\xE9n\xE9ralement votre entreprise ou business sur les r\xE9seaux sociaux, Qui devient de plus en plus un moins de communication ultra puissance et performante ou m\xEAme indispensable pour la croissance de votre entreprise.`
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
    };
  },
  computed: {},
  mounted() {
    this.paginatorEnd = Math.floor(this.ListWeb.length / 6);
  },
  methods: {
    nextPage() {
      Math.floor(this.ListWeb.length % this.pagnte);
      this.paginator = this.paginator + 6;
      this.paginatorStart = this.paginatorStart + 1;
      if (this.paginatorStart >= this.paginatorEnd) {
        this.paginatorIndicator = "Func - 2/2";
      }
    },
    prevPage() {
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_section = resolveComponent("header-section");
  const _component_order_functionality = resolveComponent("order-functionality");
  const _component_only_button = resolveComponent("only-button");
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="pt-32 md:pt-24 h-full w-full big:w-8/12 m-auto" id="fonctionnalite"><div>`);
  _push(ssrRenderComponent(_component_header_section, {
    sub: "In WebSite",
    title: "Nos Fonctionnalit\xE9s !",
    textColor: "text-gray-700 "
  }, null, _parent));
  _push(`<div class="flex flex-col gap-8 pt-16 md:pt-8 big:w-full m-auto">`);
  _push(ssrRenderComponent(_component_order_functionality, {
    LazyImage: "webInternet",
    list: $data.ListWeb.slice(0, $data.paginator + 6),
    OrderImage: "order-last",
    OrderSections: "lg:order-last"
  }, null, _parent));
  _push(`</div></div></div><div class="flex justify-start gap-3 mt-16 z-20 w-10/12 m-auto"><button>`);
  _push(ssrRenderComponent(_component_only_button, {
    title: $data.paginatorStart === $data.paginatorEnd ? $data.paginatorIndicator : "Func - 1/2",
    bg: false,
    nohref: true,
    extraclass: "bg-yellow-300 ring-4 ring-yellow-200"
  }, null, _parent));
  _push(`</button></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/Functionality.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Functionality = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  components: { OnlyButton, OnlyDescription, Functionality },
  name: "OrderBanner",
  props: {
    lists: Array
  },
  data() {
    return {
      showService: false
    };
  },
  methods: {
    openModalForm({ bool, custom }) {
      this.$store.commit("modalForm", { bool, custom });
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_only_description = resolveComponent("only-description");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-32 md:gap-16" }, _attrs))}><!--[-->`);
  ssrRenderList($props.lists, (item, index2) => {
    _push(`<section><div class="flex justify-between gap-y-4 items-center w-10/12 big:w-8/12 m-auto md:m-auto lg:items-start lg:gap-x-8 md:flex-col"><div class="${ssrRenderClass([index2 % 2 === 0 ? "order-0" : "order-last", "w-4/12 lg:w-full md:order-last"])}"><div class="flex flex-col gap-4 w-11/12 3xl:w-full"><figure class="flex w-10 h-10 rounded-md justify-center items-center"><img${ssrRenderAttrs(mergeProps({
      src: "",
      alt: "",
      class: "h-full w-full opacity-80"
    }, ssrGetDirectiveProps(_ctx, _directive_lazy, item.icone)))}></figure><span class="text-4xl font-bold md:text-2xl">${ssrInterpolate(item.title_EXTRA)}</span>`);
    _push(ssrRenderComponent(_component_only_description, {
      title: item.describle,
      format: "deflaut"
    }, null, _parent));
    _push(`</div></div><div class="w-6/12 md:w-full lg:w-10/12 lg:order-0"><img${ssrRenderAttrs(mergeProps({
      class: "rounded-lg object-cover w-full 3xl:hidden lg:hidden xl:flex big:hidden",
      style: { "height": "24em" },
      src: "",
      alt: item.title_EXTRA
    }, ssrGetDirectiveProps(_ctx, _directive_lazy, item.image)))}><img${ssrRenderAttrs(mergeProps({
      class: "rounded-lg object-cover w-full xl:hidden 3xl:flex",
      style: { "height": "28em" },
      src: "",
      alt: item.title_EXTRA
    }, ssrGetDirectiveProps(_ctx, _directive_lazy, item.image)))}><img${ssrRenderAttrs(mergeProps({
      class: "rounded-lg object-cover 3xl:hidden big:hidden w-full h-full lg:flex",
      src: "",
      alt: item.title_EXTRA
    }, ssrGetDirectiveProps(_ctx, _directive_lazy, item.image)))}></div></div></section>`);
  });
  _push(`<!--]--></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/__partiels/Functionality/order-benefits.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const OrderBenefits = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0 = publicAssetsURL("/videos/sw7.mp4");
const _imports_1 = publicAssetsURL("/icons/play.svg");
const _imports_2 = publicAssetsURL("/icons/pause.png");
const _sfc_main$5 = {
  name: "BenefitsTypes",
  props: ["className", "Describle"],
  filters: {
    sub(value) {
      if (value != "") {
        let test = value.substr(0, 20);
        return test;
      }
    }
  },
  data() {
    return {
      videoG: true,
      HeightAnnimate: "",
      contentVisible: "00",
      WebSite: [
        {
          number: "Site  Internet",
          title: "Creation Site internet Web",
          logo: `company`,
          HoverClass: " ",
          short_describle: `site vitrine,
           site sur messure,
            site E-Commerce, 
              Blog,Landing Page,
               Portfolio,
                Autres...`,
          describle_def_1: [],
          href_id: "/nos-prestations/website",
          image: `https://img.freepik.com/photos-gratuite/developpement-site-web_53876-95315.jpg?w=826&t=st=1650817877~exp=1650818477~hmac=a36ffdb4c4158413d19628afa88276d18cf2a8fc13e76402df5acfc63f2ac400`
        },
        {
          number: "Application Mobile",
          title: "Creation Application Mobile",
          logo: `company`,
          HoverClass: "hover:border-2  hover:text-gray-700",
          href_id: "/nos-prestations/desgin",
          short_describle: `Via application : Commande, r\xE9servation, web App, blog formation, Custom App, Application sur mesure`,
          image: `https://img.freepik.com/psd-gratuit/gros-plan-telephone-portable-montrant-recette-ecran_53876-11966.jpg?t=st=1650817790~exp=1650818390~hmac=d7db37de2a9adea151cced1a6d9dda01104c4d0f641a3cde94efd34ac28d2fd1&w=740`
        },
        {
          number: "Marketing Digital",
          title: "Creation de media",
          logo: `company`,
          HoverClass: "hover:border-2  hover:text-gray-700",
          href_id: "/nos-prestations/desgin",
          short_describle: `Spot Publicitaire, publicit\xE9 digitale, e-mail marketing, e-whatsapp Compagne, Sms en masse`,
          image: `https://img.freepik.com/photos-gratuite/marketing-numerique-icones-gens-affaires_53876-94833.jpg?t=st=1650817913~exp=1650818513~hmac=bae771aef67d14b3b0de1d2f68087fbc4195aef5bb74994aaa3bbd65abd8ee91&w=740`
        },
        {
          number: "\xC9v\xE8nements",
          title: "Nous les trouverons pour vos!",
          logo: `company`,
          HoverClass: "hover:border-2  hover:text-gray-700",
          href_id: "/nos-prestations/desgin",
          short_describle: `Photographe, Cameramen, Cuisiner, Cadeau, Croquet, Cambuse, personnel, salles, assistance et bien autres....`,
          image: `https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789__480.jpg`
        }
      ]
    };
  },
  components: { OnlyDescription },
  mounted() {
    const myVideo = (void 0).getElementById("video-dlx");
    myVideo.currentTime = 10;
  },
  methods: {
    play() {
      const myVideo = (void 0).getElementById("video-dlx");
      if (myVideo.paused) {
        this.videoG = false;
        myVideo.play();
      } else {
        this.videoG = true;
        myVideo.pause();
      }
    },
    endedvideo() {
      this.videoG = true;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_OnlyDescription = resolveComponent("OnlyDescription");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><!--[-->`);
  ssrRenderList($data.WebSite, (site) => {
    _push(`<div class="hidden"><a class="${ssrRenderClass(" relative flex flex-col text-gray-700 px-6 py-8 h-[12em]  rounded-lg transition duration-300 ease-in-out ")}"><div class="absolute inset-0 z-20 w-full h-full border-0 rounded-md bg-gray-700/95"><img${ssrRenderAttrs(mergeProps({
      class: "w-full h-full object-cover border-0 rounded-md opacity-30",
      alt: ""
    }, ssrGetDirectiveProps(_ctx, _directive_lazy, site.image)))}></div><div class="flex flex-col h-full z-20"><span class="flex items-center text-blue-500 text-xl font-bold">${ssrInterpolate(site.number)}</span><div class="flex flex-col"><span class="text-lg font-medium text-gray-50 py-2">${ssrInterpolate(site.title)}</span>`);
    _push(ssrRenderComponent(_component_OnlyDescription, {
      title: site.short_describle,
      extraclass: "text-gray-100",
      format: "small"
    }, null, _parent));
    _push(`</div></div></a></div>`);
  });
  _push(`<!--]--><div class="relative"><video id="video-dlx" class="w-[640px]"><source${ssrRenderAttr("src", _imports_0)} type="video/mp4"></video>`);
  if ($data.videoG) {
    _push(`<div class="absolute flex justify-center items-center top-0 left-0 w-full h-full outline-none"><div class="rounded-full shadow-xl bg-blue-500/80 cursor-pointer p-6"><img class="h-8"${ssrRenderAttr("src", _imports_1)} alt=""></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (!$data.videoG) {
    _push(`<div class="absolute flex justify-center items-center top-0 left-0 w-full h-full outline-none"><div class="rounded-full shadow-xl bg-blue-500/80 cursor-pointer p-6"><img class="h-8"${ssrRenderAttr("src", _imports_2)} alt=""></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/__partiels/Functionality/type-benefits.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TypeBenefits = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  components: {
    HeaderSection,
    TypeBenefits,
    OrderBenefits,
    OnlyDescription,
    OnlyTextTitle
  },
  data() {
    const BenefitsDetailsList = [
      {
        id: 0,
        title_EXTRA: "Creation De Site Internet Moderne.",
        title: `Devenez la reference dans votre secteur d'activiter`,
        describle: `Pour cr\xE9er et d\xE9velopper vos sites internet, notre priorit\xE9 est de mettre en valeur vos produits, services ou activit\xE9s. Nous nous engageons \xE0 vous proposer des interfaces adapt\xE9es \xE0 votre activit\xE9 et \xE0 votre public, en mettant l'accent sur l'ergonomie (exp\xE9rience utilisateur) et le webdesign. Notre objectif est de vous offrir des solutions qui r\xE9pondent parfaitement \xE0 vos besoins et qui mettent en avant votre entreprise de mani\xE8re optimale.`,
        services: `Site Internet vitrine,
           Site Internet sur messure,
            Site Internet E-Commerce,
             Sites Editoriaux,
              Blog,Landing Page,
               Portfolio,
                Autres...`,
        icone: "/icons/dlx-web.png",
        image: "/images/dlx-website.jpg",
        boolIfMobile: "web",
        textColorClass: "text-blue-500",
        bgColorClass: " shadow-2xl  hover:shadow-md"
      },
      {
        id: 1,
        title_EXTRA: "Creation Application Mobile Moderne.",
        title: `Rapprochez-vous en encore plus, de vos clients`,
        describle: `Notre objectif principal dans le d\xE9veloppement de vos applications mobiles est de concevoir un outil exceptionnel et pratique pour vos utilisateurs. Nous souhaitons vous aider \xE0 vous rapprocher de vos clients en cr\xE9ant des interfaces et des exp\xE9riences adapt\xE9es \xE0 votre activit\xE9 et \xE0 votre public cible. Notre priorit\xE9 est de vous offrir des solutions qui r\xE9pondent parfaitement \xE0 vos besoins et qui favorisent une meilleure interaction avec votre entreprise.`,
        services: ` Application Mobile vitrine,
           Application Mobile sur messure,
           Application Mobile E-Commerce,
           Application Mobile Editoriaux `,
        icone: "/icons/dlx-mobile.png",
        image: "/images/dlx-mobile.jpg",
        boolIfMobile: "mobile",
        textColorClass: "text-blue-500",
        bgColorClass: " shadow-2xl  hover:shadow-md"
      },
      {
        id: 2,
        title_EXTRA: "Marketing Digital",
        title: `Rapprochez-vous en encore plus, de vos clients`,
        describle: `Le marketing digital est une cl\xE9 essentielle pour ouvrir de nouvelles perspectives de croissance \xE0 votre entreprise. Pour tous vos besoins en services digitaux, nous nous engageons \xE0 vous offrir le meilleur en termes de qualit\xE9 de production et de strat\xE9gie de croissance. Laissez-nous vous accompagner pour vous fournir des solutions sur mesure qui propulseront votre entreprise vers de nouveaux succ\xE8s.`,
        services: `Creation de newsletters,
           Campagne promotionale Whatsapp & Email,
            Design UI & UX,
             Affiche Media Sociaux,
              Spot Publicitaire.`,
        icone: "/icons/dlx-marketing.png",
        image: "/images/dlx-digitale.jpg",
        boolIfMobile: "digital",
        textColorClass: "text-blue-500",
        bgColorClass: " shadow-2xl  hover:shadow-md"
      }
    ];
    return {
      BenefitsDetailsList
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_section = resolveComponent("header-section");
  const _component_only_text_title = resolveComponent("only-text-title");
  const _component_only_description = resolveComponent("only-description");
  const _component_type_benefits = resolveComponent("type-benefits");
  const _component_order_benefits = resolveComponent("order-benefits");
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "prestations" }, _attrs))} data-v-e0b647a5><div class="flex flex-col pt-32 md:pt-24 w-full big:w-8/12 m-auto" data-v-e0b647a5><div class="mb-16 md:mb-8" data-v-e0b647a5>`);
  _push(ssrRenderComponent(_component_header_section, {
    sub: "Prestations",
    title: "Nos prestations business.",
    textColor: "text-gray-700"
  }, null, _parent));
  _push(`</div><div class="rounded-3xl" data-v-e0b647a5><div class="flex items-start gap-16 w-10/12 m-auto xl:grid-cols-1 md:w-full lg:flex-col big:w-full" data-v-e0b647a5><div class="flex flex-col w-4/12 col-span-1 lg:w-4/5 md:mx-8 wow animate__animated animate__slideInLeft" data-v-e0b647a5>`);
  _push(ssrRenderComponent(_component_only_text_title, {
    title: "Nos Services vedette",
    color: "text-yellow-300 mb-4",
    size: "large"
  }, null, _parent));
  _push(ssrRenderComponent(_component_only_description, {
    title: "Pour transformer vos id\xE9es en r\xE9alit\xE9, nous vous offrons nos services pour faciliter le d\xE9veloppement de votre projet commercial. Notre objectif est de concevoir des solutions sur mesure pour r\xE9pondre aux besoins de votre entreprise et les aider \xE0 atteindre de nouveaux sommets.",
    format: "deflaut"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_type_benefits, {
    className: "grid grid-cols-2 col-span-1 w-8/12 gap-4 w-4/4 md:grid-cols-1 lg:grid-cols-2 lg:w-full xl:grid-cols-2 md:px-8",
    Describle: "hidden"
  }, null, _parent));
  _push(`</div></div></div><div class="pt-32" data-v-e0b647a5>`);
  _push(ssrRenderComponent(_component_order_benefits, {
    lists: $data.BenefitsDetailsList,
    OrderSection: ""
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/Benefits.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Benefits = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e0b647a5"]]);
const _sfc_main$3 = {
  components: { HeaderSection, OnlyTextTitle, OnlyDescription },
  data() {
    const globalContactClass = "flex flex-col gap-2";
    const iconeClass = "h-8 w-8 ";
    const headClass = "";
    const DayAndHoursClass = "";
    const extraInDescribleClass = "text-gray-50  font-bold opacity-90 cursor-pointer";
    const describleClass = "text-gray-50 z-20";
    return {
      iconeClass,
      headClass,
      DayAndHoursClass,
      extraInDescribleClass,
      describleClass,
      globalContactClass
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
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_section = resolveComponent("header-section");
  const _component_only_text_title = resolveComponent("only-text-title");
  const _component_only_description = resolveComponent("only-description");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "flex flex-col w-full m-auto pt-32 md:pt-24",
    id: "contact-nous"
  }, _attrs))}><div class="flex flex-col w-full"><div class="mb-16 w-full m-auto big:w-8/12">`);
  _push(ssrRenderComponent(_component_header_section, {
    sub: "Contacts",
    title: "Votre Projet, on n'en parle?",
    textColor: "text-gray-700"
  }, null, _parent));
  _push(`</div><div class="w-full relative"><img${ssrRenderAttrs(mergeProps({
    class: "w-full h-full object-cover absolute",
    src: "",
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/images/dlx-illustra.jpg")))}><div class="absolute w-full h-full bg-gray-900 opacity-90"></div><div class="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2 w-10/12 big:w-8/12 py-16 m-auto rounded-lg h-full opacity-95 z-20 xl:gap-x-8 gap-x-16 gap-y-8"><div class="${ssrRenderClass($data.globalContactClass)}"><img${ssrRenderAttrs(mergeProps({
    src: "",
    class: $data.iconeClass,
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/icons/dlx-email.png")))}>`);
  _push(ssrRenderComponent(_component_only_text_title, {
    title: "En Ligne",
    color: "text-blue-500",
    size: "middle"
  }, null, _parent));
  _push(ssrRenderComponent(_component_only_description, {
    title: "",
    extraclass: $data.describleClass,
    format: "deflaut"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Tous les jours. 24hrs/24.<br${_scopeId}> Faites nous savoir vos besion en linge par Mail : <a target="_blank"${ssrRenderAttr("href", "mailto:" + $options.get_email_dataContacts)} class="${ssrRenderClass($data.extraInDescribleClass)}"${_scopeId}>${ssrInterpolate($options.get_email_dataContacts)}</a> Nous serons disponible pour vous, sans contrainnte de temps. `);
      } else {
        return [
          createTextVNode(" Tous les jours. 24hrs/24."),
          createVNode("br"),
          createTextVNode(" Faites nous savoir vos besion en linge par Mail : "),
          createVNode("a", {
            target: "_blank",
            href: "mailto:" + $options.get_email_dataContacts,
            class: $data.extraInDescribleClass
          }, toDisplayString($options.get_email_dataContacts), 11, ["href"]),
          createTextVNode(" Nous serons disponible pour vous, sans contrainnte de temps. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="${ssrRenderClass($data.globalContactClass)}"><img${ssrRenderAttrs(mergeProps({
    src: "",
    class: $data.iconeClass,
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/icons/dlx-message.png")))}>`);
  _push(ssrRenderComponent(_component_only_text_title, {
    title: "Par Message",
    color: "text-yellow-300",
    size: "small"
  }, null, _parent));
  _push(ssrRenderComponent(_component_only_description, {
    title: "",
    extraclass: $data.describleClass,
    format: "deflaut"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Du lundi au vendredi. De 9h \xE0 18h. <br${_scopeId}><a target="_blank"${ssrRenderAttr("href", "mailto:" + $options.get_email_dataContacts)} class="${ssrRenderClass($data.extraInDescribleClass)}"${_scopeId}>${ssrInterpolate($options.get_phone_name_dataContacts)}</a> / <a target="_blank"${ssrRenderAttr("href", "tel:0779613593")} class="${ssrRenderClass($data.extraInDescribleClass)}"${_scopeId}> +2250779613593 </a> ou sur <a class="${ssrRenderClass($data.extraInDescribleClass)}" target="_blank"${ssrRenderAttr("href", $options.get_wa_dataContacts)}${_scopeId}>WhatsApp</a>. On s&#39;ecris maintement ? Nous serons disposer \xE0 repondre, a tous vos questions. `);
      } else {
        return [
          createTextVNode(" Du lundi au vendredi. De 9h \xE0 18h. "),
          createVNode("br"),
          createVNode("a", {
            target: "_blank",
            href: "mailto:" + $options.get_email_dataContacts,
            class: $data.extraInDescribleClass
          }, toDisplayString($options.get_phone_name_dataContacts), 11, ["href"]),
          createTextVNode(" / "),
          createVNode("a", {
            target: "_blank",
            href: "tel:0779613593",
            class: $data.extraInDescribleClass
          }, " +2250779613593 ", 2),
          createTextVNode(" ou sur "),
          createVNode("a", {
            class: $data.extraInDescribleClass,
            target: "_blank",
            href: $options.get_wa_dataContacts
          }, "WhatsApp", 10, ["href"]),
          createTextVNode(". On s'ecris maintement ? Nous serons disposer \xE0 repondre, a tous vos questions. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="${ssrRenderClass($data.globalContactClass)}"><img${ssrRenderAttrs(mergeProps({
    src: "",
    class: $data.iconeClass
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/icons/dlx-call.png")))}>`);
  _push(ssrRenderComponent(_component_only_text_title, {
    title: "Par Telephone",
    color: "text-blue-500",
    size: "middle"
  }, null, _parent));
  _push(ssrRenderComponent(_component_only_description, {
    title: "",
    extraclass: $data.describleClass,
    format: "deflaut"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Du lundi au vendredi. De 9h \xE0 18h.<br${_scopeId}> Au <a target="_blank" class="${ssrRenderClass($data.extraInDescribleClass)}"${ssrRenderAttr("href", "tel:" + $options.get_phone_dataContacts)}${_scopeId}>${ssrInterpolate($options.get_phone_name_dataContacts)}</a> / <a target="_blank"${ssrRenderAttr("href", "tel:0779613593")} class="${ssrRenderClass($data.extraInDescribleClass)}"${_scopeId}> +2250779613593 </a> ou sur <a class="${ssrRenderClass($data.extraInDescribleClass)}" target="_blank"${ssrRenderAttr("href", $options.get_wa_dataContacts)}${_scopeId}>WhatsApp</a>. On s&#39;appelle maintement? nous serons attentive a l&#39;ecoute de vos besion. `);
      } else {
        return [
          createTextVNode(" Du lundi au vendredi. De 9h \xE0 18h."),
          createVNode("br"),
          createTextVNode(" Au "),
          createVNode("a", {
            target: "_blank",
            class: $data.extraInDescribleClass,
            href: "tel:" + $options.get_phone_dataContacts
          }, toDisplayString($options.get_phone_name_dataContacts), 11, ["href"]),
          createTextVNode(" / "),
          createVNode("a", {
            target: "_blank",
            href: "tel:0779613593",
            class: $data.extraInDescribleClass
          }, " +2250779613593 ", 2),
          createTextVNode(" ou sur "),
          createVNode("a", {
            class: $data.extraInDescribleClass,
            target: "_blank",
            href: $options.get_wa_dataContacts
          }, "WhatsApp", 10, ["href"]),
          createTextVNode(". On s'appelle maintement? nous serons attentive a l'ecoute de vos besion. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="flex flex-col gap-4 w-7/12 lg:w-10/12 m-auto mt-32"><h1 class="z-40 text-6xl font-black text-center md:text-5xl text-gray-700 font-sans"> Le meilleur pour vos projets </h1>`);
  _push(ssrRenderComponent(_component_only_description, {
    title: "Dolubux est \xE0 la fois une micro-startup et un prestataire de services en ligne. Pour tous vos projets de cr\xE9ation (web, mobile, digitales et bien autres), dolubux s'engage \xE0 vous donner le meilleur de ses services. notre objectif, quand vous nous confiez votre projet c'est d'en fait la vedette aupr\xE8s de vos clients cible. Faitez nous confiance pour votre prochain projet ou celui que vous avez en tete.",
    format: "deflaut",
    extraclass: "font-normal text-center text-lg opacity-80"
  }, null, _parent));
  _push(`<div class="flex md:flex-col gap-2 w-full m-auto border-[1px] md:border-0 border-gray-100 p-1 rounded-full justify-between"><div class="flex justify-center items-center gap-2"><figure><img${ssrRenderAttrs(mergeProps({
    class: "h-16 w-16 rounded-full object-contain",
    src: "",
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/personnel/ceo_alex.jpeg")))}></figure><div class="flex flex-col"><span class="text-lg font-extrabold">Alex kouamelan</span><span class="text-tiny font-light">CEO Chez Dolubux</span></div></div><div class="flex justify-center items-center gap-2"><figure class="order-2"><img${ssrRenderAttrs(mergeProps({
    class: "h-16 w-16 rounded-full object-contain",
    src: "",
    alt: ""
  }, ssrGetDirectiveProps(_ctx, _directive_lazy, "/personnel/cto.jpg")))}></figure><div class="flex flex-col"><span class="text-lg font-extrabold">Emmanuel Diomande</span><span class="text-tiny font-light">CTO Chez Dolubux</span></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/Contacts.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Contacts = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  //...
  components: {
    HeaderSection,
    OnlyDescription
  },
  data() {
    return {
      PricingPay: [
        {
          id: "1",
          custom: false,
          type: "Particulier",
          describle: "Le bon plan, pour cibler les personnes int\xE9ress\xE9es par vos produits.",
          price: "",
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
              rule: "Choix de l'heberger"
            },
            {
              rule: "Hebergement Mutialiser - V5"
            },
            {
              rule: "Certificat SSL - S\xE9curiser"
            },
            { rule: "Mise \xE0 jour - Fonctionnalit\xE9" },
            { rule: "Maintenabilit\xE9 - Site Web" },
            { rule: "Email Professionnel - WebMailing" },
            { rule: "Tracage des bugs" }
          ]
        },
        {
          id: "2",
          type: "Business",
          custom: true,
          describle: "Sans aucune limite, pour faire \xE9voluer les performances de votre business.",
          price: "",
          evalue: "",
          preview: "Pour concevoir une application m\xE9morable qui surpassera vos attentes.",
          textColor: "text-yellow-300",
          // bgColor: 'bg-yellow-100',
          btnColor: "bg-yellow-300",
          intenion: "Commencez Maintement",
          spn: `

            `,
          links: "",
          advantage: [
            {
              rule: "Choix de l'heberger"
            },
            {
              rule: "Hebergement Cloud - V15"
            },
            {
              rule: "Certificat SSL - S\xE9curiser"
            },
            { rule: "Mise \xE0 jour - Fonctionnalit\xE9" },
            { rule: "Maintenabilit\xE9 - Site Web" },
            { rule: "Email Professionnel - WebMailing" },
            { rule: "Tracage des bugs" }
          ],
          spn: `

          `
        },
        {
          id: "10",
          type: "Entreprise",
          custom: true,
          describle: "Pour les entreprises, qui on la pleine connaissance de leurs business",
          price: "",
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
              rule: "Choix de l'heberger"
            },
            {
              rule: "Hebergement D\xE9di\xE9 - V30"
            },
            {
              rule: "Certificat SSL - S\xE9curiser"
            },
            { rule: "Mise \xE0 jour - Fonctionnalit\xE9" },
            { rule: "Maintenabilit\xE9 - Site Web" },
            { rule: "Email Professionnel - WebMailing" },
            { rule: "Tracage des bugs" }
          ]
        }
      ]
    };
  },
  methods: {
    openModalForm({ bool, custom }) {
      this.$store.commit("modalForm", { bool, custom });
      console.log(this.$store.state.customContactForm);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_section = resolveComponent("header-section");
  const _component_only_description = resolveComponent("only-description");
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="flex flex-col pt-32 md:pt-24 w-full big:w-8/12 m-auto" id="hebergement"><div class="mb-16 md:mb-8">`);
  _push(ssrRenderComponent(_component_header_section, {
    sub: "Hebergeur+",
    title: "Suivis d'h\xE9bergements"
  }, null, _parent));
  _push(`</div><div><div class="grid grid-cols-3 gap-8 md:gap-4 w-10/12 mt-8 m-auto md:grid-cols-1 xl:grid-cols-2 big:w-full"><!--[-->`);
  ssrRenderList($data.PricingPay, (price) => {
    _push(`<div class="${ssrRenderClass([price.bgColor, "flex justify-center items-start border rounded-lg"])}"><div class="w-full md:w-full big:w-11/12 transition duration-500 ease-in-out cursor-pointer p-10 md:px-6 wow animate__animated animate__backInLeft" data-wow-offset="30"><div class="flex flex-col mb-5 items-start"><span class="${ssrRenderClass([price.textColor, "text-3xl md:text-2xl font-extrabold mb-2"])}">${ssrInterpolate(price.type)}</span>`);
    _push(ssrRenderComponent(_component_only_description, {
      title: price.describle,
      format: "small"
    }, null, _parent));
    _push(`</div><div class="mt-4 mb-6">`);
    if (price.intenion !== "Bientot Disponsible") {
      _push(`<a href="#contact-nous" class="${ssrRenderClass([price.btnColor, "flex justify-center items-center rounded-lg py-4 text-base text-white"])}">${ssrInterpolate(price.intenion)}</a>`);
    } else {
      _push(`<a class="${ssrRenderClass([price.btnColor, "flex justify-center items-center rounded-lg py-4 text-white text-base font-light"])}">${ssrInterpolate(price.intenion)}</a>`);
    }
    _push(`</div><div class="flex-col gap-y-1 mb-8 hidden"><!--[-->`);
    ssrRenderList(price.advantage, (rules) => {
      _push(`<div class="grid grid-cols-wx gap-1"><div style="${ssrRenderStyle({ "width": "16px", "height": "16px" })}" class="${ssrRenderClass([price.btnColor, "inline-flex justify-center items-center rounded-full relative top-1"])}"><span style="${ssrRenderStyle({ "width": "5px", "height": "5px" })}" class="inline-flex rounded-full bg-white"></span></div><span class="text-tiny font-light opacity-80">${ssrInterpolate(rules.rule)}</span></div>`);
    });
    _push(`<!--]--></div><div class="text-sm text-center font-ligth opacity-80">${ssrInterpolate(price.spn)}</div></div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/Hebergements.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Hebergements = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  //...
  components: {
    HeaderSection,
    OnlyDescription
  },
  data() {
    return {
      catalogueMenu: [
        {
          id: 0,
          name: "Site Web",
          ref: "sw",
          active: true,
          icon: "/catalogues/web.png"
        },
        {
          id: 1,
          name: "Application Mobile",
          ref: "am",
          active: false,
          icon: "/catalogues/phone.png"
        },
        {
          id: 2,
          name: "E-commerce",
          ref: "bq",
          active: false,
          icon: "/catalogues/bq.png"
        },
        {
          id: 3,
          name: "Formations",
          ref: "fm",
          active: false,
          icon: "/catalogues/dlx-student.svg"
        }
      ],
      filterProducts: "sw",
      catalogues: [
        {
          id: "3",
          image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.futura-sciences.com%2Fbuildsv6%2Fimages%2Fwide1920%2F6%2F0%2F7%2F6075cf7578_50173490_e-shop.jpg&f=1&nofb=1",
          title: "Cr\xE9ez un site e-commerce",
          label: "Site Web",
          price: "A partir 500.000",
          type: "bq",
          describle: "Nous vous proposerons des th\xE8mes de qualit\xE9 sup\xE9rieur que nous pouvons mettre en place pour vous. contactez-nous et ensemble nous trouverons la meilleure solution adapt\xE9e \xE0 votre projet e-commerce. Faite nous confiance, nous le m\xE8nerons \xE0 bien et dans les d\xE9lais."
        },
        {
          id: "1",
          image: "/catalogues/e-commerce-single.jpg",
          title: "Cr\xE9ez une Boutique en ligne",
          label: "Site Boutique",
          price: "225.000",
          type: "bq",
          describle: "Wahoo! devenez proprietaire de votre boutique en linge, afin de faire grandir votre business. entendez d\xE8s maintenant votre r\xE9seau d'influence et votre cr\xE9dibilit\xE9 sur le net aupr\xE8s de vos clients."
        },
        {
          id: "8",
          image: " /catalogues/e-commerce-unique.png",
          title: "Site e-commence & App Mobile",
          label: "Site E-commerce",
          price: "1.100.000",
          type: "bq",
          describle: "Wahoo! devenez proprietaire de votre boutique en linge, afin de faire grandir votre business. entendez d\xE8s maintenant votre r\xE9seau d'influence et votre cr\xE9dibilit\xE9 sur le net aupr\xE8s de vos clients."
        },
        {
          id: "3",
          image: "/catalogues/sit-web-app.png",
          title: "Cr\xE9ez une application web",
          label: "Site Web",
          price: "A partir 400.000",
          type: "sw",
          describle: "Pour tous vos projets de cr\xE9ation d'avance... contactez-nous et ensemble nous trouverons la meilleure solution adapt\xE9e \xE0 votre projet. Faite nous confiance, nous le m\xE8nerons \xE0 bien et dans les d\xE9lais."
        },
        {
          id: "3",
          image: "/catalogues/sit-landing.jpg",
          title: "Cr\xE9ez une Landing Page",
          label: "Site Web",
          price: "120.000",
          type: "sw",
          describle: "Faite la promotion de vos produits, services et autres. Gr\xE2ce \xE0 une landing Page vous pouriez attiendre ou meme toucher des millons de personne intersse."
        },
        {
          id: "3",
          image: "/catalogues/sit-web-pro.png",
          title: "Cr\xE9ez un site web Professionnel",
          label: "Site Web",
          price: "200.000",
          type: "sw",
          describle: "Vous \xEAtre une entreprise, un startup ou un ind\xE9pendant. Et vous aimerez augmenter la visibilit\xE9, de votre entreprise, de vos produits et service sur le net ! ceci est pour vous ! Commencez d\xE8s aujourd'huit"
        },
        // Application Mobile
        {
          id: "5",
          image: "/catalogues/am-android.png",
          title: "Cr\xE9ez une application Android & IOS",
          label: "Application Mobile",
          price: "A partir 800.000 ",
          type: "am",
          describle: "Vous avez un \xE9v\xE8nement \xE0 promouvoir, une conf\xE9rence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut."
        },
        {
          id: "5",
          image: "/catalogues/am-android-ios.png",
          title: "Cr\xE9ez une web app (PWA)",
          label: "Application Mobile",
          price: "350.000 ",
          type: "am",
          describle: "Vous avez un \xE9v\xE8nement \xE0 promouvoir, une conf\xE9rence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut."
        },
        {
          id: "5",
          image: "/catalogues/am-ios.png",
          title: "Cr\xE9ez une application sur messure",
          label: "Application Mobile",
          price: "(SUR MESURE)",
          type: "am",
          describle: "Vous avez un \xE9v\xE8nement \xE0 promouvoir, une conf\xE9rence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut."
        },
        // Formations
        {
          id: "5",
          image: "/catalogues/fm-bureautique.jpg",
          title: "Formation bureautique",
          label: "Application Mobile",
          price: "(Disponible)",
          type: "fm",
          describle: "Vous avez un \xE9v\xE8nement \xE0 promouvoir, une conf\xE9rence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut."
        },
        {
          id: "5",
          image: "/catalogues/fm-dev.jpg",
          title: "D\xE9veloppement Web et APP Mobile",
          label: "Application Mobile",
          price: "(Disponible)",
          type: "fm",
          describle: "Vous avez un \xE9v\xE8nement \xE0 promouvoir, une conf\xE9rence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut."
        },
        {
          id: "5",
          image: "/catalogues/fm-infographie.jpg",
          title: "Formation Infographie",
          label: "Application Mobile",
          price: "(Disponible)",
          type: "fm",
          describle: "Vous avez un \xE9v\xE8nement \xE0 promouvoir, une conf\xE9rence, une croissance et bien autre. Et vous aimerez toucher le plus de monde possible - un spot publicitaire est bien ce qu'il vous faut."
        }
      ]
    };
  },
  computed: {
    get_wa_dataContacts() {
      return process.env.DOLUBUX_WHATSAPP;
    }
  },
  mounted() {
  },
  methods: {
    openModalForm({ bool, custom }) {
      this.$store.commit("modalForm", { bool, custom });
      console.log(this.$store.state.customContactForm);
    },
    fliterProductsByCatalogue(reference) {
      this.filterProducts = reference;
    },
    activeLinksInCatalogueMenu(linksHasActived) {
      for (let i = 0; i < this.catalogueMenu.length; i++) {
        const el = this.catalogueMenu[i];
        el.active = false;
        this.catalogueMenu[linksHasActived].active = true;
        this.fliterProductsByCatalogue(
          this.catalogueMenu[linksHasActived].ref
        );
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_section = resolveComponent("header-section");
  const _component_only_description = resolveComponent("only-description");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="flex flex-col pt-32 md:pt-24 w-full big:w-8/12 m-auto" id="catalogues"><div class="mb-16 md:mb-8">`);
  _push(ssrRenderComponent(_component_header_section, {
    sub: "Catalogues",
    title: "Notre Catalogues"
  }, null, _parent));
  _push(`</div><div class="grid grid-cols-4 w-10/12 m-auto lg:w-10/12"><!--[-->`);
  ssrRenderList($data.catalogueMenu, (menu) => {
    _push(`<div class="${ssrRenderClass([[
      menu.active === true ? "border-b-2 border-blue-500 text-gray-700 " : ""
    ], "flex justify-center items-center border-b-2 py-4 text-center cursor-pointer gap-2 min-w-max"])}"><img${ssrRenderAttrs(mergeProps({
      class: "h-8",
      alt: ""
    }, ssrGetDirectiveProps(_ctx, _directive_lazy, menu.icon)))}><span class="md:text-sm text-lg font-bold md:hidden">${ssrInterpolate(menu.name)}</span></div>`);
  });
  _push(`<!--]--></div><div class=""><div class="grid grid-cols-3 gap-8 md:gap-4 w-10/12 mt-8 m-auto md:grid-cols-1 xl:grid-cols-2 big:w-full wow animate__animated animate__backInLeft transition duration-500 ease-in-out"><!--[-->`);
  ssrRenderList($data.catalogues, (catalogue) => {
    _push(`<div style="${ssrRenderStyle($data.filterProducts === catalogue.type ? null : { display: "none" })}" class="relative flex flex-col gap-2 ring-[1px] ring-gray-50 p-4 rounded-md cursor-pointer"><div class="w-full"><img${ssrRenderAttrs(mergeProps({
      class: "rounded-md w-full h-[220px] md:h-[180px] object-cover object-top",
      src: "",
      alt: ""
    }, ssrGetDirectiveProps(_ctx, _directive_lazy, catalogue.image)))}></div><div class="flex flex-col"><div class="flex justify-between mt-1"><span class="text-lg font-bold mr-2 w-full">${ssrInterpolate(catalogue.title)}</span></div><span class="text-xl mt-2">${ssrInterpolate(catalogue.price)} CFA </span>`);
    _push(ssrRenderComponent(_component_only_description, {
      title: catalogue.describle,
      extraclass: "mt-3 hidden",
      format: "small"
    }, null, _parent));
    _push(`</div><div class="py-2 flex flex-col"><span class="text-base font-extralight">Contactez-nous :</span><div class="flex items-center gap-2"><a target="_blank" href="mailto:info.dolubux.com" class="border-[1px] px-4 py-3"><span class="text-base text-blue-500 font-extrabold">Par Mail</span></a> Ou <a target="_blank"${ssrRenderAttr("href", $options.get_wa_dataContacts)} class="border-[1px] px-4 py-3"><span class="text-base text-blue-500 font-extrabold">Sur WhatsApp</span></a></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/Catalogues.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Catalogues = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  head: {
    title: "Accueil - Dolubux",
    meta: [
      { hid: "og:title", property: "og:title", content: "Dolubux" },
      {
        hid: "og:description",
        property: "og:description",
        content: "Dolubux est le partenaire pour mener \xE0 bien votre projet de conception et vous aider \xE0 d\xE9marrer ou \xE0 faire \xE9voluer les performances de votre commerce, entreprise ou PME sur Internet. Chez Dolubux, nous faisons des applications web et mobiles professionnels , mais notre sp\xE9cialit\xE9 est de faire sonner votre t\xE9l\xE9phone d\u2019affaires afin de g\xE9n\xE9rer de nombreux leads de qualit\xE9."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://dolubux.vercel.app/logo/LogoDlx.png"
      }
    ]
  },
  components: {
    Process,
    Benefits,
    Functionality,
    Contacts,
    Hebergements,
    Banner,
    Catalogues
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_banner = resolveComponent("banner");
  const _component_process = resolveComponent("process");
  const _component_benefits = resolveComponent("benefits");
  const _component_catalogues = resolveComponent("catalogues");
  const _component_contacts = resolveComponent("contacts");
  _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "width": "100vw", "height": "100vh" })}" class="fixed"></div><div class="big:mx-auto relative"><div class="z-50">`);
  _push(ssrRenderComponent(_component_banner, null, null, _parent));
  _push(ssrRenderComponent(_component_process, null, null, _parent));
  _push(ssrRenderComponent(_component_benefits, null, null, _parent));
  _push(ssrRenderComponent(_component_catalogues, null, null, _parent));
  _push(ssrRenderComponent(_component_contacts, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BTrLlhER.mjs.map
