//실행되는 서버. server
require("dotenv").config({ path: "./db/mysql.env" }); //환경변수파일
const express = require("express"); //설치된 모듈 불러오기
const app = express();

const mysql = require("./db.js"); //db.js 파일 가져오기

app.use(
  express.json({
    limit: "50mb",
  })
);

//app.use(express.static("dist")); //끌고온 디스트 파일 추가
//절대경로 추후에 추가하기

app.listen(3000, () => {
  console.log("3000서버 실행중ㅇㅇㅇㅇ");
});

//전체조회
app.get("/emp", async (req, res) => {
  let list = await mysql.query("empList");
  res.send(list);
});

//부서 조회
app.get("/dept", async (req, res) => {
  let list = await mysql.query("dept");
  res.send(list);
});

//단건조회
app.get("/emp/:emp_no", async (req, res) => {
  let data = req.params.emp_no;
  let list = await mysql.query("empInfo", data);
  res.send(list[0]); // 배열로 넘어오니까 단건조회로
});

const empT = ["emp_no", "first_name", "last_name", "gender", "hire_date"];
const deptT = ["emp_no", "dept_no", "from_date", "to_date"]; //sql.js 순서 지키기
const salT = ["emp_no", "salary", "from_date", "to_date"];

app.post("/emp", async (req, res) => {
  let empInfo = req.body.param; //전체 파람 들어옴

  ///사원등록
  let empData = {}; //우리가 넘길 빈 객체 set ?  뒤에는 객체가 넘어가야함
  for (let column of empT) {
    //emp테이블의 칼럼을 빼내는데
    let value = empInfo[column]; //1000 = empInfo[emp_no]  전체객체[empT칼럼들]
    if (value == "") continue; //그냥 ,다음꺼로 .. null은 그냥 통과됨 ""공백은 최소한의 체크
    empData[column] = value; // empData[emp_no] = 1000
  }

  //let colum = 'emp_no'
  //let value = empInfo['emp_no]
  //empData['emp_no'] = value

  let result = await mysql.query("empInsert", empData);

  //부서등록//배열 물음표3개
  let deptEmpData = [];
  for (let column of deptT) {
    let value = empInfo[column];
    if (value == "") continue; //공백만 체크하니까
    deptEmpData.push(value);
  }

  result = await mysql.query("deptInsert", deptEmpData);

  //급여등록
  let salData = {};
  for (let column of salT) {
    let value = empInfo[column];
    if (value == "") continue;
    salData[column] = value;
  }

  salData.to_date = "9999-01-01"; //변수에담던지 결과를 돌려주는..?
  result = await mysql.query("salInsert", salData);

  res.send(result); //결과를 돌려주면서 통신을 끝냄
  //res.end(); 보낼거 없으면 통신 끊김
  //"affectedRows": 1 이면 등록
}); //post

//수정
app.put("/emp/:emp_no", async (req, res) => {
  let datas = [req.body.param, req.params.emp_no]; //배열을 보냄. 물음표가 2개
  let result = await mysql.query("empUpdate", datas);
  res.send(result);
});

//삭제 //삭제는 원래 body 부분이 없음 express는 body부분이 있음
app.delete("/emp/:emp_no", async (req, res) => {
  let datas = [req.body.param.to_date, req.params.emp_no]; //배열을 보냄. 물음표가 2개
  let result = await mysql.query("empDelete", datas);
  res.send(result);
});
