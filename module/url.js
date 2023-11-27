const url = require('url');
let legercy = url.parse('httpS://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');  //레거시 api 
console.log(legercy);


//이 방식만 기억하래.........................................뭔뎅?이ㅏ것이...
let whatwg = new URL('httpS://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'); //url 클래스를 이용..해서 
console.log(whatwg);
console.log(whatwg.searchParams.get('query'));  // searchParams: URLSearchParams { 'query' => 'string' }, //내부에 있는 값을 꺼낼때 훨씬 더 편하게 작업이 가능하대....

//cors 내가 지원을 해도 되는 대상인지 판단 >>  그 기준이 오리진,   
