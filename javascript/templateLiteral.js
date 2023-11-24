

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDay();
let msg = `${year}년                        
${month}월
${day}일`;

//줄바꿈 표현, 할때 ``//jsp에서는 사용안함.. 겹쳐서..?ㅎㅎ 


console.log(msg);


