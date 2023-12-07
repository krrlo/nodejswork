<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">사원번호</th>
          <td class="text-center">
            <input type="number" v-model="empInfo.emp_no" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.first_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성</th>
          <td class="text-center">
            <input type="text" v-model="empInfo.last_name" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">
            <input type="radio" value="M" v-model="empInfo.gender" /> 남
            <input type="radio" value="F" v-model="empInfo.gender" /> 여
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">입사일자</th>
          <td class="text-center">
            <input type="date" v-model="empInfo.hire_date" />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">급여</th>
          <td class="text-center">
            <input
              type="number"
              min="0"
              v-model="empInfo.salary"
              v-bind:readonly="isUpdated"
            />
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">소속부서</th>
          <td class="text-center">
            <select v-model="empInfo.dept_no" v-bind:disabled="isUpdated">
              <option
                :key="idx"
                v-for="(info, idx) in deptList"
                v-bind:value="info.dept_no"
              >
                {{ info.dept_name }}
              </option>
            </select>
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <!-- 첫번째 -->
      <button class="btn btn-success" @click="saveInfo(searchNo)">저장</button>
      <!-- 두번째 -->
      <!-- <button class="btn btn-success" @click="isUpdated ? empUpdate() : empInsert()">저장</button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isUpdated: false,
      searchNo: "",
      empInfo: {
        emp_no: "",
        first_name: "",
        last_name: "",
        gender: "",
        hire_date: "",
        salary: 0,
        dept_no: "",
      },
      deptList: [],
    };
  },

  created() {
    this.searchNo = this.$route.query.empNo;
    this.getDeptlist(); //수정,등록 공통적으로 동작하도록

    //수정모드인경우
    if (this.searchNo > 0) {
      //무조건 searchNo 자동으로  null undefind 0 다 걸림
      this.getEmpInfo();
      this.isUpdated = true; // 수정모드니까 급여와 소속부서 선택을 막음..
    } else {
      this.empInfo.hire_date = this.getToday(); //등록할때 날짜 고정값으로 설정
    }
  },
  methods: {
    async getEmpInfo() {
      let result = await axios
        .get(`/api/emp/${this.searchNo}`)
        .catch((err) => console.log(err));
      this.empInfo = result.data;
      this.empInfo.hire_date = this.$dateFormat(
        this.empInfo.hire_date,
        "yyyy-MM-dd" //변화작업추가
      );
    },

    //부서정보조회들고와서 셀렉트하려고
    async getDeptlist() {
      let result = await axios
        .get(`/api/dept`)
        .catch((err) => console.log(err));
      this.deptList = result.data;
    },

    getToday() {
      return this.$dateFormat("", "yyyy-MM-dd");
    },
    /* 첫번째 */
    //axios.get   axios.post가 아니라  axios만 호출해서 객체를 만들어서 넘기는 방식
    async saveInfo(no) {
      let info = this.getInfo(no);

      let result = await axios(info);
      if (result.data.affectedRows > 0) {
        alert("정상적으로 처리되었습니다.");
        this.$router.push({ name: "empList" });
      } else {
        alert("정상적으로 처리되지 않았습니다.");
      }
    },
    getInfo(eno) {
      let method = "";
      let url = "";
      let data = null;

      //수정하는경우
      if (eno > 0) {
        method = "put";
        url = `/api/emp/${eno}`;
        data = {
          param: {
            //employees 테이블이 요구하는 애들을 선별해서 넘어가는 데이터를 다시 만들어야함
            first_name: this.empInfo.first_name,
            last_name: this.empInfo.last_name,
            gender: this.empInfo.gender,
            hire_date: this.empInfo.hire_date,
          },
        };
      } else {
        //등록하는경우
        method = "post";
        url = "/api/emp";
        let info = this.empInfo;
        info.from_date = this.empInfo.hire_date; //같은날짜로 처리
        data = {
          param: this.empInfo, //전체 다보내야하니까
        };
      }

      return {
        method,
        data,
        url,
      };
    },
    /* 두번째 */
    //등록
    async empInsert() {
      let info = this.empInfo;
      info.from_date = this.empInfo.hire_date; //프롬데이트가 추가되어야함
      let data = {
        param: this.empInfo,
      };
      let result = await axios.post("/api/emp", data);
      if (result.data.affectedRows > 0) {
        alert("정상적으로 처리되었습니다.");
        this.$router.push({ name: "empList" });
      } else {
        alert("정상적으로 처리되지 않았습니다.");
      }
    },

    //수정
    async empUpdate() {
      let data = {
        param: {
          //필요한거만 골라서 넘기기
          first_name: this.empInfo.first_name,
          last_name: this.empInfo.last_name,
          gender: this.empInfo.gender,
          hire_date: this.empInfo.hire_date,
        },
      };
      let result = await axios.put(`/api/emp/${this.empInfo.emp_no}`, data);
      if (result.data.changedRows > 0) {
        alert("정상적으로 수정되었습니다.");
        this.$router.push({ name: "empList" });
      } else {
        alert("정상적으로 수정되지 않았습니다.");
      }
    },
  },
};
</script>
