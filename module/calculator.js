const defaultNum = 1;

function add(num1, num2){
    return num1+num2;
}

function minus (num1, num2){
    return num1-num2;
}


function multi (num1, num2){
    return num1 * num2;
}


function divide (num1, num2){
    return num1 / num2;
}


//계산기 기능을 함수로 각각 만듦

//exports는 객체를 내보냄 //파일 안 모든대상을 내보내던지, 특정 대상을 내보내던지 
module.exports={

        defaultNum,
        add,
        minus,
        multi,
        divide
 
}

// divide : divide 
//키가 변수 명과 동일할때 생략  ㅇㅣ름자체가 키, 그 변수의 값이 value로 들어감  .require형태로 받음 


// export default {

//     //모듈 형태로 내보내는 것이 아닌 ,  import  로 받음 
// }  //공존불가