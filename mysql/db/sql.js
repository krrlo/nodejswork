module.exports = { //sql문을 들고있는 객체를 반환
   customerList: `SELECT *FROM customers`,
   customerInsert: `INSERT INTO customers SET ?`,             //물음표 1개 set절에서 움직임, 우리가 넘기는 타입은 객체  물음표 1개에 객체 하나가 대응되는 형태 특정 컬럼 하나만 인서트 되는게아님  
   customerUpdate: `UPDATE customers SET ?  WHERE id = ?`,
   customerDelete: `DELETE FROM customers WHERE id =?` ,
   customerInfo : `SELECT *FROM customers  WHERE id = ?`
}