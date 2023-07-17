<template>
  <div class="dice-float">
    <div class="dice-slot">
      <div class="dice-container" >
        <Dice
          class="float-board"
          :value="dice.value"
          :color="dice.color"
          :float="dice.float"
          :index="index"
          isMove
          style="margin-left: 1px"
          v-for="dice,index in diceSlot"
          :class="{ 'float-dice ': dice.float }"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Dice from '@/components/dice/index.vue'
import { storeToRefs } from 'pinia'
import {useDiceSlotStore} from '@/stores/diceSlot'
const {diceSlot} = storeToRefs(useDiceSlotStore())
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
  
}


.dice-float {
  position: absolute;
  bottom: 0;
}
</style>
