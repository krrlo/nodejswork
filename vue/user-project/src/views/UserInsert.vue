<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">아이디</th>
          <td class="text-center">
            <input type="text" v-model="userInfo.user_id" />
            <!--객체 내부에 선언 컬럼이름그대로쓰기-->
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
      <button class="btn btn-success" @click="insertinfo">저장</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userInfo: {
        user_id: "",
        user_pwd: "",
        user_name: null,
        user_gender: null,
        user_age: 0,
        join_date: null,
      }, //v-model="userInfo.jion_date" />얘네들이 연결될거임 테이블 컬럼명 그대로쓸것 post맨에서 보내는 형태로 똑같이 만들어야함
    };
  },

  created() {
    this.userInfo.join_date = this.getToday(); // 등록누르면 오늘날짜가 나오게끔..
  },

  methods: {
    //경로, 데이터, 보낼때 필요한 정보 //"PARAM" : this.userInfo이라는 키에 들어가야함
    async insertinfo() {
      if (!this.validation()) return; //false일때 return 실행시키고 싶을테니까   // if(this.validation()) = true 이면  밑에서 실행시키고..라고해도됨

      let data = {
        param: this.userInfo,
      };
      let result = await axios("/api/user", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      })
        //   let result = await axios
        //     .post("/api/user", data)  //axios가 지원하는 기능임

        .catch((err) => console.log(err));

      console.log(result.data);

      if (result.data.insertId == 0) {
        alert(`등록x \n메세지 확인하세요\n${result.data.message}`);
      } else {
        alert(`정상적으로 등록되었습니다\nNO.${result.data.insertId}`);
        this.$router.push({ name: "userList" });
      }
    }, //insertinfo

    getToday() {
      let today = new Date();
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      let day = ("0" + today.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    }, // getToday

    validation() {
      if (this.userInfo.user_id == "") {
        alert("아이디입력해");
        return false;
      }

      if (this.userInfo.user_pwd == "") {
        alert("비번입력");
        return false;
      }

      return true;
    }, // validation
  }, //메소드
};
</script>
