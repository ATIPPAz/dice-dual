<template>
  <div class="dice-float">
    <div class="dice-slot">
      <div class="dice-container">
        <Dice :value="dice" isMove v-for="dice in diceSlot" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Dice from '@/components/dice/index.vue'
import { ref, watch } from 'vue'
import { useDiceStore } from '@/stores/dice.ts'
import { storeToRefs } from 'pinia'
const { diceValue, returnDice } = storeToRefs(useDiceStore())
const { hasValue, resetReturnDice, resetDiceValue } = useDiceStore()
const diceRandom = ref<number>(0)
const diceSlot = ref<number[]>([])
const dontSetNewValue = ref(false)
function setDice() {
  diceSlot.value.push((diceRandom.value = Math.floor(Math.random() * 6) + 1))
}

setDice()
watch(
  () => diceValue.value,
  (e) => {
    if (e === null) {
      if (dontSetNewValue.value) {
        dontSetNewValue.value = false
      } else {
        setDice()
      }
    } else {
      diceSlot.value.pop()
    }
  }
)
watch(
  () => returnDice.value,
  (e) => {
    if (e) {
      if (hasValue()) {
        diceSlot.value.push(diceValue.value!)
        dontSetNewValue.value = true
        resetReturnDice()
        resetDiceValue()
      }
    }
  }
)
</script>
<style scoped lang="scss">
.dice-slot {
  width: 99vw;
  border: 1px solid black;
  border-radius: 5px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  .dice-container {
    height: 52px;
    width: calc(100% - 10px);
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
  }
}
.dice-float {
  position: absolute;
  bottom: 0;
}
</style>
