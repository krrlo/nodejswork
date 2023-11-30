//함수 선언식  // 함수입장에서 var과 같은 ,  선언만 되어있다면 어디서든 사용이 가능  보통 밑에 배치되어있음  
function hello(name){
    return "hello" + name;
}


//화살표함수  익명함수를 사용하는경우 .. 
const arrHello = (name) => {return "hello," + name;}
//함수이름 , (매개값) = > {실제 실행되는 함수}
arrHello = name  => "hello," + name;             //매개값이 하나이고 리턴코드가 한줄이라면  괄호, 중괄호 생략가능 


//함수 표현식 // 해당함수가 사용되기 전에 선언이 되어있어야함  위에 배치가 되어있어야함 
//함수 정보 자체를 변수에 담음   매개변수로 함수를 넘길수 있게  리턴결과가아닌 함수 그 자체를 넘길수있게 
const message = function (msg){
    return "msg : " +msg;
}

//화살표 함수 

let arrMessage = (msg) => {return "msg" + msg;}
arrMessage = msg => "msg" + msg;
arrMessage = () => {let today = new Date().getDay();
                    console.log("오늘날짜" , today);        //매개 값이 없거나 리턴 코드가 두줄 이상이면 괄호 생략 불가 //this로 호출 불가. this는 무조건 윈도우를 지칭 
}





//함수 선언식,  덮어쓰기가 가능 
function hello(msg){
    return "msg hello: " +msg;
}


//console.log(hello("world"));