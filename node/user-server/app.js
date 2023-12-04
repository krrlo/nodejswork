//실행페이지

require("dotenv").config({ path: "./db/mysql.env" });
const express = require("express");
const app = express();
const mysql = require("./db.js"); //db.js파일 불러옴  쿼리함수 쓰려고

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("3000서버실행중");
});

//전체조회
app.get("/user", async (req, res) => {
  let list = await mysql.query("userList");
  res.send(list);
});

//한건조회
app.get("/user/:user_no", async (req, res) => {
  let data = req.params.user_no;
  let list = await mysql.query("userInfo", data);
  res.send(list[0]); //select 결과는 항상 배열로 넘어옴
});

//등록
app.post("/user", async (req, res) => {
  let data = req.body.param;
  let result = await mysql.query("userInsert", data);
  res.send(result);
});

//업데이트 //배열을 넘김. 값이 두개라서..
app.put("/user/:user_no", async (req, res) => {
  let datas = [req.body.param, req.params.user_no];
  let result = await mysql.query("userUpdate", datas);
  res.send(result);
});

//삭제
app.delete("/user/:user_no", async (req, res) => {
  let data = req.params.user_no;
  let result = await mysql.query("userDelete", data);
  res.send(result);
});
