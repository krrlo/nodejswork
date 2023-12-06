//모든 컨포넌트가 공통적으로 사용되는 함수들을 모아놓은 곳...

//필요한 모듈이 있는경우 import
//import axios

export default {
  methods: {
    $dateFormat(value, format) {
      let today = new Date(value);
      let year = today.getFullYear();
      let month = ("0" + (today.getMonth() + 1)).slice(-2);
      let day = ("0" + today.getDate()).slice(-2);

      let result = format
        .replace("yyyy", year)
        .replace("MM", month)
        .replace("dd", day);
      return result;
    }, //dateformat
  }, //methods

  created() {
    //공통적으로 진행되는 코드
    console.log("컴포넌트생성");
  },

  mounted() {
    //공통적으로 진행되는 코드
    console.log("dom에 마운트");
  },
};
