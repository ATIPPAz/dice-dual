<template>
  <div class="dice-float">
    <div class="dice-slot">
      <div class="dice-container">
        <div  v-for="(dice, index) in diceSlot">
          <Dice
          :forbidFloat="false"
          :value="dice.value"
          :color="dice.color"
          style="margin-left: 1px"
          :index="index"
          @placeSuccess="removeDice"
        />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Dice from "@/components/dice/DiceExtension.vue";
import { storeToRefs } from "pinia";
import { useDiceSlotStore } from "@/stores/diceSlot";
import { reactive,ref } from "vue";
import { DiceColor, DiceNumber } from "@/enum/board";
const diceSlot = ref<{value:DiceNumber,color:DiceColor}[]>([{color:DiceColor.Five,value:DiceNumber.Five},{color:DiceColor.Four,value:DiceNumber.Four},{color:DiceColor.One,value:DiceNumber.One},{color:DiceColor.Two,value:DiceNumber.Two}])
function removeDice(index:number){
  diceSlot.value.splice(index, 1)
}
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
.float-board {
  position: relative;
}

.dice-float {
  position: absolute;
  bottom: 0;
}
</style>
