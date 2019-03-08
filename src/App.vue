<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 存放组件的内容 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 /* margin-top: 60px;*/
 padding: 0;
 margin: 0;
}
</style>
