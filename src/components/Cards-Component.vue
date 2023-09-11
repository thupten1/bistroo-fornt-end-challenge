<template>
  <div :class="[cardOpen ? 'cardOpen' : 'card']" @click="handleCardClick">
    <div :class="[dataOpen ? 'dataOpen' : 'dataClosed']">
      <h2>{{ data.activity }}</h2>
      <p>{{ data.type }}</p>
      <p>Participants for this activity is {{ data.participants }}</p>
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
