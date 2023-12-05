import { createApp } from "vue";
import App from "./App.vue";
import mixin from "./mixin.js"; //mixin import
import store from "./store.js"; //store import

createApp(App)
  .use(store)
  .mixin(mixin)
  .directive("focus", {
    mounted(el, binding, vnode, prevVNode) {
      console.log("mounted", el, binding, vnode, prevVNode);
      if (binding.value) {
        el.focus();
      }
    },
    updated(el, binding, vnode, prevVNode) {
      console.log("updated", el, binding, vnode, prevVNode);
      if (binding.value) {
        //input안에 있는 애 글씨바꾸기
        el.style.color = "red";
        el.focus();
      } else {
        el.style.color = "black";
      }
    },
  }) //.directive
  .mount("#app");
