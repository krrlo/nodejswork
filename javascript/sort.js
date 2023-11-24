let names = ["hong" , "kang" , "adward", "lee"];
names.sort();  //오름차순 정렬 
console.log(names);

names.reverse();   //내림차순
console.log(names);

let nums =[40,100,1,5,25,10];
nums.sort();   //숫자의 경우.. 내 맘대로 정렬안됨.. 유니코드 기준으로 정렬이 이루어짐
console.log(nums);

nums.sort((a,b) =>{
    return a-b;   //음수인 경우에 b가 더 큼    1-10 = -9 .  순환하면서 값을 비교하는 방식 ,  양수인경우 a가 더 큰 값  콜백함수를 이용해서 직접 정의를 해줘야함 
});                 

console.log(nums);


