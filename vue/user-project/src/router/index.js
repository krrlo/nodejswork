import { createRouter, createWebHistory } from "vue-router";

import UserList from "../views/UserList.vue"; //전체조회
import UserInfo from "../views/UserInfo.vue"; //한건조회
import UserInsert from "../views/UserInsert.vue"; //등록
import UserUpdate from "../views/UserUpdate.vue"; //수정

const routes = [
  {
    path: "/",
    name: "userList",
    component: UserList,
  },

  {
    path: "/userInfo",
    name: "userinfo",
    component: UserInfo,
  },

  {
    path: "/userInsert",
    name: "userInsert",
    component: UserInsert,
  },

  {
    path: "/userUpdate", //(http://localhost:8080/userUpdate/15  "/userUpdate/:id", == 파람즈)
    name: "userUpdate",
    component: UserUpdate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
