var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, openBlock, createElementBlock } from "vue";
const COMPONENT_PREFIX = "Dm";
const compNameCompetion = (comp) => COMPONENT_PREFIX + comp.name;
const registerComponent = (app, comp) => {
  const name = compNameCompetion(comp);
  const registered = app.component(name);
  if (!registered) {
    app.component(name, comp);
  }
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "dm-button" };
const __default__ = { name: "Button" };
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1);
    };
  }
}));
const DmButton = _sfc_main;
DmButton.install = (app) => {
  registerComponent(app, DmButton);
};
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  DmButton
});
const setup = {
  install(app) {
    Object.keys(components).forEach((key) => {
      const plugin = components[key];
      app.use(plugin);
    });
  }
};
export { DmButton, setup as default };
