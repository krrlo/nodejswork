const { add, minus } =  require('./calculator');  // 가장 위에 작성   //같은 레벨(폴더)에 있는 대상을 가져올때 ./가 붙음. 상위 폴더에서는 ../ ..다빼면 설치한 모듈을 불러오는것 
//사용하고자 하는 대상만 따로 가져올수 있음 

console.log(add(10,25));
console.log(minus(25,3));


///내장모듈이라도 require 써서 불러와야함 