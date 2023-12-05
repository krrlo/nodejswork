<template>
  <Layout>
    <template v-slot:header>
      <h1>팝업제목</h1>
      <!--슬롯을 대체한다 -->
    </template>
    <template v-slot:default>
      <p>팝업컨텐츠1</p>
      <p>팝업컨텐2</p>
    </template>
    <template v-slot:footer>
      <button type="button">닫기</button>
    </template>
  </Layout>
  <!--여는태그 닫는태그 구분 -->
</template>
<script>
import Layout from "./modalLayout.vue";
export default {
  components: {
    Layout,
  },
};
</script>
