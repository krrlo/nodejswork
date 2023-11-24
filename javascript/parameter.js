function printMsg(msg = '메세지 입력해' , to =''){

    console.log(msg);

}

printMsg('집에가고시펑');
printMsg();  //기본값이 들어간 값이나옴 //공백 넣지마  null도 안됨 



//rest parameter


function sum (x,y, ...args){  //몇개가 들어올지 모르니까  
    let result = x+y;
    console.log(args.length); //4ㄱㅏ출력

    for(let num of args){    //하나의 변수에 배열 형태로 계속 담기게됨 // args 배열을 순환하는  
        result += num;
    }
    return result;
}


console.log(sum(1,2)); 
console.log(sum(1,2,3,4,5,6)); 