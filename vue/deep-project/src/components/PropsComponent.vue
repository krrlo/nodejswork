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
    <!--info 객체 하나를 자식에게 넘김 //  @update-info="handler" v-on:update-info="함수명" 자식으로 부터 받은 이벤트처리-->
    <Ref ref="child" />
    <!--리프의 이름을 child라고 정의 자식 컨포넌트가 가진 속성을 사용하려고 -->
    <button @click="childHandler">부모버튼</button>
    <!-- 자식 컨포넌트에 전달되는 애들 count="10" 이케하면 카운트가 문자열로 인식이 됨 101로 출력됨 -->
  </div>
</template>

<script>
//자식컴포넌트들
import PageTitle from "./PageTitle.vue";
import PageContent from "./PageContent.vue";
import Ref from "./RefComponent.vue"; // <Ref ref="child" />

export default {
  data() {
    return {
      header: "dfdfd",
      info: {
        title: "today is",
        count: 9,
        writer: "ad",
        date: "2022-11-11",
        content: "내용내용", //객체 형태로 바인드 연결.. 내용이 많을때... 자식 컨포넌트에 정의가 되어있어야함   props: ["title", "count", "writer", "date", "content"],매핑됨
      },
    };
  }, //data

  components: { PageTitle, PageContent, Ref }, //자식컴포넌트등록

  methods: {
    handler(value) {
      // @update-info="handler" 자식이벤트가 넘어오면 (업데이트클릭하면) alert창 띄우기
      //value 에는 자식으로부터 넘겨받은 this.readInfo 값이 들어가있음
      alert(value);
    },

    childHandler() {
      //Ref 의 속성들에 접근이 가능하게됨
      //this.$refs.child.content = 100;  //자식 content 프로퍼티를 100으로 조정
      //this.$refs.child.plusCount(); // 부모 버튼으로 자식이가지고있는 pluscount함수 사용가능
      this.$refs.child.$refs.cbtn.click(); //  <button ref="cbtn" @click="plusCount">더하기</button> 접근가능
    },
  },
};
</script>
