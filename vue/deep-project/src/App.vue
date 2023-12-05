<template>
  <div>
    <input type="text" v-model.lazy="selected" v-focus="isFocused" />
    <!--선택된 컨포넌트가 열림  // v-focus라는 디렉티브를 생성함 main.js에 -->
    <component v-bind:is="selected"></component>
  </div>
</template>

<script>
//자식컨포넌트 1205집
import PropsCom from "./components/PropsComponent.vue";
import SloatCom from "./components/TextModal.vue";
import Composition from "./components/CompositionInterface.vue";
import Store from "./components/StoreComponent.vue";

export default {
  name: "app",
  data() {
    return {
      selected: "PropsCom",
      isFocused: false, //true 이면 변경
    };
  },

  components: {
    //자식으로 추가하고
    PropsCom, // 'PropsCom' : {}  문자열을
    SloatCom,
    Composition,
    Store,
  },
};

//SloatCom 얘를 인풋박스에 넣으면selected에 들어가고   <component v-bind:is="SloatCom">
// <component v-bind:is="selected"></component> 동적으로 컨포넌트가 변환되어야할때 사용
//is라는 속성**으로 내가 들고있는 컨포넌트 중에서 어떤 컨포넌트를 출력할지 알려줘야함
</script>
