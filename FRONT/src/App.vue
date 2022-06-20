<template>
<nav>
    <router-link to="/addFiles">addFiles</router-link> |
    <router-link to="/history" >History</router-link> |
    <router-link to="/register" >Registration</router-link> |
    <router-link to="/login" >login</router-link> | 
  </nav>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
