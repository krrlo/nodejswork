const express = require('express');
const router = express.Router();


//ex) 블로그 메인 하나에 대한  //http://localhost:3000/user/insert
router.get('/', (req,res)=>{   ///http://localhost:3000/user >> 회원정보조회가 뜸 
    res.send('회원정보조회');   //app기반이아니고 

});


router.post('/insert', (req,res)=>{    
    res.send('회원등록');   

});

router.put('/update', (req,res)=>{
    res.send('회원수정');   

});

router.delete('/delete', (req,res)=>{
    res.send('회원삭제');   

});





module.exports = router;   //등록한 라우터 정보를 모듈 형태로 반환 router자체가 객체임   //이 뒤에 코드 들어가면 안됨 