//메인실행페이지

require('dotenv').config({ path: './db/mysql.env'}) //모듈, 메소드 //메인에서 실행 환경변수파일e  //db.js끌고왔으니까 알려주기 
const express = require('express');
const app = express();
const mysql = require('./db.js');  //db.js에서 export한   query(함수)

//미들웨어등록  //데이터 용량 제한 하는 
app.use(express.json({  //모듈을 설정하지않고 자체적으로 불러온것.. 제이슨파서랑 같은거 
    limit : '50mb'      //익스프레스가 가지고있는 json()
}));


app.listen(3000, ()=>{
    console.log('서버 실행!!!!!!!!!!!!');
});



//rest방식이므로 경로 통일
//전체조회
app.get('/customers' , async (req, res)=>{
    let list = await mysql.query('customerList');   //mysql 은 exports한 query객체 반환  query 는  const query = async (alias, values) 함수를 불러온것   //전체조회이니까 value 필요없음 
    res.send(list);
});

//npm install --save-dev nodemon  으로 감시하기..
//한건등록
app.post('/customers' , async(req, res)=>{   //body안에 데이터가 적혀져서 오니까 바디로 접근
    let data = req.body.param;  //body객체 안에 파람이라는 필드 값 //객체형태면 됨  //json형태로 바디에서 값이 넘어올것임. param이라는 필드에 데이터를 붙힘 ???
    let result = await mysql.query('customerInsert' , data);
    res.send(result);
});


 //바디는 post put에서 사용 
//업데이트. 수정   req.body.param (바디에있는 정보가져오기), req.params.id (경로. 파람즈 기반으로 정보가져오기)
app.put('/customers/:id', async(req, res)=>{
    let datas =[ req.body.param , req.params.id]   //넘겨주는 데이터가 배열이 필요함 // 물음표가 두개이상 사용되기 때문에, 물음표 별로 데이터가 필요함 두개의 값을 하나의 배열로 보내야함 
    //UPDATE customers SET (객체타입)  WHERE id = (값만들어가면됨)`,
    let result = await mysql.query('customerUpdate' , datas);
    res.send(result);
});

app.delete('/customers/:id', async(req, res)=>{
    let data = req.params.id      //'/customers/:((((((id))))))'얘랑 매칭 
    let result = await mysql.query('customerDelete' , data);
    res.send(result);
});   //삭제는 체인지, 인서트 된거가 없으니까 0 

//단건조회

app.get('/customers/:id' , async (req, res)=>{
    let data = req.params.id 
    let list = await mysql.query('customerInfo' , data);
    res.send(list[0]);  // 배열로 넘어오니까 단건조회로 
});


//1129