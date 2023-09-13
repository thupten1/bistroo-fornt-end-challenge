<template>
  <div :class="[cardOpen ? 'cardOpen' : 'card']" @click="handleCardClick">
    <div :class="[dataOpen ? 'dataOpen' : 'dataClosed']">
      <div class="cardOpenText">
        <p> You picked "{{ data.type }}" type card.</p>
        <h2>{{ data.activity }}</h2>
        <p>  Price is {{ data.price }}</p>
        <p>Participants for this activity is {{ data.participants }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  cardOpen: Boolean,
  dataOpen: Boolean,
  handleCardClick: Function,
  data: Object,
});
</script>
