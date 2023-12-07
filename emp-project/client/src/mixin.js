export default {
  //main.js에 등록해야함
  methods: {
    $dateFormat(value, format) {
      let today = value == "" ? new Date() : new Date(value);
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

  //   created() {
  //     //공통적으로 진행되는 코드
  //     console.log("컴포넌트생성");
  //   },

  //   mounted() {
  //     //공통적으로 진행되는 코드
  //     console.log("dom에 마운트");
  //   },
};
