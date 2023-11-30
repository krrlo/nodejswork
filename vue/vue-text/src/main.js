import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')  //라우터 설치하면 생겨남. 라우터를 이용해서 페이지 바뀌는거 관리하겠습니다  html <div id="app"></div>
