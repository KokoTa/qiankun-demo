import { registerMicroApps, start, initGlobalState } from 'qiankun';

registerMicroApps([
  {
    name: "app1", // 必选，微应用的名称，微应用之间必须确保唯一。
    entry: "//localhost:7001", // 必选，微应用的入口，需要与微应用的地址保持一致
    container: "#container1", // 必选，微应用的容器节点的选择器或者 Element 实例。
    activeRule: "/app1", // 必选，微应用的激活规则
    props: {
      customRoutes: ['about']
    }
  },
  {
    name: "app2", // 必选，微应用的名称，微应用之间必须确保唯一。
    entry: "//localhost:7002", // 必选，微应用的入口，需要与微应用的地址保持一致
    container: "#container2", // 必选，微应用的容器节点的选择器或者 Element 实例。
    activeRule: "/app2", // 必选，微应用的激活规则
  }
])

const state = {
  customName: 'from main state'
}

/**
 * 父子应用参数传递
 */
const actions = initGlobalState(state)

actions.onGlobalStateChange((cur, prev) => {
  console.log('main onGlobalStateChange: ', cur, prev)
})

// 等待子应用载入后再触发，让子应用能监听到
setTimeout(() => {
  actions.setGlobalState(state)
}, 1000)

// actions.offGlobalStateChange()

start();