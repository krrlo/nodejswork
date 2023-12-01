<template>
  <div>
    <input type="number" v-model="price" /> 원
    <br />
    <input type="number" v-model="count" /> 개
    <p>과세금액 : {{ amount }}</p>
    <p>부가세 10% : {{ tax }}</p>
    <p>결제 금액 : {{ total }}</p>
  </div>
</template>

<script>
//동작
const computed = {
  data() {
    return {
      price: 0,
      count: 0,
    };
  },
  computed: {
    //computed 내부에 있는 값도 추적해서 사용 가능. 그러나 추적해서 들어갔을때 data에 있는 기반이여야함..
    amount() {
      return this.price * this.count;
    },
    tax() {
      return this.amount * 0.1;
    },
    total() {
      return this.amount + this.tax;
    },
  },
};

//값
const watch = {
  data() {
    return {
      price: 0,
      count: 0,
      amount: "",
      tax: "",
      total: "",
    };
  },

  watch: {
    //어떤 변수를 지켜볼건지, 걔가 변경되었을때 어떤 동작을 할것인지 함수로 표현 , 리턴 구문이 없음. 실행만 할뿐이니까..
    price() {
      this.amount = this.price * this.count;
    },
    count() {
      this.amount = this.price * this.count;
    },
    amount() {
      this.tax = this.amount * 0.1;
      this.total = this.amount + this.tax;
    },
  },
};

export default watch; //computed:은 연산해서 값을 쥐고있기때문에  과세금액:0 , 뜨는데 사용 하기전부터 그 값을 쥐고잇음  /// watch는 처음에 아무 값 안뜨고 연결된 데이터에 변화가 일어나야 값이 변함
</script>
