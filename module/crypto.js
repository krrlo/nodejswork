/////////////////암호화 과정 

const crypto = require('crypto');          
const data = 'pw1234';

let encData = crypto.createHash('sha512')
                                .update(data)          //같은데이터
                                .digest('base64');   //64기준으로 할건지 hex로 할건지 

console.log(encData);

encData = crypto.createHash('sha512')
                .update(data)          //같은데이터
                .digest('hex');       //표시방식
                
console.log(encData);           


///////////////salt 사용해서 암호화 

const createSalt = () => {
    return new Promise ((resolve, reject) =>{
        crypto.randomBytes(64,(err, buf)=>{
            if(err) reject(err);
            resolve(buf.toString('base64'));  //랜덤으로 암호 만들어냄...
        })
    })
}/////


const createCryptoPassword = async (plainPassword) => {
    const salt = await createSalt(); // salt생성 

    return new Promise((resolve, reject)=>{
        crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512" , (err, key)=>{
            if(err) reject(err);
            resolve({password : key. toString("base64"), salt})
        })
    })
}/////

const cryptoPassword = async () =>{

    encData = await createCryptoPassword(data);
    console.log(encData);
}


cryptoPassword();


