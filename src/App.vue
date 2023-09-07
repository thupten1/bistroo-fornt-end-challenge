<template>
    <div class="header">
    </div>
    <div class="container">
      <div class="title">
      <div class="logo"></div>
      <h1>Are you bored?</h1>
      <p>Pick a card</p>
    </div>
      <div class="cardContainer">
      <div :class="[cardLeftOpen ? 'cardOpen' : 'card']" @click="toggleCardLeft">
        <div :class="[dataOpen ? 'dataOpen' : 'dataClosed']">
          <h2>{{ data.activity }}</h2>
          <p>{{ data.type }}</p>
          <p> Participants for this activity is {{ data.participants }}</p>
        </div>
      </div>
      <div :class="[cardRightOpen ? 'card2Open' : 'card2']" @click="toggleCardRight">
        <div :class="[dataOpen ? 'dataOpen' : 'dataClosed']">
          <h2>{{ data.activity }}</h2>
          <p>{{ data.type }}</p>
          <p> Participants for this activity is {{ data.participants }}</p>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import getData from './api/Api-Request.vue'
import './assets/css/globalstyle.css'

const data = ref({ activity: '', type: '', participants:''})
const cardLeftOpen = ref(false);
const cardRightOpen = ref(false);
const dataOpen = ref(false);


const toggleCardLeft = () => {
  cardLeftOpen.value = !cardLeftOpen.value;
  dataOpen.value = !dataOpen.value;
};
const toggleCardRight = () => {
  cardRightOpen.value = !cardRightOpen.value;
  dataOpen.value = !dataOpen.value;
};

onMounted(async () => {
  const result = await getData();
  data.value.activity = result.activity;
  data.value.type = result.type;
  data.value.participants = result.participants;
})
</script>
