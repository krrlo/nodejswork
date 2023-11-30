<template>
<div></div>
    
</template>

<script>
// 컴포넌트는 하나의 객체. 그 객체export

//컴포넌트의 속성들을 정의할것임 
export default {      
    components : [],              //컴포넌트 속성에 등록을 해놔야 한대.....컴포넌트가 사용하는 여러개의자식 컴포넌트를 등록, 배열로 처리 
    data(){                      //컨포넌트가 실제 관리하는 데이터  변수들을 관리하는....  property
        return{
            //testData : ''         //여기서는 값을 수정 가능 
        }
    },
    computed : {
        AfterYear(){
            return this.today.setFullYear(this.today.getFullYear()+1);
        }               //data프로퍼티를 관찰 
    },                  //computed속성. 연산값을 가지고있음  data가 오늘 날짜를 가지고 있다면  여기서 그거이용해서 일년뒤 날짜구하기
                        //수정할수없음 읽는거만 가능하대.. 바꾸고싶으면 data()를 조정해야함

    methods : {    //이벤트핸들러와 기능적 함수의 총칭 , ***여기에 등록되어 있는 함수만 사용가능 
       // test(){
        //    tjos
        //    console.log(this.00000$data, this.testData);  ///원래 객체 내부 데이터에 접근하려면 this.data.testData라고 해야하는데 
       // }                                              속성은 this.$data라고접근 ..  this.testData에 라고가능 속성접근은 생략하고 
    },

    watch : {},                             //프로퍼티가 변했을때 내가 해야하는 동작들을 정의 . 
    created() {},
    mounted() {}                            
}

</script>

<style>

</style>


<!--3개가 항상 다 있어야하는건 아님. 필요한것만 가능 html(템플릿), js, css가 세트로 움직임 -->