<template>
  <div :class="['atp-card', { rounded: props.rounded }]">
    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  rounded: {
    type: Boolean,
    default: false
  }
})
</script>
<style scoped>
.atp-card {
  border: 1px solid #ececed;
  padding: 16px;
}
.rounded {
  border-radius: 10px;
}
</style>
