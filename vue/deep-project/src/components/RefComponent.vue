<template>
  <div>
    <input type="text" v-model.number="content" />
    <p>{{ content }}</p>
    <!-- <button @click="plusCount">더하기</button> -->
    <button ref="cbtn" @click="plusCount">자식의 더하기</button>
    <!--태그에 이름을 부여해서 강제로 이벤트를 발생하게끔  쿼리셀렉터안써도..-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    plusCount() {
      if (typeof this.content == "number") {
        let sum = Number(this.content) + 100;
        this.content = sum;
      } else {
        alert("데이터 숫자아님");
      }
    },
  }, //메소드
};
</script>
