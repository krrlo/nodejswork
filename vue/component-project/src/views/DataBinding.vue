<template>
  <!--반복적으로 사용할때 쓰는 템플릿태그 dom에 자동으로 등록되지 않음. -->
  <div>
    <h1>{{ title + "!!!" }}</h1>
    <!--{{ 자바스크립트 영역}} 템플릿문법, 내부에서 가벼운 연산이 가능  출력하고 끝, -->
    <h2 v-bind:name="'sample'" v-text="title" />
    <!-- 여기에서 값을 조정 할수 없음 값 조정하고싶으면 data()에서 조정해야함 
                  "'문자열'" 텍스트 속성에 접근하는 디렉티브  v-text= "title + !!! 뭐 더 안붙힘.. 헷갈리니까.."  프로퍼티만 적어주면됨 text 는 태그로 인식안함 -->
    <p v-html="tagList" />
    <!--html태그를 직접 조정하는 디렉티브 간단한 문구 정도만 -->
    <p v-text="tagList" />
    <!--글자 그대로 출력 -->
    <hr />

    <input type="text" v-model="valueModel" />
    <p>{{ typeof valueModel }}</p>
    <input type="number" v-model.lazy="numberModel" />
    <!--input type ="number" v-model=
                                                       
                                                            "numberModel" type안해도 넘버 붙히면 인풋타입 넘버로 인식 하게 해준다.model.수식어 lazy . -->
    <p>{{ numberModel + 10000 }}</p>

    <select v-model="selectModel">
      <!--선택된 value값은 select가 가지고있음-->
      <option value="summer">여름</option>
      <option value="winter">겨울</option>
    </select>
    <p>{{ selectModel }}</p>
    <textarea v-model="textModel" />
    <p>{{ textModel }}</p>
    <hr />
    <input
      type="checkbox"
      v-model="chData"
      true-value="맞음"
      false-value="아니"
    />
    <!--체크가되어있으면 true-->
    <p>{{ chData }}</p>

    <div>
      <input type="checkbox" value="서울" v-model="city" /> 서울
      <!--같은 city에  1130 수업완 -->
      <input type="checkbox" value="대구" v-model="city" /> 대구
      <p>{{ city }}</p>
    </div>

    <div>
      <input type="radio" value="독서" v-model="hobby" /> 독서
      <input type="radio" value="영화" v-model="hobby" /> 영화
      <input type="radio" value="놀기" v-model="hobby" /> 놀기
      <p>{{ hobby }}</p>
    </div>

    <hr />
    <!--누르는거에따라 이미지가 바뀌게 -->
    <img v-bind:style="styleData" v-bind:src="imgUrl" />
    <!--styleData은 오브젝트 형태  오브젝틀 형태로 걍 쓸것 -->
    <!--<img v-bind:style=[ backSetting  addStyle ] v-bind:src="imgUrl"> -->
    <!--v-bind : 속성명 =  사용할 값 -->
    <div
      class="container"
      v-bind:class="{ active: isActive, 'text-red': hasError }"
    >
      Class binding first
    </div>
    <!--공통적인 사항은 class로하고 //추가적 style은 bind로줌  (선택을 하는 순간 다른 스타일 먹여야할때)
        active' : isActive boolean타입.. -->
    <div class="container" v-bind:class="myClass">calssss</div>
    <!--myClass : 'active'   //값으로 클래스 명을 들고있는것 흔하게 사용되느방식x-->
  </div>
</template>

<script>
//컴포넌트가 가질 객체를 구성
//컴포넌트 속성 정의
export default {
  data() {
    return {
      // 객체를 리턴
      title: "안녕.. 뷰..?", //타이틀 프로퍼티, 컨포넌트가 다루는 변수임.
      tagList: "<strong> today is.....</strong>",
      valueModel: "Korea",
      numberModel: "0",
      selectModel: "",
      textModel: "어우..ㅂㅐ고파",
      chData: "",
      city: [], //여러개가 들어올수 있으니까 배열로
      hobby: "독서",
      imgUrl: "https://www.kocca.kr/trend/vol14/img/s132/img_01.png",
      styleData: {
        backgroundColor: "skyblue", //하이픈=카멜 표기법  background-color  //오브젝트 형태로
        width: "500px",
      },
      backSetting: "background-color:skyblue;",
      addStyle: "height : 200px;",
      isActive: false, //배경색 적용x
      //hasError: !this.isActive, //내부에있는 애 불러올때에는 . this 붙히기  >> 처음 뷰가 만들어지면서 isActive값을 복사 //단순히 초기값을 주는것
      myClass: "active", //값으로 클래스 명을 들고있는것
    }; //리턴
  },

  computed: {
    hasError() {
      return !this.isActive; //.text-red 가 빠짐  계속 변경하면서 return => 연결성을 가지게됨    /배경색 적용 o
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: blueviolet;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
