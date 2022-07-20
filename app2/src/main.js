import './public-path';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
let app = null;

// 渲染函数
function render(props = {}) {
  const { container } = props;
  app = createApp(App);
  createApp(App)
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}

/**
 * 独立运行的情况
 */
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * 乾坤运行的情况
 */
export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  console.log("[vue] vue app unmount");
  app.unmount();
}
