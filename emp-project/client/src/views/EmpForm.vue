<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">emp_no</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.emp_no" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">first_name</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.first_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">last_name</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.last_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">gender</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.gender" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">hire_date</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.hire_date" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">from_date</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.from_date" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">salary</th>
          <td class="text-center">
            <input type="number" v-model="empInfo.salary" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">dept_no</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.dept_no" />
          </td>
        </tr>
        <!-- <tr>
          <th class="text-right table-primary">dept_name</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.dept_name" />
          </td>
        </tr> -->
      </table>
    </div>

    <div class="row">
      <button class="btn btn-success" @click="insertinfo">등록</button>
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
      searchNO: "",
      empInfo: {},
    };
  },

  created() {
    this.searchNO = this.$route.query.empNo;
    if (this.searchNO != null) {
      this.getEmpInfo();
    }
  },

  methods: {
    async getEmpInfo() {
      let result = await axios
        .get(`/api/emp/${this.searchNO}`)
        .catch((err) => console.log(err));
      console.log(result);
      this.empInfo = result.data;
    },

    async updateinfo() {
      let data = {
        param: {
          first_name: this.empInfo.first_name,
          last_name: this.empInfo.last_name,
        },
      };

      let result = await axios
        .put(`api/emp/${this.empInfo.emp_no}`, data)
        .catch((err) => console.log(err));

      console.log(result.data);

      if (result.data.changeRow == 0) {
        alert("수정x");
      } else {
        alert("수정ㅇㅇ");
        this.$router.push({ name: "empList" }); //emp리스트로이동
      }
    }, //updateinfo

    async insertinfo() {
      // if (!this.validation()) return;

      let data = {
        param: this.empInfo,
      };

      let result = await axios
        .post("/api/emp", data)
        .catch((err) => console.log(err));

      console.log(result.data);

      if (result.data.affectedRows == 0) {
        alert(`등록x \n메세지 확인하세요\n${result.data.message}`);
      } else {
        alert(`정상적으로 등록되었습니다\nNO.${result.data.insertId}`);
        this.$router.push({ name: "empList" });
      }
    }, //인서트

    // validation() {
    //   if (this.userInfo.user_id == "") {
    //     alert("아이디입력해");
    //     return false;
    //   }

    //   if (this.userInfo.user_pwd == "") {
    //     alert("비번입력");
    //     return false;
    //   }

    //   return true;
    // }, // validation
  },
};
</script>
