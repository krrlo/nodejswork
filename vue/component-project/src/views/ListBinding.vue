<template>
  <div>
    <button v-on:click="addData">추가하기</button>
    <!--클릭이벤트  addData얘는 프로퍼티 아님 v-on:event="핸들러" @click 해도됨-->
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송비</th>
        </tr>
      </thead>

      <tbody>
        <tr v-bind:key="idx" v-for="(item, idx) in productList">
          <!--유니크한key 속성이 반드시 필요. 내가쓰는게아니라 vue가 쓴대 productList배열이 출력되는중 -->
          <td>{{ item.product_name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//productList  배열임
let data = [
  {
    product_name: "기계식키보드",
    price: 25000,
    category: "노트북",
    delivery_price: 5000,
  },

  {
    product_name: "무선마우스",
    price: 12000,
    category: "노트북",
    delivery_price: 5000,
  },

  {
    product_name: "아이패드",
    price: 72500,
    category: "노트북",
    delivery_price: 5000,
  },

  {
    product_name: "태블릿거치대",
    price: 32000,
    category: "노트북",
    delivery_price: 5000,
  },

  {
    product_name: "무선충전기",
    price: 42000,
    category: "노트북",
    delivery_price: 5000,
  },
];

export default {
  data() {
    return {
      productList: data,
    };
  },

  methods: {
    addData() {
      let obj = {
        product_name: "아이패드",
        price: 72500,
        category: "노트북",
        delivery_price: 5000,
      };
      //adddata
      //addData: function(){} 함수를 객체에 등록하는 표기법

      let index = this.productList.length; //원래 길이 5  , 추가버튼을 누르게되면
      this.productList[index] = obj; //인덱스를 기반으로 배열 변경    this.productList[5] = 5번째 인덱스에 새로운 obj를 넣어라
    }, //data함수
  }, //methods
}; //익스포트
</script>
