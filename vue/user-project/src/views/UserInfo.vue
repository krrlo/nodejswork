<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">no</th>
          <td class="text-center">{{ userInfo.user_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">id</th>
          <td class="text-center">{{ userInfo.user_id }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">pw</th>
          <td class="text-center">{{ userInfo.user_pwd }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">name</th>
          <td class="text-center">{{ userInfo.user_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">gender</th>
          <td class="text-center">{{ userGender }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">age</th>
          <td class="text-center">{{ userInfo.user_age }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">date</th>
          <td class="text-center">{{ joinDate }}</td>
        </tr>
      </table>
    </div>

    <div class="row">
      <button class="btn btn-info" @click="updateInfo(userInfo.user_no)">
        수정
      </button>
      <router-link to="/" class="btn btn-success">목록</router-link>
      <button class="btn btn-warning" @click="deleteInfo(userInfo.user_no)">
        삭제
      </button>
      <!--라우터링크와 노상관..-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchNO: "", //라우터가 넘긴 값을 받을 프로퍼티도 필요함
      userInfo: {}, //{user_no: 6, user_id: 'user2', user_pwd:
    };
  },

  computed: {
    //보기에는 함수 처럼 보이지만 프로퍼티로 쓰면됨 {{ userGender }
    userGender() {
      return this.userInfo.user_gender == "M" ? "남" : "여";
    },

    joinDate() {
      let date = new Date(this.userInfo.join_date);
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
  }, //computed

  created() {
    this.searchNO = this.$route.query.userId; //라우터가 보내준 id받아옴 /호출되면서 넘어온 데이터가 들어가있음 //지금실행되고있는 route. 요청을 할때는 router한테 요청. 값을 들고올때는 route
    //path: "/userInfo", query: { userId: id }
    this.getUserInfo();
  },

  methods: {
    async getUserInfo() {
      let result = await axios
        .get(`/api/user/${this.searchNO}`) //app.get("/user/:user_no", async (req, res) =>
        .catch((err) => console.log(err));
      console.log(result);
      this.userInfo = result.data; //데이터만필요하니까.. result= {data: {…}, status: 200, sta....}
    },

    async deleteInfo(userno) {
      let result = await axios
        .delete(`/api/user/${userno}`)
        .catch((err) => console.log(err));
      console.log(result.data);
      let count = result.data.affectedRows;
      if (count == 0) {
        alert("정상적으로 삭제x");
      } else {
        alert("정상적으로 ㅇ");
        this.$router.push({ name: "userList" }); //path: "/userInfo",  //목록으로 페이지가 바뀌어야 하니까 router호출
      }
    },

    updateInfo(no) {
      console.log(no);
      //페이지가 바뀌어야 하니까 router호출
      this.$router.push({ path: "/userUpdate", query: { userId: no } });
      //뷰에 등록된 라우터를 요청하는것 .  //push메소드를 이용해서 호출 // 객체를 기반으로 값이 넘어감 path, //쿼리스트링.
      //키를 userId로 넘김.     "/userInfo">>나중에 라우터에 등록  등록되어있는 라우터에게 요청하는메소드.  어떤 값이 넘어 가야 한다면 쿼리든 파람즈든 데이터를 넘겨줘야함. p
      //라우터를 특정짓는 path name 아무거나 넣어줘도됨
      //name: 라우터로 등록할때 사용한 name속성
      //parmas :rest방식   path 속성 이 '/target/:id 일때 {'id' : 100 ..?}    파람즈/쿼리 두가지 방식............뭔소리고진짜
    },
  }, //메서드
};
</script>
