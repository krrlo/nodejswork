class Human {

    //자바 >>필드 , 생성자, 메소드 
    //자바스크립트 >>생성자 내부에 필드가 선언됨 

    constructor() {
        this._ssn;
        this._name = 'lee'; //언더바는 값 건들지ㅏㅁ..마란ㄴ뜻 
        this._age; //human이라는 class가 가지고 있어야할 필드들을 생성자 내에서 선언  밖에서 선언 x  //객체를 지칭하는 this

    }


    set ssn(ssn) {                     //자유롭게 필드 값 넣고 읽을라면 겟셋 적용해야함 
        this._ssn = ssn;
    }


    get ssn() {
        return this._ssn;
    }


    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;

    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return this._age;

    }


    getInfo(){
        console.log(this._ssn, this._age, this._name);
    }


    //get name() { //get자체가 하나의 기능을 가지고있는..   get / 필드명  //외부에서 필드값 불러오는것만 제한되는것이 아니라 클래스 내부에서도 영향을 미침 
    //    return this._name; //얘 실행시키면 오류남 >>  클래스 내부에서도 값을 넣을때 get set 영향을 미침 ........                                             
    //}

}


let hu = new Human(); //객체 생성  = {f: f:}  //객체 내부 필드에 자유롭게 접근가능 //접근제한자가없음.. //get set이 필요가없어짐 
hu.ssn = '940907';
hu.name = '두웅이';
hu.age='29';

hu.getInfo();

//console.log(hu.ssn, hu.age, hu.name);

//https://regexr.com/ 정규표현식 만들어주는 사이트  얘가 왜 이패턴인지 .. 해석해오기 


//정규리터럴
const regex = /\d{3}-\d{4}-\d{4}/;
//객체 형태로 


regex.test('010-1111-2222') // true;
regex.test('01-11-22') // false;


//console.log(regex.test('010-1111-2222'));
console.log(regex.test('01-11-22'));

var str = "hhhhh hhhhh world!!"
const st =/world/;
console.log(str.search(st));



