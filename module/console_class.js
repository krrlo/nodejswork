const fs = require('fs');  //파일 읽기, 쓰기를 할수있는 모듈 객체 가져오기  // 같은 폴더안에 있는 js파일을 표시하는게 아니라면 , 경로 표시하는게 아니라면 내장객체를 끄집어낸다는말  
const { Console } = require('console');   //특정한 Console 클래스를 불러옴   //콘솔 모듈 사용 

const output = fs.createWriteStream('./stdout.log');        //파일 쓰기가 가능하도록 스트림 생성     
const errorOutput = fs.createWriteStream('./stderr.log');   //파일 쓰기가 가능하도록 스트림 생성   

const logger = new Console({ stdout : output, stderr : errorOutput});   //별도의 파일에 log를 남겨놓기 위해서  Console  class 기반의 내장 객체를 사용 
                                                                        //콘솔 객체 생성 
const count = 5;
logger.log('count : %d' , count);   ///stdout.log파일에 5기록 
logger.error('count : ' ,+count);   //stderr.log'파일에 5기록 