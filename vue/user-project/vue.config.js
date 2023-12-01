const { defineConfig } = require("@vue/cli-service");
const target = "http://localhost:3000"; //우리가 가져야하는오리진
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //개발하는동안 적용되는 서버.
    port: 8080,
    proxy: {
      "^/": {
        //슬러시로 시작하는 모든 경우 프록시 설정을 적용하겠다
        target,
        changeOrigin: true,
      },
    },
  },
});
//어떤경우에 오리진을 대체해줄건지  target 을 오리진으로 대체
