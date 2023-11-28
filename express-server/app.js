//라우팅 //경로에 대해서 내가 어떤식으로 대응할지를 정하는것 

const fs =require('fs');
const express = require('express');
const app = express();
//특정 파일의 라우터 객체 가져오기 
const userRouter = require('./user.js');



//정적파일등록  http://localhost:3000/public/flower-purple-lical-blosso.jpg  //라우팅 하지 않아도 파일을 로드시킬수잇음 //express의  미들웨어 모듈인 express.static을 사용 
app.use('/public', express.static('images')); //  images 폴더에 있는 모든 정적 파일을 url로 제공할수 있게됨 

//use를 이용해서 라우터 등록  
app.use('/user' , userRouter);  
//라우터의 전체도메인을 /user 가 모아주는 역할 
//http://localhost:3000/user //user.js안에 있는 내용이 출력 
//default 는 get방식 이라서 회원정보조회는 뜬다..?
//app.use(미들웨어)
//app.use(미들웨어 사용경로, 미들웨어)


//에러 핸들러 등록 (미들웨어: 중간중간 들어오는 함수 요청-응답 사이에서 이루어지는 )  에러에 대한 응답 처리 수행 
app.use(function(err,req,res,next){
res.status(500).json({statusCode:res.statusCode, errMessage:err.errMessage});    //제이슨으로 상태 코드(500)와 실제 에러 메세지를 보냄 

});

//에러처리 // 에러 발생시 next () 함수 사용해서 에러처리 핸들러로 에러를 전달하고  
app.get('/error', (req,res,next)=>{
    next(new Error('process fail, check data ! 에러발생 ㅎㅎ'));
})




//제이슨 데이터를 db화 시키는 중 
const jsonFile =fs.readFileSync('db.json');  //비동기로 움직여야해서 //db.json 파일을 읽어옴 
const jsonData =JSON.parse(jsonFile); //파일형태로 왔으니 다시 제이슨 타입으로 변경 
const getData =(target, where)=>{    //ex  단건조회의 경우 'posts', req.params.id
    let data = jsonData[target];  //객체의 정보가 넘어오면    //[target]은 키값 [post] [comments] [profile]  jsonData[key] = value가 찍히니까 
    if(Array.isArray(data)){            //data가  Array라면 true, 아니라면 false.  //profile은 배열이 아니니까  배열만 돌릴라고 typeof는 배열을 obj로 봄 안됨  배열/obj 구분이 안됨
        let list = data;
        for(let obj of list){    //list배열에있는 obj객체를 하나씩 돌면서 
            if(obj.id == where){                     //select 문이라고 생각 ..?   //where이 없닷면 if문 동작 안하고  원래 list=data 가 동작해서 전체가 나오게 됨 
                data = obj;
            }
        }
        
    }                                    
    return data;
}


// const getData = async()=>{
//   return  await fetch('db.json')
//     .then(res => res.json());
   
// } 라이브서버로 작동하는게 아니라서 fetch 작동불가 


//let db = getData();  //json 데이터가 들어가있음


app.get('/', (req, res)=>{    //앤드포인트, commend (어떤식으로 응답할지 )
   res.send('Server Connect');    //사용자에게 응답을 보냄 
});


///포스트 전체조회
app.get('/posts', (req, res)=>{

let data = getData('posts');
res.json(data);

})

//포스트 단건조회 
app.get('/posts/:id', (req, res)=>{ 
let data = getData('posts', req.params.id)     //req.body (body쪽 정보 가져올때)or req.params  (경로에 붙어오는 값 가져올때)   /posts/:id' 해서 req가 가져올수있는 params에 대해 정의되어있음 
  res.json(data);
})                               //경로에 붙어서 넘어오는 값 


// app.get('/posts',(req, res)=>{
//     res.send(db['posts']);
// });



//커맨츠 2개 

///커맨츠 전체조회
    app.get('/comments', (req, res)=>{   //commets라는 경로가 들어오게 되면 

    let data = getData('comments');           //comments 정보 가져오세요 
    res.json(data);                            //그 정보 출력하세요
    
    })
    
    //커맨츠 단건조회 
    app.get('/comments/:id', (req, res)=>{ 
    let data = getData('comments', req.params.id)      //요청받은 조건을 경로에서 가져올때
      res.json(data);
    })                              
    


//프로필  //객체하나만 반환함 

app.get('/profile', (req, res)=>{

    let data = getData('profile');
    res.json(data);
    
    })

//통신방식 // 동일한 경로라 하더라도 (post, get) 통신방식에따라 구분됨 //동일한 자원은 url 이 같음 
//ex fetch('http://localhost:3000/posts/4'  method: 'put',
//fetch('http://localhost:3000/posts/5',   method:'delete'


//하나의 요청이 들어왔을때  개별적으로 처리할수있게 한
app.route('/emps')  
.get((req,res)=>{     //http://localhost:3000/emps 하면 사원전체조회 실행됨 default get이라서 
    res.send('사원전체조회');
})
.post((req,res)=>{
    res.send('사원등록');
})
.put((req,res)=>{
    res.send('사원수정');
})
.delete((req,res)=>{
    res.send('사원삭제');
})



//서버를 동작시키는 부분 
app.listen(3000, ()=> {
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');   //정상적으로 실행이되었다면 실행되는 콜백함수 
})



//자바vs자바스크립트 비교, 개념적인 부분 정리  교재로.. it관련 뉴스  crud 참고없이 구현  //이분야에 진입ㅎㅏㄱㅔ된 이유, 목적 




