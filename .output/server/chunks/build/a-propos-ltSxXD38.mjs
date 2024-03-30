import { H as HeaderSection } from './HeaderSections-BoASx93b.mjs';
import { O as OnlyDescription, a as OnlyTextTitle } from './OnlyTextTitle-CG6mVEzO.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = {
  components: {
    HeaderSection,
    OnlyDescription,
    OnlyTextTitle
  },
  data() {
    return {
      ListAbout: [
        {
          id: "0",
          title: "Pourquoi, Nous et personne d'autres?",
          comments: `Dolubux est le partenaire pour mener \xE0 bien votre projet de
                conception et vous aider \xE0 d\xE9marrer ou \xE0 faire \xE9voluer les
                performances de votre commerce, entreprise ou PME sur Internet.
                Chez Dolubux, nous faisons des applications web et mobiles
                professionnels , mais notre sp\xE9cialit\xE9 est de faire sonner votre
                t\xE9l\xE9phone d\u2019affaires afin de g\xE9n\xE9rer de nombreux leads de
                qualit\xE9.`
        },
        {
          id: "2",
          title: "Notre philosohpie D'entreprise...",
          comments: `Chaque entreprise est diff\xE9rente par sa taille, ses
                objectifs et son budget. C\u2019est pourquoi nous ne proposons pas
                une solution calqu\xE9e pour un client, tout au contraire, nous
                proposons que des solutions sur-mesure. Notre savoir-faire se
                met au service de vos besoins dans le respect de votre budget en
                ayant toujours dans le viseur le meilleur rapport/qualit\xE9 prix
                du march\xE9.`
        },
        {
          id: "3",
          title: "Relation Be to Be Avec Nos Clients...",
          comments: `Nous cr\xE9ons avec nos clients, une relation de confiance, afin
           de mieux comprendre-les besoin ou probl\xE9matique lier \xE0 leurs projets,
           pour mettre sur pied une application web o\xF9 mobile adapte \xE0 leurs diff\xE9rents
            besoins et celle de leurs entreprises. Pour ainsi donner \xE0 leurs clients
            ou audience sur le net une exprerience agr\xE9able, unique et inoubliable.
             Chez dolubux nous concevons des applications de qualit\xE9 et de niveau sup\xE9rieur.
              Nous faisons toujours plus, dans le but de vous \xE9merveiller et d'attirer
              un Maximin de clients \xE0 votre business.`
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_header_section = resolveComponent("header-section");
  const _component_only_text_title = resolveComponent("only-text-title");
  const _component_only_description = resolveComponent("only-description");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="py-32 md:py-24 m-auto flex flex-col w-full big:w-8/12" id="a-Propos"><div class="mb-16 md:mb-8">`);
  _push(ssrRenderComponent(_component_header_section, {
    sub: "\xC0 propos",
    title: "En Savoir plus sur Dolubux",
    textColor: ""
  }, null, _parent));
  _push(`</div><div class="flex justify-between gap-16 m-auto w-10/12 big:w-full lg:flex-col animate__animated animate__bounceInLeft"><div class="flex flex-col w-4/12 lg:w-10/12">`);
  _push(ssrRenderComponent(_component_only_text_title, {
    title: "Notre Objectif, Votre Croissance.",
    color: "text-yellow-300 mb-4 ",
    size: "large"
  }, null, _parent));
  _push(ssrRenderComponent(_component_only_description, {
    title: "Notre savoir-faire se met au service de vos besoins dans le respect\n            de votre budget en ayant toujours dans le viseur le meilleur\n            rapport/qualit\xE9 prix du march\xE9.",
    format: "deflaut"
  }, null, _parent));
  _push(`</div><div class="flex flex-col gap-4 w-8/12 lg:w-full"><!--[-->`);
  ssrRenderList($data.ListAbout, (about) => {
    _push(`<div><div class="flex flex-col border-t-2 border-gray-200 p-8 md:p-4"><span class="text-2xl md:text-lg font-semibold text-gray-700">${ssrInterpolate(about.title)}</span>`);
    _push(ssrRenderComponent(_component_only_description, {
      title: about.comments,
      extraclass: "mt-2",
      format: "deflaut"
    }, null, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionPages/Abouts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Abouts = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Abouts
  },
  setup() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Abouts = resolveComponent("Abouts");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Abouts, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/a-propos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aPropos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { aPropos as default };
//# sourceMappingURL=a-propos-ltSxXD38.mjs.map
