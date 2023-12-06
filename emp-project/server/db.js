//db와 연결 //server

const mysql = require("mysql"); //mysql과 연결해야하니까 모듈 불러오기
const sql = require("./db/sql.js"); //sql 작성한거파일 가져오기

const pool = mysql.createPool({
  //환경변수에 등록이 되는것
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
  connectionLimit: process.env.MYSQL_LIMIT,
});

const query = async (alias, values) => {
  return new Promise((resolve, reject) => {
    pool.query(sql[alias], values, (err, results) => {
      if (err) {
        console.log(err);
        reject({ err });
      } else {
        resolve(results); //쿼리문 실행 결과가들어있음
      }
    });
  });
};

module.exports = {
  query,
};
