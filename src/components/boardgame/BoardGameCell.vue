<template>
  <div class="board-game-cell" @click="addDiceValue">{{ value || '' }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useDiceStore } from '@/stores/dice'
import { storeToRefs } from 'pinia'
import { Board } from '@/enum/board'
const { resetDiceValue, hasValue, setReturnDice } = useDiceStore()
const { diceValue } = storeToRefs(useDiceStore())
const value = ref<null | number>(null)
const props = defineProps<{ boardHolder: Board }>()
function addDiceValue() {
  if (hasValue() && props.boardHolder === Board.MY_BOARD) {
    value.value = diceValue.value
    resetDiceValue()
  } else if (props.boardHolder === Board.ENEMY_BOARD) {
    alert('not your board')
    setReturnDice()
  }
}
</script>
<style scoped>
.board-game-cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ececed;
  cursor: pointer;
  width: 49px;
  height: 49px;
}
</style>
