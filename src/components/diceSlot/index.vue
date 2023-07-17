<template>
  <div class="dice-float">
    <div class="dice-slot">
      <div class="dice-container" :class="{ 'float-board': diceFloat }">
        <Dice
          :value="dice.value"
          :color="dice.color"
          isMove
          style="margin-left: 1px"
          v-for="dice in diceSlot"
          :class="{ 'float-dice ': diceFloat }"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Dice from '@/components/dice/index.vue'
import { ref, watch } from 'vue'
import { useDiceStore } from '@/stores/dice'
import { storeToRefs } from 'pinia'
import { mapDiceNumber, DiceColor, mapDiceColor } from '@/enum/board'
import {useDiceSlotStore} from '@/stores/diceSlot'
const {diceSlot} = storeToRefs(useDiceSlotStore())
const { diceValue, diceFloat } = storeToRefs(useDiceStore())
// const diceRandom = ref<number>(0)
// const diceSlot = ref<{ value: number; color: DiceColor }[]>([])
// function setDice() {
//   const rand = Math.floor(Math.random() * 6) + 1
//   diceSlot.value.push({ value: mapDiceNumber(rand), color: mapDiceColor(rand) })
// }

// setDice()
// watch(
//   () => diceValue.value,
//   (e) => {
//     if (e === null && !returnDice.value) {
//       diceSlot.value.pop()
//       resetDiceFloat()
//       // setDice()
//     } else {
//       resetReturnDice()
//     }
//   }
// )
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
    align-items: center;
    display: flex;
  }
}
.float-board {
  position: relative;
  .float-dice {
    position: absolute;
    animation-name: floating-up;
    animation-duration: 0.075s;

    // animation-timing-function: ease-in-out;
    top: -10px;
    animation-timing-function: linear;
  }
}
@keyframes floating-up {
  0% {
    top: 0px;
  }
  25% {
    top: -5px;
  }
  50%,
  100% {
    top: -10px;
  }
  75% {
    top: -15px;
  }
}

.dice-float {
  position: absolute;
  bottom: 0;
}
</style>
