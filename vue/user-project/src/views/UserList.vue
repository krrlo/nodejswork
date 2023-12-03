<template>
  <div class="container">
    <table class="table">
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
        <tr :key="idx" v-for="(user, idx) in userList">
          <!--userList: [],-->
          <td>{{ user.user_no }}</td>
          <td>{{ user.user_id }}</td>
          <td>{{ user.user_name }}</td>
          <td>{{ user.user_gender }}</td>
          <td>{{ user.join_date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios"; //모듈 불러옴

export default {
  data() {
    return {
      userList: [],
    };
  },

  computed: {
    count() {
      return this.userList.length; //배열의길이
    },
  },

  created() {
    //컴포넌트가 초기화할 데이터 관련 진행  //마운트는 나중에..?  //모든 컨포넌트는 생성될때 초기화 단계를 거침,
    //사용자가 특정화면에 접속했을때 화면에서 제일 먼저 보여줘야 하는 데이터ㅡ 영역은 created에 정의해서 서버로 부터 미리 받아오고.  화면 로딩 이후에 와도 되는 데이터는 mounted 에 정의
    this.getUserList(); //this가 붙어야함
  },

  methods: {
    //디비 데이터 불러오는 함수
    //axios의 결과 객체로 가지고옴 rseult= {data : {} , status : 200} 우리는 data만 가지고올꺼니까
    async getUserList() {
      let result = await axios
        .get("/user") //const target = "http://localhost:3000";라고 지정해줌
        .catch((err) => {
          console.log(err);
        });
      let list = result.data;
      this.userList = list;
    },
  },
};
</script>
