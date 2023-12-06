//store.js  중앙 저장소.  컨포넌트끼리의 관계에 상관없이 접근해서 데이터 사용가능
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"; //store 새로고침해도 날라가는거 방지

const store = createStore({
  state() {
    //data형태로 사용가능  데이터들을 등록, 각 컨포넌트가 참조하고자 하는 데이터들 , 컨포넌트가 공유해야하는 데이터들을 store에 정의
    return {
      cart: [
        {
          product_id: 1,
          product_name: "아이폰거치대",
          category: "a",
        },
      ],
      count: 0,
    };
  }, //state
  getters: {
    //computed속성과 비슷, readonly
    cartCount: (state) => {
      return state.cart.length; //연결된 데이터 (state) 의 값에따라 달라짐
    },
  },
  mutations: {
    //state 의 값을 변경, 함수기반으로 데이터 변경
    increment(state) {
      state.count++;
    },
    addProduct(state, info) {
      state.cart.push(info);
    },
  },
  actions: {
    // 매개값 (context , 컴포넌트가 넘기는 데이터)  context >> 얘는 우리가 정의한 reateStore 전체가 넘어옴 , 동시다발적 접근이 가능함
    addProduct(context, info) {
      //mutations에 정의되어있는 함수를 끌고와서
      setTimeout(() => {
        context.commit("addProduct", info);
      }, 1000);
    }, //addProduct
  }, //actions

  plugins: [
    createPersistedState({
      paths: ["cart"], // state 에 정의된 변수 쓰기, 데이터를 선별적으로 저장하고싶다면
    }),
  ],
}); //store

export default store; //main.js에서 import해서 사용   .use(store)로 등록c
// mutations >> 동기식으로 진행. >> 딜레이발생가능성
// actions >> 비동기식으로 진행. >> promise사용해서 update가능  >>storecomponent.vue
