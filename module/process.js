
//import process from "process"; 
const process = require('process');
console.log(process.env.ALLUSERSPROFILE);  //사용자 환경을 포함하는 객체를 반환 // 환경변수를 확인하고 싶다면   //변수 자체를 호출하면됨 


const os = require('os');  //값을 함수로 호출함 
console.log(os.cpus()); //cpu코어 정보 
console.log(os.tmpdir()); //임시 저장경로확인 



