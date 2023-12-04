const { defineConfig } = require("@vue/cli-service");
const target = "http://localhost:3000"; //노드 서버의 오리진내가 받아올 서버 주소
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //컴포넌트 단어설정..?
  devServer: {
    //개발하는동안 적용되는 서버.
    port: 8080,
    proxy: {
      "^/api": {
        //슬러시로 시작하는 모든 경우 프록시 설정을 적용하겠다 // but /절대경로라 다른 서버 이용이안됨// api//특정서버에 있는 기능을 이용한다
        target,
        changeOrigin: true,
        ws: false, //노드 서버에서 웹소켓 설정이 되어있지 않아서 //실시간 동기화 ex)채팅프로그램
        pathRewrite: { "^/api": "/" }, //정규 표현식으로 설정  /api로 시작하는 애들
      },
    },
  },
});
//어떤경우에 오리진을 대체해줄건지  target 을 오리진으로 대체
