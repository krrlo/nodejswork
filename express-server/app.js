//라우팅 

const express = require('express');
const app = express();


const getData = async()=>{
  return  await fetch('db.json')
    .then(res => res.json());
   
}



let db = getData();  //json 데이터가 들어가있음


app.get('/', (req, res)=>{    //앤드포인트, commend (어떤식으로 응답할지 )
   res.send('Server Connect');    //사용자에게 응답을 보냄 
});

app.get('/posts',(req, res)=>{
    res.send(db['posts']);
});

///////1127수업완



//서버를 동작시키는 부분 
app.listen(3000, ()=> {
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');   //정상적으로 실행이되었다면 실행되는 콜백함수 
})


