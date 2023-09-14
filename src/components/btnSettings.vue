<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <button class="btnSettings" @click="toggleSettingBlock">
    <i class="fa fa-gear" style="font-size: 24px"></i>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  toggleSettingBlock: Function,
});
</script>
