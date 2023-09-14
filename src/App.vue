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
    <filterSettings :toggleSettingBlock="toggleSettingBlock" :isSettingBlockVisible="isSettingBlockVisible" :arrType="arrType" :selectedi="selectedi" @update:selectedi="selectedi = $event"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getData from "./api/Api-Request.vue";
import "./assets/css/globalstyle.css";
import { useMyStore } from "./store/localstore";
import Cards from "./components/Cards-Component.vue";
import filterSettings from './components/filterSettings.vue'

const data = ref({ activity: "", type: "", participants: "" });
const cardOpen = ref(false);
const dataOpen = ref(false);
const isSettingBlockVisible = ref(false);
const selectedi = ref(false);
var result = "";
const myStore = useMyStore();
const baloontext = ref();
const arrType = [
  { type: "all" },
  { type: "education" },
  { type: "recreational" },
  { type: "social" },
  { type: "diy" },
  { type: "charity" },
  { type: "cooking" },
  { type: "relaxation" },
  { type: "music" },
  { type: "busywork" },
];

const toggleSettingBlock = () => {
  isSettingBlockVisible.value = !isSettingBlockVisible.value;
};

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

async function CheckFilter() {
  if (selectedi.value === false) {
    result = await getData();
  } else {
    if (selectedi.value == "all") {
      result = await getData();
    } else {
      result = await getData(selectedi.value);
      console.log("getDataFromType " + selectedi.value);
    }
  }
}

onMounted(() => {
  ChangeBaloonText();
});

const handleCardClick = async () => {
  await CheckFilter();
  data.value.activity = result.activity;
  data.value.type = result.type;
  data.value.participants = result.participants;
  data.value.price = result.price;

  //changing the class name
  cardOpen.value = !cardOpen.value;
  dataOpen.value = !dataOpen.value;

  if (cardOpen.value == true) {
    // console.log("slaat op");
    //storing data
    myStore.setLaatsteData(data.value);
  } else {
    // console.log("sla niet op");
  }
  ChangeBaloonText();
};
</script>
