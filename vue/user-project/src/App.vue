<template>
  <div>
    <Header />
    <!--하나의 태그처럼 자식요소를 사용함 -->
    <router-view />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue"; //라우터안에없으니까

export default {
  //자식 컴포넌츠들 등록 객체 형태로 등록 /  //부모 컴포넌트 안에서 하나의 태그로 인식함
  components: {
    Header, //변수가 값이면서 키값이 되니까
  },
};
</script>
