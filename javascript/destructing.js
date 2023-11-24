

///////////////////////////////////////////////////객체 기반 분해

let obj = {
    id:100,
    name:'hong',
    birth:'1999-12-12'
}


let { id , name , age} = obj;    //객체안에서 특정 값만 필요할때    //변수 선언한 것과 같음 prop자체가 변수가 되는것 
//age는 변수가 선언은 되었지만 값이 할당 되지 않았기 때문에 undefined가 나옴  객체안에 존재하는 prop만 가능 


console.log(id,name, age);


module.export = {
    Object : {},
    method: function(){}
}

let {Object, method} = module;  //활용되는 예   


////////////////////////////////////////////////////////////배열 기반 분해

let array = ['hello', 'nice','monday'];  
let [a,b,c] = array;    //let [내맘대로 변수설정 가능 , 인덱스 순서대로 값이 부여됨,  중간에 뭐 건너띄고 빼낼수없음]

console.log(a,b,c);


