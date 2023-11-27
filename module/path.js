const path = require('path');


console.log('==절대경로');
console.log(__filename);  //파일절대경로 C:\Users\ezueu\git3\nodejswork\module\path.js
console.log(__dirname);  //파일명을 제외한  폴더 상대경로   ==같은결과  C:\Users\ezueu\git3\nodejswork\module
console.log(path.dirname(__filename));   //파일명을 제외한  폴더 상대경로  ==같은결과  C:\Users\ezueu\git3\nodejswork\module   
console.log('실제 파일명 : %s', path.basename(__filename)); //경로의 마지막 부분을 반환 실제 파일명 : path.js
console.log('확장자 : ' , path.extname(__filename));     //확장자 정보 .js

let pathList = process.env.PATH.split(path.delimiter); //   환경변수에 설정된 path 정보를 path.delimiter구분자 이용해서 가져온것  
console.log(path.delimiter, pathList);
console.log('');
console.log(path.sep, pathList[0].split(path.sep));  // 경로 구분자  [ 'C:', 'Python312', 'Scripts', '' ]