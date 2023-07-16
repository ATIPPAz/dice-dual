<template>
  {{ prop.boardHolder }}
  <div class="board-game" :class="{ enemy: prop.boardHolder === Board.ENEMY_BOARD }">
    <div v-for="column in cellColumnNumber">
      <BoardGameCell :board-holder="prop.boardHolder" v-for="row in cellRowNumber" />
    </div>
  </div>
</template>
<script setup lang="ts">
import BoardGameCell from './BoardGameCell.vue'
import { Board } from '@/enum/board'
const prop = defineProps<{ boardHolder: Board }>()
const cellRowNumber = 3
const cellColumnNumber = 3
</script>
<style scoped>
.board-game {
  border-radius: 10px;
  border: 1px solid #ececed;
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  width: fit-content;
  border: 1px solid burlywood;
}
.enemy {
  border: 1px solid red;
}
</style>
