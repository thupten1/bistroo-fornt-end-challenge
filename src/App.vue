<template>
  <div class="header"></div>
  <div class="container">
    <div class="textbaloonContainer">
      <div class="textbaloon">
        <div class="textbaloontext">
          <p>{{ baloontext }}</p>
        </div>
      </div>
    </div>
    <div class="title">
      <div class="logo"></div>
      <h1>Are you bored?</h1>
    </div>
    <div class="cardContainer">
      <Cards
        :cardOpen="cardOpen"
        :dataOpen="dataOpen"
        :handleCardClick="handleCardClick"
        :data="data"
      ></Cards>
      <Cards
        :cardOpen="cardOpen"
        :dataOpen="dataOpen"
        :handleCardClick="handleCardClick"
        :data="data"
      ></Cards>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getData from "./api/Api-Request.vue";
import "./assets/css/globalstyle.css";
import { useMyStore } from "./store/localstore";
import Cards from "./components/Cards-Component.vue";

const data = ref({ activity: "", type: "", participants: "" });
const cardOpen = ref(false);
const dataOpen = ref(false);
const myStore = useMyStore();
const baloontext = ref();

// myStore.clearLocalStore();
function ChangeBaloonText() {
  if (myStore.Activity == "") {
    baloontext.value = "Pick a card you piece of shit";
  } else {
    baloontext.value =
      'Look dumb*ss, your last avtivity was "' +
      myStore.Activity +
      '" If you want a new activity pick a card!';
  }
}

onMounted(() => {
  ChangeBaloonText();
});

const handleCardClick = async () => {
  const result = await getData();
  data.value.activity = result.activity;
  data.value.type = result.type;
  data.value.participants = result.participants;

  //changing the class name
  cardOpen.value = !cardOpen.value;
  dataOpen.value = !dataOpen.value;
  ChangeBaloonText();

  if (cardOpen.value == true) {
    console.log("slaat op");
    //storing data
    myStore.setLaatsteData(data.value);
  } else {
    console.log("sla niet op");
  }
};
</script>
