<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
html,body {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
