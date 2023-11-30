import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'

const routes = [              //r객체단위로 , 라우팅한걸 원하는만큼 추가. 
  {
    path: '/',              //얘가없으면 오류나니까 기본ㅂㅔ이스로 두고 
    name: 'home',
    component: HomeView
  },
  {
    path: '/dataBinding',
    name: 'dataBinding',
    component: DataBinding 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
