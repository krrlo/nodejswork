import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import ListBinding from "../views/ListBinding.vue";
import IFBinding from "../views/IFBinding.vue";
import OnEvent from "../views/OnEvent.vue";
import Options from "../views/Options.vue";
const routes = [
  //r객체단위로 , 라우팅한걸 원하는만큼 추가.
  {
    path: "/", //얘가없으면 오류나니까 기본ㅂㅔ이스로 두고
    name: "home",
    component: HomeView,
  },
  {
    path: "/dataBinding",
    name: "dataBinding",
    component: DataBinding,
  },
  {
    path: "/ListBinding",
    name: "ListBinding",
    component: ListBinding,
  },
  {
    path: "/IFBinding",
    name: "IFBinding",
    component: IFBinding,
  },

  {
    path: "/OnEvent",
    name: "OnEvent",
    component: OnEvent,
  },

  {
    path: "/Options",
    name: "Options",
    component: Options,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
