<template>
  <div>
    <h3>{{ title }}</h3>
    <!--안쓰면안됨..-->
    <p>저자 : {{ author.name }}</p>
    <template v-if="isWrited">
      <p :key="idx" v-for="(info, idx) in author.books">
        {{ info }}
      </p>
    </template>
    <p v-else>아직 출간한 책이 없습니다</p>
    <button @click="plusBookInfo">정보업데이트</button>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from "vue";
//data 옵션 담당은 reactive, ref
//computed 옵션은 computed
//watch 옵션은 watch가 담당
//methods 옵션 : 내부에 함수로 선언

const author = reactive({
  // reactive 반응형 데이터를 만들어주는 역할
  //프로퍼티 선언방식  //data () 하는 방식을 .. 이렇게.. 객체타입, 배열타입만 내부에 선언 가능

  name: "john",
  books: ["vue2 -a", "vue3 -b", "vue4 -c"],
});

const title = ref("제목을 입력해주세요"); //단일값은 reactive가 아닌 ref사용 title.value라고 값읽어오기

const isWrited = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});

//감시대상 / 콜백  이전값, 변화된 값 두가지 모두 매개변수로 받을숭 ㅣㅅ음.........
watch(author.books, async (info) => {
  console.log(info[info.length - 1]);
});

const plusBookInfo = () => {
  let info = "Node-js";
  author.books.push(info); //걍 이런게 잇다....................정도
};
</script>
