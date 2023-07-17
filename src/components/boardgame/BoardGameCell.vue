<template>
  <div class="board-game-cell">
    <Dice
      :class="{
        'cursor-allow': hasDice(),
        'cursor-notallow':
          (value !== null && hasDice() ) || (props.boardHolder !== Board.MY_BOARD ) && hasDice()
      }"
      :float="false"
      :style="colorDisplay"
      @click="addDiceValue"
      :color="color"
      :value="value"
    />
  </div>
</template>
<script setup lang="ts">
import Dice from '@/components/dice/index.vue'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { Board } from '@/enum/board'
import { DiceNumber, DiceColor } from '@/enum/board'
import {useDiceSlotStore} from '@/stores/diceSlot'
const {resetDiceSlot,removeDiceInSlot,hasDice} = useDiceSlotStore()
const {diceSelect,selectIndex} = storeToRefs(useDiceSlotStore())

const value = ref<null | DiceNumber>(null)
const color = ref<null | DiceColor>(null)
const props = defineProps<{ boardHolder: Board }>()
const colorDisplay = computed(() => `background-color:${color.value}`)
function addDiceValue() {
  if (diceSelect.value && props.boardHolder === Board.MY_BOARD && value.value === null) {
    value.value = diceSelect.value!.value
    color.value = diceSelect.value!.color
    removeDiceInSlot(selectIndex.value!,true)
    return
  } 
  resetDiceSlot()
}
</script>
<style scoped>
.cursor-allow {
  cursor: pointer;
}
.cursor-notallow {
  cursor: no-drop;
}
.board-game-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ececed;
  width: 49px;
  height: 49px;
}
</style>
