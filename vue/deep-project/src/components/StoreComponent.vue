<template>
  <div>
    <form>
      <label>
        제품id : <input type="text" v-model="productInfo.product_id" />
      </label>
      <label>
        제품명 : <input type="text" v-model="productInfo.product_name" />
      </label>
      <label>
        카테고리 :
        <input type="radio" value="a" v-model="productInfo.category" /> a</label
      >
      <label>
        카테고리 :
        <input type="radio" value="b" v-model="productInfo.category" /> b</label
      >
      <button type="button" @click="addCart">추가</button>
    </form>
    <table>
      <thead>
        <caption>
          total :
          {{
            total
          }}
        </caption>
        <tr>
          <th>카테고리</th>
          <th>제품id</th>
          <th>제품명</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="idx" v-for="(info, idx) in productList">
          <td>{{ info.category }}</td>
          <td>{{ info.product_id }}</td>
          <td>{{ info.product_name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productInfo: {
        product_id: "",
        product_name: "",
        category: "a",
      },
    };
  }, //data

  //computed로 store값 불러오기

  computed: {
    productList() {
      return this.$store.state.cart; //$store >>저장소를 불러옴
    },

    total() {
      return this.$store.getters.cartCount; //getters로 정의되어있는거는 getters로 불러오기
    },
  }, //computed

  methods: {
    //위에있는 정보들에 대해 저장소에 추가하고자 한다면... commit이라는 메소드를 통해 전달. 매개값(어떤 메소드 실행할건지  , 넘기고자 하는 정보)
    addCart() {
      //this.$store.commit("addProduct", this.productInfo); >> 얘로 하면 값이 바뀜
      let obj = {
        product_id: this.productInfo.product_id,
        product_name: this.productInfo.product_name,
        category: this.productInfo.category,
      };
      this.$store.commit("addProduct", obj);
    },
  },
};
</script>
