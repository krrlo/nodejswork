<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">no</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_no" readonly />
            <!--수정하지 못하게 readlony-->
          </td>
        </tr>

        <tr>
          <th class="text-right table-primary">id</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_id" readonly />
            <!--수정하지 못하게 readlony-->
          </td>
        </tr>

        <tr>
          <th class="text-right table-primary">패스워드</th>
          <td class="text-center">
            <input type="password" v-model="userInfo.user_pwd" />
          </td>
        </tr>

        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_name" />
          </td>
        </tr>

        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">
            <input type="radio" value="M" v-model="userInfo.user_gender" /> 남자
            <input type="radio" value="F" v-model="userInfo.user_gender" /> 여자
          </td>
        </tr>

        <tr>
          <th class="text-right table-primary">나이</th>
          <td class="text-center">
            <input type="number" v-model="userInfo.user_age" />
          </td>
        </tr>

        <tr>
          <th class="text-right table-primary">가입일자</th>
          <td class="text-center">
            <input type="date" v-model="userInfo.join_date" />
          </td>
        </tr>
      </table>
    </div>

    <div class="row">
      <button class="btn btn-success" @click="updateinfo">수정</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      searchNO: "", //해당 객체를 불러와야하니까 번호필요
      userInfo: {}, //객체 하나를 다시 만들어서 put 해야하니까
    };
  },

  created() {
    this.searchNO = this.$route.query.userId; //라우터가 보내준 id받아옴 /호출되면서 넘어온 데이터가 들어가있음 //지금실행되고있는 route. 요청을 할때는 router한테 요청. 값을 들고올때는 route
    //path: "/userInfo", query: { userId: id } //페이지가 열리면서 어떤 데이터를 가지고 있는거면
    this.getUserInfo(); //선택된 애가 조회되어서 화면에 나와야 하니까
  },

  methods: {
    //선택된 애가 조회됨
    async getUserInfo() {
      let result = await axios
        .get(`/api/user/${this.searchNO}`) //app.get("/user/:user_no", async (req, res) =>
        .catch((err) => console.log(err));
      this.userInfo = result.data; //을 기준으로 필드값만
      let newDate = this.dateFormat(this.userInfo.join_date);
      this.userInfo.join_date = newDate;
    },

    dateFormat(value) {
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

    //수정된 내용을 다시 put
    async updateinfo() {
      //유효성 제약조건 원래는 해야함
      let data = {
        param: this.userInfo,
      };
      let result = await axios
        .put(`/api/user/${this.userInfo.user_no}`, data) //readonly라고 ㅎㅐ놔서.. 이렇게 써도된대.??
        .catch((err) => console.log(err));

      console.log(result.data);
      if (result.data.changedRows == 0) {
        alert(`수정x \n메세지 확인하세요\n${result.data.message}`);
      } else {
        alert(`정상적으로 수정되었습니다\nNO.${result.data.insertId}`);
        this.$router.push({ name: "userList" });
      }
    },
  }, //메소드
};
</script>
