const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  outputDir: "docs",
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("vue-i18n", "vue-i18n/dist/vue-i18n.cjs.js");
    config.plugin("html").tap((args) => {
      args[0].title = "Yanan Wang's Homepage";
      return args;
    });
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: "sass",
          }),
        ],
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/assets/style/element/index.scss" as *;`,
      },
    },
  },
});
