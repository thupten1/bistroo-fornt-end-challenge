<template>
  <div class="settingsContainer">
    <btnSettings :toggleSettingBlock="toggleSettingBlock" />
    <div class="settingBlock" v-if="isSettingBlockVisible">
      <div v-for="item in arrType" :key="item">
        <input
          type="radio"
          :name="'option-selected'"
          v-model="localSelectedi"
          :value="item.type"
        />
        <label>{{ item.type }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import btnSettings from "./btnSettings.vue";

defineProps({
  toggleSettingBlock: Function,
  isSettingBlockVisible: Boolean,
  arrType: Array,
  selectedi: Boolean,
});

const localSelectedi = ref(); // Create a local data property

const emit = defineEmits(["update:selectedi"]); // Define the custom event

// Watch for changes in the localSelectedi value and emit an event when it changes
watch(localSelectedi, (newValue) => {
  // Emit an event to notify the parent component of the change
  emit("update:selectedi", newValue);
});
</script>
