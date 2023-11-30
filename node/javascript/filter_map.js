let words =['spray', 'limit','elite','exuberant','paresent'];

let result = words.filter(function(word,idx,ary){  //값, 인덱스, 배열 그 자체 
    return word.length>6;
   //console.log(a,b,c,d);
});


console.log(words, result);  //원본 ary 유지 되어있음 



let user = [                       //배열안 객체의 값을 조정할때 map을 쓴다  , 배열의 길이는 3으로 유지됨 

{
    id:100, 
    name : 'hong'
},


{
    id:200, 
    name : 'kong'
},

{
    id:300, 
    name : 'lee'
}



];


//객체 복사 주의 
//새로운 등급 데이터 생성 // 리턴되는 대상을 따로 모으는 것이 map   //기존 객체 값에 새로운 값을집어넣어서 리턴하면 원본데이터까지 같이 변형되니 주의..
result = user.map(function(user){
//user.grade :user.id ==200? 'vip' : '일반'
//return user; 하면 원래데이터까지 바뀜.. 

   return {    //반드시 새로운 객체를 생성해서 리턴해야 원본데이터 변경 x
        id:user.id,
        name: user.name,
        grade: user.id ==200? 'vip' : '일반'

   }

});


console.log(user, result);