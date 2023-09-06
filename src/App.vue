<template>
  <div class="header">
    <h1>welkom</h1>
  </div>
  <HelloWorld msg="Are you bored?"/>
  <div class="card">
    <h2>{{ data.activity }}</h2>
    <p>{{ data.type }}</p>
    <p> Participants for this activity is {{ data.participants }}</p>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import getData from './api/Api-Request.vue'

const data = ref({ activity: '', type: '', participants:''})

onMounted(async () => {
  const result = await getData();
  data.value.activity = result.activity;
  data.value.type = result.type;
  data.value.participants = result.participants;
})
</script>

<style>
.header{
  display: flex;
  flex-direction: row;
  justify-content: left;
  color: #e50000;
  background-color: antiquewhite;
  width: 100vw;
  height: 100vh;
  position: fixed;
  justify-content: center;
  z-index: -2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card{
  height: 30vh;
  width: 20vw;
  background-color: azure;
}
</style>
