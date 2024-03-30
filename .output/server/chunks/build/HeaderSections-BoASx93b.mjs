import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    sub: String,
    title: String,
    textColor: String,
    describle: ""
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col relative font-sans w-10/12 big:w-full pb-8 m-auto wow animate__animated animate__fadeInDown" }, _attrs))}><span class="text-8xl lg:text-7xl md:text-6xl lg:text-gray-200 absolute left-0 top-0 w-full m-auto flex justify-end font-extrabold text-gray-100 opacity-80">${ssrInterpolate($props.sub)}</span><div class="flex flex-col"><span id="heading" class="${ssrRenderClass([$props.textColor, "text-5xl md:text-[1.6rem] w-6/12 z-20 relative top-5 text-blue-500 font-black md:w-10/12 xl:w-3/5 big:w-6/12"])}"> /&gt;${ssrInterpolate($props.title)}</span><span class="md:text-sm text-tiny relative top-6 w-3/12">${ssrInterpolate($props.describle)}</span></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/__partiels/Labels/HeaderSections.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { HeaderSection as H };
//# sourceMappingURL=HeaderSections-BoASx93b.mjs.map
