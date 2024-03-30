import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  props: {
    title: String,
    extraclass: String,
    format: String
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: ["font-light font-love_font", [
      $props.format == "deflaut" ? "text-xl md:text-xl font-normal" : $props.format == "small" ? "text-lg" : $props.format == "medium" ? "text-xl" : "",
      $props.extraclass
    ]]
  }, _attrs))}>${ssrInterpolate($props.title)} `);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/__partiels/Texts/OnlyDescription.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OnlyDescription = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: ["title", "color", "extraclass", "size"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: [
      $props.size === "large" ? "text-2xl font-bold mb-4 md:text-2xl" : "",
      $props.size === "middle" ? "text-xl font-bold" : "",
      $props.size === "small" ? "text-lg font-bold" : "",
      $props.extraclass,
      $props.color
    ]
  }, _attrs))}>${ssrInterpolate($props.title)}</span>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/__partiels/Texts/OnlyTextTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OnlyTextTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OnlyDescription as O, OnlyTextTitle as a };
//# sourceMappingURL=OnlyTextTitle-CG6mVEzO.mjs.map
