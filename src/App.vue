<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

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
    <div class="settingsContainer">
      <button class="btnSettings" @click="toggleSettingBlock">
        <i class="fa fa-gear" style="font-size: 24px"></i>
      </button>
      <div class="settingBlock" v-if="isSettingBlockVisible">
        <div v-for="item in arrType" :key="item">
          <input
            type="radio"
            :name="'option-selected'"
            v-model="selectedi"
            :value="item.type"
          />
          <label>{{ item.type }}</label>
        </div>
      </div>
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
    console.log("getrandomData");
  } else {
    if (selectedi.value=="all") {
      result = await getData();
      console.log("getrandomData");
    }
    else{
      result = await getData(selectedi.value);
      console.log("getDataFromType " + selectedi.value);
    }
  }
  console.log("test");
  console.log(result);
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
  ChangeBaloonText();

  if (cardOpen.value == true) {
    // console.log("slaat op");
    //storing data
    myStore.setLaatsteData(data.value);
  } else {
    // console.log("sla niet op");
  }
};
</script>
