const promise = new Promise((resolve, reject) => {              //성공, 실패에 대한 값을 넘김 
    if(true){
        resolve("결과데이터");
    }else{
        reject(new Error("에러메세지"));
    }
}


//promise
//.then ((success, fail))
//.catch