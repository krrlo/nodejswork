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
          <!--필요한 데이터만 가지고와도됨..-->
          <th>emp_no</th>
          <th>first_name</th>
          <th>last_name</th>
          <!-- <th>gender</th> -->
          <th>hire_date</th>
          <!-- <th>salary</th> -->
          <th>dept_no</th>
          <!-- <th>dept_name</th> -->
        </tr>
      </thead>
      <tbody>
        <tr
          :key="idx"
          v-for="(emp, idx) in empList"
          @click="getEmpInfo(emp.emp_no)"
        >
          <td>{{ emp.emp_no }}</td>
          <td>{{ emp.first_name }}</td>
          <td>{{ emp.last_name }}</td>
          <!-- <td>{{ emp.gender }}</td> -->
          <td>{{ $dateFormat(emp.hire_date, "yyyy년MM월dd일") }}</td>
          <!-- <td>{{ emp.salary }}</td> -->
          <td>{{ emp.dept_no }}</td>
          <!-- <td>{{ emp.dept_name }}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      empList: [],
    };
  },

  computed: {
    count() {
      return this.empList.length;
    },
  },

  created() {
    this.getEmpList();
  },

  methods: {
    async getEmpList() {
      let result = await axios.get("/api/emp").catch((err) => {
        console.log(err);
      });
      console.log(result);
      this.empList = result.data;
    }, //getemplist

    getEmpInfo(no) {
      this.$router.push({ path: "/empInfo", query: { empNo: no } });
    },
  }, //methods
};
</script>
