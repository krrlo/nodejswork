<template>
  <div>
    <input type="text" v-model="grade" />
    <!--P태그 **자체가 생성되고 사라짐    -->
    <p v-if="grade >= 90">성적 : A</p>
    <p v-else-if="grade >= 80">성적 :b</p>
    <p v-else-if="grade >= 70">성적 :c</p>
    <!--<p></p> 넣으면 오류뜸..-->
    <p v-else>성적 :d</p>
    <hr />
    <input type="checkbox" v-model="chData" /> 선택
    <p v-show="chData">hello</p>
    <!--태그는 무조건 만들어져있음 P태그의 **스타일이 변경   -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      grade: "",
      chData: "",
    };
  },
};
</script>
