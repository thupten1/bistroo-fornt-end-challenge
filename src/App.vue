<template>
    <div class="header">
    </div>
    <div class="container">
      <div class="textbaloonContainer">
        <div class="textbaloon">
          <div class="textbaloontext">
            <p> {{ baloontext }}</p>
          </div>
      </div>
      </div>
      <div class="title">
      <div class="logo"></div>
      <h1>Are you bored?</h1>
    </div>
      <div class="cardContainer">
      <div :class="[cardLeftOpen ? 'cardOpen' : 'card']" @click="handleCardLeftClick">
        <div :class="[dataOpen ? 'dataOpen' : 'dataClosed']">
          <h2>{{ data.activity }}</h2>
          <p>{{ data.type }}</p>
          <p> Participants for this activity is {{ data.participants }}</p>
        </div>
      </div>
      <div :class="[cardRightOpen ? 'card2Open' : 'card2']" @click="handleCardRightClick">
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
import { onMounted, ref } from 'vue'
import getData from './api/Api-Request.vue'
import './assets/css/globalstyle.css'
import { useMyStore } from './store/localstore'; // Verander dit pad naar het juiste pad van je store

const data = ref({ activity: '', type: '', participants:''})
const cardLeftOpen = ref(false);
const cardRightOpen = ref(false);
const dataOpen = ref(false);
const myStore = useMyStore();
const baloontext = ref();

// console.log(myStore);
// myStore.clearLocalStore();
function ChangeBaloonText(){
  if(myStore.Activity == ""){
  baloontext.value = "Pick a card you piece of shit";
  }
  else{
    baloontext.value = 'Look dumb*ss, your last avtivity was "' + myStore.Activity + '" If you want a new activity pick a card!';
  }
}

onMounted(() => {
  ChangeBaloonText()
})


const handleCardLeftClick = async() => {
  const result =  await getData();
  data.value.activity = result.activity;
  data.value.type = result.type;
  data.value.participants = result.participants;

    //changing the class name
  cardLeftOpen.value = !cardLeftOpen.value;
  dataOpen.value = !dataOpen.value;
  ChangeBaloonText();

  if (cardLeftOpen.value == true){
    console.log("slaat op")
    //storing data
    myStore.setLaatsteData(data.value)
  }
  else{
    console.log("sla niet op")
  }
};

const handleCardRightClick = async() => {
  const result =  await getData();
  data.value.activity = result.activity;
  data.value.type = result.type;
  data.value.participants = result.participants;

    //changing the class name
  cardRightOpen.value = !cardRightOpen.value;
  dataOpen.value = !dataOpen.value;
  ChangeBaloonText();
  
  if (cardRightOpen.value == true){
    console.log("slaat op")
    //storing data
    myStore.setLaatsteData(data.value)
  }
  else{
    console.log("sla niet op")
  }
};
</script>
