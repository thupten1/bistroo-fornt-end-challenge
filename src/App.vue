<template class="body">
    <div class="header">
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
import './assets/css/globalstyle.css'

const data = ref({ activity: '', type: '', participants:''})

onMounted(async () => {
  const result = await getData();
  data.value.activity = result.activity;
  data.value.type = result.type;
  data.value.participants = result.participants;
})
</script>
