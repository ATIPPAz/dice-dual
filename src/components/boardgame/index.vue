<template>
  {{ prop.boardHolder }}
  {{ boardGame }}
  <button @click="test">ad</button>
  <div class="board-game" :class="{ enemy: prop.boardHolder === Board.ENEMY_BOARD }">
    <div v-for="column in cellColumnNumber">
      <BoardGameCell :board-holder="prop.boardHolder" v-for="row in cellRowNumber" />
    </div>
  </div>
  <Dice />
</template>
<script setup lang="ts">
import BoardGameCell from './BoardGameCell.vue'
import Dice  from '../dice/diceExtension.vue'

import { Board } from '@/enum/board'
import {ref} from 'vue'
const prop = defineProps<{ boardHolder: Board }>()
const cellRowNumber = 3
const cellColumnNumber = 3
function test(){
  boardGame.value[1][2] = 2
}
const boardGame = ref<null[][]|number[][]>([[null,null,null],[null,null,null],[null,null,null]])
</script>
<style scoped>
.board-game {
  border-radius: 10px;
  border: 1px solid #ececed;
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
