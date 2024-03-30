import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: ["title", "bg", "emit", "extraclass"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><a${ssrRenderAttr("href", $props.emit)}><button class="${ssrRenderClass([[
    $props.extraclass,
    $props.bg === true ? "bg-blue-500 ring-4 ring-blue-200" : ""
  ], "wow animate__animated animate__rubberBand font-sans z-50 text-white text-sm font-bold uppercase px-7 py-4 rounded-lg text-center cursor-pointer animate__delay-05s"])}" target="_blank"><span class="text-white text-base font-bold font-sans xs:text-tiny">${ssrInterpolate($props.title)}</span><span class="text-white ml-2">\u27F6</span></button></a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/__partiels/Buttons/OnlyButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OnlyButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OnlyButton as O };
//# sourceMappingURL=OnlyButton-B9XUKSvb.mjs.map
