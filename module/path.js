const path = require('path');


console.log('==절대경로');
console.log(__filename);  //파일절대경로
console.log(__dirname);  //파일명을 제외한  폴더 상대경로   ==같은결과
console.log(path.dirname(__filename));   //파일명을 제외한  폴더 상대경로  ==같은결과     
console.log('실제 파일명 : %s', path.basename(__filename)); //경로의 마지막 부분을 반환 
console.log('확장자 : ' , path.extname(__filename));     //확장자 정보 

let pathList = process.env.PATH.split(path.delimiter);
console.log(path.delimiter, pathList);
console.log('');
console.log(path.sep, pathList[0].split(path.sep));  //구분자 