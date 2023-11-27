const fs = require('fs');

const data = 'hello, world';


fs.writeFileSync('./sample.txt', data, 'utf8'); //동기식으로 //파일 작성  >> 파일 작성이 완료가 됨  //인코딩 기준 같아야함 'utf8'

// fs.writeFile('./sample.txt', data, 'utf8', (err) =>{
//     if(err){
//         throw err;
//     }
//     console.log('파일쓰기완료')

// })

fs.readFile('./sample.txt', 'utf8', (err, data) =>{    //비동기 파일 읽기   //인코딩 기준 같아야함 'utf8'
    if(err){
        throw err;
    }
    console.log(data);  //작성된 ./sample.txt'에 있는 데이터를 읽음 
});

