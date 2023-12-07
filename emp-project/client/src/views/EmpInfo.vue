<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">emp_no</th>
          <td class="text-center">{{ empInfo.emp_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">first_name</th>
          <td class="text-center">{{ empInfo.first_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">last_name</th>
          <td class="text-center">{{ empInfo.last_name }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">gender</th>
          <td class="text-center">{{ empGender }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">hire_date</th>
          <td class="text-center">
            {{ $dateFormat(empInfo.hire_date, "yyyy년MM월dd일") }}
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">salary</th>
          <td class="text-center">{{ empInfo.salary }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">dept_no</th>
          <td class="text-center">{{ empInfo.dept_no }}</td>
        </tr>
        <tr>
          <th class="text-right table-primary">dept_name</th>
          <td class="text-center">{{ empInfo.dept_name }}</td>
        </tr>
      </table>
    </div>

    <div class="row">
      <button class="btn btn-info" @click="updateInfo(empInfo.emp_no)">
        수정
      </button>
      <router-link to="/empList" class="btn btn-success">목록</router-link>
      <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)">
        삭제
      </button>
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

  computed: {
    empGender() {
      return this.empInfo.gender == "M" ? "남" : "여";
    },
  }, //computed

  created() {
    this.searchNO = this.$route.query.empNo;
    this.getEmpInfo();
  },

  methods: {
    async getEmpInfo() {
      let result = await axios
        .get(`/api/emp/${this.searchNO}`)
        .catch((err) => console.log(err));
      console.log(result);
      this.empInfo = result.data;
    },

    async deleteInfo(no) {
      let data = {
        param: {
          to_date: "2023-12-07",
        },
      };
      let result = await axios
        .delete(`/api/emp/${no}`, { data: data }) //얼럿띄워서 입력받기
        .catch((err) => console.log(err));
      console.log(result.data);
      let count = result.data.affectedRows;
      if (count == 0) {
        alert("정상적으로 삭제x");
      } else {
        alert("정상적으로 ㅇ");
        this.$router.push({ name: "empList" }); //path: "/userInfo",  //목록으로 페이지가 바뀌어야 하니까 router호출
      }
    },

    updateInfo(no) {
      this.$router.push({ path: "/empFormView", query: { empNo: no } });
    },
  }, //메소드
}; //export
</script>
