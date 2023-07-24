<template>
  {{ boardGame }}
  <div
    class="board-game"
    :class="{ enemy: props.boardHolder === Board.ENEMY_BOARD }"
  >
    <div v-for="column,index in boardGame" class="board-layout">
        <BoardGameCell @click="placeDice(index)">
            <Dice
              v-if="column"
              :forbid-float="props.boardHolder === Board.ENEMY_BOARD"
              :value="column.value"
              :color="column.color"
              :class="{
              'cursor-allow': true,
              'cursor-notallow': props.boardHolder === Board.ENEMY_BOARD,
            }"
            />    
        </BoardGameCell>
    </div>
  </div>
</template>
<script setup lang="ts">
import BoardGameCell from "./BoardGameCell.vue";
import Dice from "@/components/dice/DiceExtension.vue";

import { Board, DiceColor, DiceNumber } from "@/enum/board";
import { useDiceStore } from "@/stores/dice";

const diceStore = useDiceStore()
const {getDiceValue} = diceStore
import { ref } from "vue";
const props = defineProps<{ boardHolder: Board }>();
const cellRowNumber = 3;
const cellColumnNumber = 3;
function placeDice(index:number){
  boardGame.value[index] = getDiceValue()
}
interface Dice {
  value: DiceNumber;
  color: DiceColor;
}
const boardGame = ref<Array<null | Dice>>([
  { value: DiceNumber.Five, color: DiceColor.Five }, null, null,
  { value: DiceNumber.Two, color: DiceColor.Two }, null, null,
  null, null, null,
]);
</script>
<style scoped>
.board-layout{

}
.board-game {
  border-radius: 10px;
  border: 1px solid #ececed;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  padding: 2px;
  width: fit-content;
}
.enemy {
  border: 1px solid red;
}
.cursor-allow {
  cursor: pointer;
}
.cursor-notallow {
  cursor: no-drop;
}
</style>
