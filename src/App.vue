<template>
  <header class="header"><h1>welkom </h1></header>
  <HelloWorld msg="Are you bored?"/>
  <h2>{{ data.activity }}</h2>
  <p>{{ data.type }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      data: []
    }
  },
  mounted() {
    axios
      .get('https://www.boredapi.com/api/activity/')
      .then((response) => {
        this.data = response.data
      })
  }
}
</script>

<style>
.header{
  color: #e50000;
  background-color: antiquewhite;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
