<template>
  <Dice
    class="board-game-cell"
    :class="{ cursor: hasValue() }"
    :style="colorDisplay"
    @click="addDiceValue"
    :color="color"
    :value="value"
  />
</template>
<script setup lang="ts">
import Dice from '@/components/dice/index.vue'
import { ref, computed } from 'vue'
import { useDiceStore } from '@/stores/dice'
import { storeToRefs } from 'pinia'
import { Board } from '@/enum/board'
import { DiceNumber, DiceColor } from '@/enum/board'

const { resetDiceValue, hasValue, resetDiceFloat, setReturnDice } = useDiceStore()
const { diceValue, colorDice } = storeToRefs(useDiceStore())
const value = ref<null | DiceNumber>(null)
const color = ref<null | DiceColor>(null)
const props = defineProps<{ boardHolder: Board }>()
const colorDisplay = computed(() => `background-color:${color.value}`)
function addDiceValue() {
  if (hasValue() && props.boardHolder === Board.MY_BOARD && value.value === null) {
    value.value = diceValue.value
    color.value = colorDice.value
  } else if (hasValue() && props.boardHolder === Board.ENEMY_BOARD) {
    alert('not your board')
    setReturnDice()
  } else if (hasValue()) {
    alert('have value')
    setReturnDice()
  }
  resetDiceValue()
  resetDiceFloat()
}
</script>
<style scoped>
.cursor {
  cursor: pointer;
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
