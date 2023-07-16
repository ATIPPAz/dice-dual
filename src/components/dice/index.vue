<template>
  <div class="dice" @click="select">
    {{ props.value }}
  </div>
</template>
<script setup lang="ts">
import { useDiceStore } from '@/stores/dice'
const { setDiceValue } = useDiceStore()
const props = defineProps<{
  isMove: boolean
  value: number
}>()

function select() {
  if (props.isMove) {
    setDiceValue(props.value)
  }
}
</script>
<style scoped>
.dice {
  width: 50px;
  height: 50px;
  border: 1px solid red;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
