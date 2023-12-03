<template>
  <div>
    <button type="button" v-on:click="increaseCount">add1</button>
    <!--이벤트객체가 자동으로 넘어감 -->
    <input v-model.number="num" />
    <!--숫자 입력받음  -->
    <button type="button" @click="setCount(num, $event), msg('ㅇㅇ')">
      add7
    </button>
    <!-- 한번클릭하면 두개의 함수가 각각 실행 -->
    <!--이벤트객체가 자동으로 안넘어감 이벤트 객체를 또 넘겨야한다면 명시적으로 적어줘야함  동적으로 값을 줄수있음  -->
    <p>the counter is : {{ counter }}</p>
    <hr />

    <!--중첩해서-->
    <form @click.self="msg('form 이벤트발생..')">
      Form
      <div @click="msg('div 이벤트발생..')">
        Div
        <p @click.stop="msg('p에서이벤트발생')">
          <!--prevent하면 주소로 이동안함 a태그 이벤트으 ㅣ 원래 속성을 제어함 -->
          p
          <a @click.prevent.stop="msg('a')" href="http://www.naver.com"
            >네이버..</a
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      num: 7,
    };
  },

  methods: {
    increaseCount(e) {
      //이벤트객체가 자동으로 넘어옴
      console.log(e);
      this.counter++;
    },
    setCount(num, event) {
      //이벤트객체를 명시해줘야 넘어감
      console.log("setcount의 이벤트는?", event);
      this.counter = this.counter + num;
    },
    msg(msg) {
      alert(`${msg} 선택`);
    },
  },
};
</script>

<style scoped>
form,
form * {
  margin: 10px;
  border: 1px solid navy;
}
</style>
