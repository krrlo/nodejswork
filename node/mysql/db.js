//db와연결하는 과정  (쿼리문을 실행하는 역할만 )
const mysql = require('mysql');  //모듈 불러오기 
const sql = require('./db/sql.js');  //sql.js파일에서 export한 객체 가져오기 sql문이 작성되어있음  



//트랜잭션이 발생하는 와중에는 디비 접근 불가 
//커밋,롤백으로 끊어줘야함
//커넥션 : 프로그램=db사이의 길  커넥션이 생겨서 sql을 보내면  그제서야 트랜잭션이 발생하는 것 
//커넥션이 더 큰 개념  커넥션은 sql문 보내기전에 미리 길을 생성해놓는것

//디비와의 길을 열기   //npm install dotenv
const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,     //환경변수에 등록이 되는것 
    port : process.env.MYSQL_PORT,
    user : process.env. MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT  //최대몇개의 길  너무 많이 잡아버리면 다른사이트에서 db 접근 못하게됨 . . 적절한 선으로 설정  
});

//실제 실행  //내가 사용하고자하는 쿼리를 전달하고 결과를 반환 
//pool.query('sql문' , '값(조건이있는경우)' , (err,results) => {          //(에러, 쿼리문 실행 결과 )  /'값(조건이있는경우)' =>물음표에 해당하는

//})

//비동기식 promise    //sql[alias=변수] sql객체가 가지고 있는 필드명  변수를 기반으로 동적으로 필드값을 넘겨줌 
const query = async (alias, values)=>{
    return new Promise((resolve, reject)=>{   ///프로미스의 reject resolve 가 바깥에서 처리되는것이 아니라 pool.query 안에서 result resolve 가 처리가됨 
          pool.query(sql[alias] , values , (err, results)=>{     //sql[customerList] 형태로 들어가있음   //앞에 return 없어도됨 프로미스는 리턴구문 필요가없음.  resolve가 있으니까.. 
                if(err){  
                    console.log(err);
                    reject({err});
                }else{
                    resolve(results);  //에러가안났다면 쿼리 실행 결과
                }
         })   //pool                     
    }) //Promise
}

//확인
// const getData = async()=>{
//     console.log(await query('customerList'));
// };

// getData();


module.exports = {
    query
}