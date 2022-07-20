const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')
const { resolve } = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      /**
       * Webpack 5 会从 package.json name 中自动推断出一个唯一的构建名称，并将其作为 output.uniqueName 的默认值。
       * 由于 package.json 中有唯一的名称，可将 output.jsonpFunction 删除。
       */
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  }
})
