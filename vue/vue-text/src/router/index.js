import { createRouter, createWebHistory } from 'vue-router'  //라우터 두개를 불러옴 
import HomeView from '../views/HomeView.vue'

const routes = [                         //필요한만큼 추가  
  {
    path: '/',                //해당컨포넌트를 불러오는경로  http://localhost:8080/ 
    name: 'home',             
    component: HomeView    //어떤 컨포넌트가 동작할건지 
  },
  { 
    path: '/about',           //해당컨포넌트를 불러오는경로  http://localhost:8080/about
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.           //임포트쓰면 관련 코드 다끌려옴 //어바웃페이지관련 리소스가 자동으로 다운로드 됨 
    //처음엔 다운로드하지않고. 경로를 호출하는 순간 필요한 컨포넌트 정보를 들고오도록 지시 
    // lazy-loaded 당장 필요하지 않으니까. prefetch(미래에 사용될수있는 리소스를 캐시에 저장)>> 디폴트로 설정되어있음 >> lazy-loaded는 이 디폴트값을 배제시킴 
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')   //필요할때 컨포넌트 불러오는 작업 
    ///* webpackChunkName: "about" */ >>다이나믹 임포트 문   #magic-comments 라고 함.  모듈 임포트를 할때 특정한 조건을 주는 작업  
    ///> webpackChunkName: about  //webpack 은  webpackChunkName: about을 안합치고  따로 분리시킴 당장 필요한건 아니니까. 
    /// /* webpackPrefetch: true */ ..해당 컨포넌트에 적용해달라......
  }
]

const router = createRouter({    //라우팅 목록 
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

