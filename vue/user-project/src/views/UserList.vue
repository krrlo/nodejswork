<template>
  <div class="container">
    <table class="table">
      <caption>
        Total:
        {{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>이름</th>
          <th>성별</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="idx"
          v-for="(user, idx) in userList"
          @click="goToUserInfo(user.user_no)"
        >
          <!--이벤트가 실행될때 user_id가 넘어가도록 함 -->
          <!--<tr :key="idx"바인드가 생략된 형태 -->
          <!--userList: [], {{}} 문자열을출력할때  user['user_no'] -->
          <td>{{ user.user_no }}</td>
          <td>{{ user.user_id }}</td>
          <td>{{ user.user_name }}</td>
          <td>{{ user.user_gender }}</td>
          <td>{{ dataFormat(user.join_date) }}</td>
          <!--<td>{{ user.join_date }}</td>-->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios"; //모듈 불러옴/ 개별적으로 쓰는 모듈은 스크립트 안에서 import하면됨

export default {
  data() {
    return {
      userList: [], //초기값 제대로주기
    };
  },

  computed: {
    count() {
      return this.userList.length; //배열의길이 count로 감싸는 형태로
    },
  },

  created() {
    //컴포넌트가 초기화할 데이터 관련 진행  //모든 컨포넌트는 생성될때 초기화 단계를 거침,
    //사용자가 특정화면에 접속했을때 화면에서 제일 먼저 보여줘야 하는 데이터ㅡ 영역은 created에 정의해서 서버로 부터 미리 받아오고.  화면 로딩 이후에 와도 되는 데이터는 mounted 에 정의
    this.getUserList(); //this가 붙어야함
  },

  methods: {
    //디비 데이터 불러오는 함수
    //axios의 결과 객체로 가지고옴 result= {data : [{},{},...] , status : 200} 우리는 data만 가지고올꺼니까
    async getUserList() {
      let result = await axios
        .get("/api/user") //const target = "http://localhost:3000/api/user";라고 지정해줌
        .catch((err) => {
          console.log(err);
        });
      console.log(result);
      let list = result.data;

      this.userList = list; //data userList []에 넣기
    },

    goToUserInfo(id) {
      console.log(id);
      //페이지가 바뀌어야 하니까 router호출
      this.$router.push({ path: "/userInfo", query: { userId: id } }); //push메소드를 이용해서 호출 // 객체를 기반으로 값이 넘어감 path, //쿼리스트링.
      //키를 userId로 넘김.     "/userInfo">>나중에 라우터에 등록  등록되어있는 라우터에게 요청하는메소드.  어떤 값이 넘어 가야 한다면 쿼리든 파람즈든 데이터를 넘겨줘야함.
      //라우터를 특정짓는 path name 아무거나 넣어줘도됨
      //name: 라우터로 등록할때 사용한 name속성
      //parmas :rest방식   path 속성 이 '/target/:id 일때 {'id' : 100 ..?}    파람즈/쿼리 두가지 방식...
    },
    dataFormat(value) {
      let date = new Date(value);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
        month = "0" + month;
      }

      if (day < 10) {
        day = "0" + day;
      }

      return year + "-" + month + "-" + day;
    },
  }, //methods
};
</script>
