<template>
  <div>
    <!--자식 컨포넌트에게 전달되는 데이터들 -->
    <PageTitle title="헬로..안녕..." />
    <!--vind 가 ㅇㅏ니면 그냥 문자열로인식  -->
    <!-- <PageContent
      :title="header"
      v-bind:count="10"
      :writer="['ad']"
      :date="'2022-11-11'"
      :content="{ first: 'node.js', second: 've js' }"
    /> -->
    <PageContent v-bind="info" @update-info="handler" />
    <!-- @update-info="handler"자식이주는 이벤트처리-->
    <Ref ref="child" />
    <!--리프의 이름을 child라고 정의 자식 컨포넌트가 가진 속성을 사용하려고 -->
    <button @click="childHandler">자식 제어중</button>
    <!-- 자식 컨포넌트에 전달되는 애들 count="10" 이케하면 카운트가 문자열로 인식이 됨 101로 출력됨 -->
  </div>
</template>

<script>
import PageTitle from "./PageTitle.vue"; //자식컴포넌트 들고오기
import PageContent from "./PageContent.vue"; //자식컴포넌트 들고오기
import Ref from "./RefComponent.vue";

export default {
  data() {
    return {
      header: "dfdfd",
      info: {
        title: "today is",
        count: 10,
        writer: "ad",
        date: "2022-11-11",
        content: "내용내용", //객체 형태로 바인드 연결.. 내용이 많을때... 자식 컨포넌트에 정의가 되어있어야함   props: ["title", "count", "writer", "date", "content"],매핑됨
      },
    };
  },

  components: { PageTitle, PageContent, Ref }, //자식등록

  methods: {
    handler(value) {
      alert(value);
    },

    childHandler() {
      //Ref 의 속성들에 접근이 가능하게됨
      //this.$refs.child.content = 100;
      //this.$refs.child.plusCount(); 자식의 더하기 안눌러도  자식제어만 눌러도 더하기가 됨..
      this.$refs.child.$refs.cbtn.click(); //  <button ref="cbtn" @click="plusCount">더하기</button> 접근가능
    },
  },
};
</script>
