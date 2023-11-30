let array = [1,2,3];
let string = "hello";

//[1,2,3,"h","e","l","l",o"]; 만들고싶은 형태 


// let newArray=[];

// for(let value of array){
//     newArray.push(value);
// }


// for(let value of string){
//     newArray.push(value);
// }

let newArray=[...array,...string]; 

console.log(newArray);


let newArray1=[array,...string]; 


console.log(newArray1);