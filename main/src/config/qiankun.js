import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: "app1", // 必选，微应用的名称，微应用之间必须确保唯一。
    entry: "//localhost:7001", // 必选，微应用的入口，需要与微应用的地址保持一致
    container: "#container", // 必选，微应用的容器节点的选择器或者 Element 实例。
    activeRule: "/app1", // 必选，微应用的激活规则
  },
  {
    name: "app2", // 必选，微应用的名称，微应用之间必须确保唯一。
    entry: "//localhost:7002", // 必选，微应用的入口，需要与微应用的地址保持一致
    container: "#container", // 必选，微应用的容器节点的选择器或者 Element 实例。
    activeRule: "/app2", // 必选，微应用的激活规则
  }
])

start();