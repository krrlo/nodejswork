<template>
<vueComponent/>
  <nav>
    <router-link to="/">Home</router-link> |   <!-- index.js path -->
    <router-link to="/about">About</router-link>  
  </nav>
  <router-view/><!--라우터 뷰가 index.js component  , 링크에 맞는 컨포넌트가 나오게됨 -->
</template>

<script>
import VueComponent from './components/VueComponent.vue'

export default{
  components : {
    VueComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
