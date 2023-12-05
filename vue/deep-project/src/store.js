//store.js
import { createStore } from "vuex";

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
    cartCount: (state) => {
      //computed속성과 비슷,
      return state.cart.length; //연결된 데이터 (state) 의 값에따라 달라짐
    },
  },
  mutations: {
    //함수기반으로 데이터 변경
    increment(state) {
      state.count++;
    },
    addProduct(state, info) {
      state.cart.push(info);
    },
  },
  //   actions: {
  //     // 매개값 (state,컴포넌트가 넘기는 데이터)
  //     addProduct(state, info) {},
  //   },
}); //store

export default store; //main.js에서 import해서 사용   .use(store)로 등록
// mutations >> 동기식으로 진행. >> 딜레이발생가능성
// actions >> 비동기식으로 진행. >> promise사용해서 update가능  >>storecomponent.vue
