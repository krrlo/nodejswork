//db와 연결

const mysql = require("mysql"); //모듈 불러오기
const sql = require("./db/sql.js"); // sql.js 파일에서 export 객체 가져오기

//npm install dotenv
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
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
        resolve(results);
      }
    });
  });
};

module.exports = {
  query,
};
