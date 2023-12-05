<template>
  <table>
    <tr>
      <!--믹스인 함수 불러온것 main.js에 전역으로 등록되어있음 -->
      {{
        $dateFormat("2023/12/05", "yyyy-MM-dd")
      }}
    </tr>
    <tr>
      <th>제목</th>
      <td>{{ title }}</td>
      <th>조회수</th>
      <td>{{ readInfo }}</td>
      <!--얘 조회수를 부모한테 넘겨서 디비 수정하게 -->
    </tr>

    <tr>
      <th>작성자</th>
      <td>{{ writer }}</td>
      <th>작성일자</th>
      <td>{{ date }}</td>
    </tr>

    <tr>
      <th>내용</th>
      <td>{{ content }}</td>
    </tr>

    <tr>
      <button @click="updateInfo">업데이트</button>
    </tr>
  </table>
</template>

<script>
//import AppMixin from "../mixin.js";

export default {
  //컴포넌트 개별적으로 믹스인 기능 추
  //mixins: [AppMixin], //공통적으로 정의도ㅣ어있는 함수를.. , 여러개의 믹스인파일을 등록하는것도 가능.

  //자식은 여기 값 수정 못함
  //props: ["title", "count", "writer", "date", "content"],
  //유효성 체크해야한다면..  객체형태로 정의 //맞지않아도 출력은되는데 콘솔에 에러뜸
  props: {
    title: String, //무슨 타입이여한다고 정의
    count: {
      type: Number, //타입뿐만아니라 디폴트 값도 정해야한다면 객체타입으로 또또ㅗㅗ또 정의
      default: 0,
    },
    writer: {
      type: [String, Object], //타입이 두가지가 허용이 될 경우  배열로 정의
      default: function () {
        return { first: "ad", second: "ian" };
      },
    },
    date: {
      required: true, //무조건 넘어와야하는 값, 부모에게 요구하는 값
      validator: function (value) {
        let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/;
        return !(value.match(format) == null); //널이 아니면 된다 value가 우리가 정한 조건이 맞는경우
      },
    },
    content: String,
  }, // 부모로부터 받은 props들
  computed: {
    readInfo() {
      return this.count + 1;
    },
  },
  methods: {
    //(이벤트전달)자식이벤트 부모한테 넘겨주는 코드 여기서 끝나는게 아니라
    updateInfo() {
      //두번째 매개변수로 부모에게 넘길데이터를 전달. "update-info" 라는 이름으로
      this.$emit("update-info", this.readInfo);
    },
  },

  watch: {
    //(데이터전달)특정한 프로퍼티의 변화를 감지해서 변경이 된다면 부모에게 전달해주는거
    readInfo() {
      this.$emit("update-info", this.readInfo);
    },
  },
};
</script>
