
//REST방식으로 CRUD

//전체조회 (GET)
fetch('http://localhost:3000/posts')
.then(res =>res.json())
.then (data => console.log(data))
.catch(err=> console.log(err));

//단건조회 (GET)
fetch('http://localhost:3000/posts/1')   //조회하고자하는 대상에 대한 정보를 넘겨줌, 물음표를 없앰 / id가 1 
.then(res =>res.json())
.then (data => console.log('info' , data))
.catch(err=> console.log(err));



// //등록(POST)
// fetch('http://localhost:3000/posts' , { 
//     method: 'post',
//     headers : {
//         'content-type' : 'application/json'   //제이슨데이터를 보낼때는 얘로 
//     },
//     body : JSON.stringify({ userId :2, id:5, title : ' gkgkgkgkgk' , body : 'dfdfasdfasdfksdaj;flksjad '})   //객체로 보낼 데이터를 집어넣음 //내가가진 객체를 제이슨 포맷으로 변환시키는거 
// })
// .then(res => res.json())
// .then(result => console.log('insert', result));





//수정(PUT) (단건조회+등록 결합 )/4 (수정대상을 경로에 지정 )//body에는 수정하고자 하는 대상을 
fetch('http://localhost:3000/posts/4' , { 
    method: 'put',
    headers : {
         'content-type' : 'application/json'   //제이슨데이터를 보낼때는 얘로 
     },  
     body : JSON.stringify({ userId :3, title : '수정 gkgkgkgkgk' , body : 'dfdfasdfasdfksdaj;flksjad '})   //객체로 보낼 데이터를 집어넣음 //내가가진 객체를 제이슨 포맷으로 변환시키는거 
 })
 .then(res => res.json())
 .then(result => console.log('update', result));




//삭제(DEL)
fetch('http://localhost:3000/posts/5', {
    method:'delete'
})
.then(res => res.json())
.then(result => console.log('delete', result));
