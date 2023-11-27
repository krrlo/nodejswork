const { clearInterval } = require("timers");

//한번만 실행 
const timeout = setTimeout(()=>{
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth()+1)).slice(-2);
    let day =('0' +today.getDay()).slice(-2);
    console.log(`${year}년`);

},1000);


//인터벌로 반복해서 실행 
let count = 0;
const interval = setInterval(()=> {
    console.log('interval %d' , count++);
    if(count == 5){
        clearInterval(interval); //작업번호를 넘김 
    }
},1000);

console.log('마지막');


//즉시실행 
const immedate = setImmediate(()=> {
    console.log('즉시실행');
})



//set immediate 뒤에 코드가 있으면  먼저 실행되고 그다음에 콜백함수가 실행됨 
//스택이 비어있는 상태일때 이벤트루프가 파스를 돌면서 가지고있는 콜백이 있을 경우  스택에 넘김 