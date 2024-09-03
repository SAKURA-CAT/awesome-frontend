import "./public-path.js";
import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

let app;

const render = () => {
  app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount("#app");
};

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log("[vue] standalone running");
  render();
}
// console.log("[vue] vue app created");

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  app.unmount();
  app._container.innerHTML = "";
  app = null;
}
