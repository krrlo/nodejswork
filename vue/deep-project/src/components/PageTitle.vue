<template>
  <h2>{{ title }}</h2>
</template>

<script>
//자식컴포넌트가 될... 부모가 넘겨준 타이틀을 출력할거임
export default {
  props: ["title"], //유효성 검사하지 않고 부모로 부터 온 정해진 데이터를 그냥 받겟다  //readonly임
};
</script>
