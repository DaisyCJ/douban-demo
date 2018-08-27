<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.clearfix::after {
  display: block;
  clear: both;
  content: '.';
  visibility: hidden;
  height: 0;
}
a {
  text-decoration: none;
  color: #494949;
}
li {
  list-style: none;
}
</style>
