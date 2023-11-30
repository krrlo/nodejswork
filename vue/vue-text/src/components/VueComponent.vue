<template>
    <div>
        <label><input type="text" v-model="msg"></label>  <!--msg를 기반으로 바로바로 연결중 v-model디렉티브. 양방향 처리하는 애 .  --> 
        <p>{{msg}}</p>   <!--출력하는애 --> 
    </div>
</template>

<script>
    export default {            //하나의 컨포넌트 객체를 내보냄    하나의 컨포넌트는 하나의 객체  (템플릿 + 스크립트 + 스타일 다 들어가있는 객체  뷰 안의 webpack이 합쳐줌)
        name:'VueComponent',     //없어도 동작함 . 컨포넌트 관리를 위해 이름을 부여 
        data(){                 //컨포넌트가 관리하는 데이터 .  input, p 태그 연결 
            return {
                msg : '메롱'            //공백이아닌 데이터를입력한다면...msg랑 연결되어있기때문에 실시간으로 연결되어있음 
            }
        }
    }
</script>

<style scoped>
    p {
        background-color: cadetblue;         /*컨포넌트안 스타일 태그는 다른곳에도 적용됨 진짜 얘만 적용시키려면 scoped 속성*/
    }
</style>