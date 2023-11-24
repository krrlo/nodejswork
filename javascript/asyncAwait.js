function webServerConnect(){
   return fetch('https://jsonplaceholder.typicode.com/posts/1',{
        headers : {
            'Cache-Control' : 'no-cache'
        }
    })
    .then(response => response.json())  //return 생략
    
}

async function getJSONData(){               //async, await 비동기 작업이 일어나고있다...........  // await 얘 안쓰면 promise 클래스 pending이 나옴 
    const result = await webServerConnect();  //결과가 올때까지 기다리겠음  await를 써야 결과값이 돌아옴 성공이든 실패든 
    console.log(result); 
}

getJSONData();

