import './public-path';
import { createApp } from 'vue'
import App from './App.vue'
import { staticRoutes, asyncRoutes } from './router'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'

let router = null
let instance = null
let history = null

// 渲染函数
function render(props = {}) {
  const { container, customRoutes } = props;
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/app1/' : '/')

  const filterRoutes = asyncRoutes && customRoutes && asyncRoutes.filter((route) => customRoutes.some((customRoute) => route.name.includes(customRoute)))

  router = createRouter({
    history,
    routes: [
      ...staticRoutes,
      ...filterRoutes
    ]
  })
  instance = createApp(App)
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

  props.onGlobalStateChange((cur, prev) => {
    console.log('app1 onGlobalStateChange: ', cur, prev);
  });

  render(props);
}
export async function unmount() {
  console.log("[vue] vue app unmount");
  instance.$.appContext.app.unmount()
  instance = null;
  router = null;
  history.destroy();
}
