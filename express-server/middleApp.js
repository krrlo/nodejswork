const express = require('express');
const app = express();


//세션 모듈 불러오기 
const session = require('express-session'); 
//cors불러오기
const cors = require('cors');


// application/www-form-urlencoded >>기본 컨텐트 타입  // 클라이언트로부터 받은 여러가지 데이터 유형을 처리하기위해 
const defaultParser = express.urlencoded({extended : false});

//application/json  제이슨 데이터 파싱을 위한 
const jsonParser = express.json();  //바디가가지고있는 text 데이터를 변환해주는 역할 

//미들웨어를 use메서드로 등록 >> 해당 서버가 가지고있는 모드 라우팅에 대해 동일하게 적용됨  
app.use(defaultParser);  



app.post('/info', (req , res)=>{
    res.send('we,' + req.body.name);  //body의 값을 가져와서 출력함 
})


//라우터별로 등록   //중간에 원하는 미들웨어(jsonParse)를 넣을수 있음  경로로 들어와서 핸들러가 동작하기전에 미들웨어가 동작함 

app.post('/message' , jsonParser, (req,res) =>{
        res.send('msg,'+ req.body.message);  //post이기때문에 바디에서 값을 가져오게됨 

})

app.listen(5000, ()=>{
    console.log('서버 실행~~~~');
})



//https://chromewebstore.google.com/detail/boomerang-soap-rest-clien/eipdnjedkpcnlmmdfdkgfpljanehloah?utm_source=app-launcher 크롬에 부메랑추가 해서 출력되는거 확ㅇ니
//https://www.postman.com/downloads/?utm_source=postman-home 설치 

//쿼리스트링,제이슨은 포맷이 다른거지 둘다 text임 

//> 세션 ...   npm install express-session 설치하기 

let sessionSetting = session ({
secret:'secret key',   //암호화할때 쓰는 기본키   //아무 값 주면됨 
resave : false,         //새로 저장하는 부분에서 변경사항이 없어도 다시 저장할건지 말건지를 설정  //불필요하게 업데이트를 진행할필요없으니까 
saveUninitialized: true,  //저장소에 강제로 값을 저장할건지 말건지 
cookie : {                  
    httpOnly :true,         //자바스크립트에서 해당 쿠키 접근못하게. 
    secure : false,          // true면 https에서만 왓다갓다 할수있게 보안 ^^^
    maxAge : 60000          //쿠기 유지기간
}
});

//만들어진 세션 정보를 use로 넣음
app.use(sessionSetting);


//npm install cors  설치하깅 



const corsOptions = {                       //서버측에서 CORS를 허용해놔야함, 
    origin : 'http://192.168.0.16:5500',
    //학원 origin : 'http://192.168.0.36:5500',  //허용할 도메인 설정  니가만든 페이지는아니지만 응답해라..라고 서버에 알려줌 
    optionsSuccessStatus : 200  //레거시.?..??????????????????????????   //node기반으로 expreess로 서버를 1개 연거 (페이지없음) / html파일을 라이브서버로 (페이지만있음) 연 것 
    
}


//등록
app.use(cors(corsOptions));



//요청들어오면 세션자체는 자동생성됨  로그인하는거는 세션을 이용하는거 
//세션정보 확인 


app.get('/', (req, res)=>{
   res.send(req.session);  //요청을하면서req가져오고 req가 가지고있는 세션 정보가 출력이 되어야하기떄문에 이렇게 작성 
});



//세션에 로그인 정보 저장 
app.post('/login', (req, res)=>{
    const { id, pw } = req.body;   
    req.session.user = id;    // req.session.id 라고 쓰면 안됑 
    req.session.pw = pw;
    req.session.save(function(err){  
        if(err) throw err;
        res.redirect('/');   // 정상 작동하면 메인으로 넘어가도록 처리 
    });
});


//세션 삭제 
app.get('/logout', (req, res)=>{
req.session.destroy(); 
res.redirect('/');
});



