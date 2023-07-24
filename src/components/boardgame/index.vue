<template>
  <div
    class="board-game"
    :class="{ enemy: props.boardHolder === Board.ENEMY_BOARD }"
  >
    <div v-for="column in cellColumnNumber">
      <div v-for="row in cellRowNumber">
        <BoardGameCell>
          <div
            v-if="boardGame[column - 1][row - 1]"
            :class="{
              'cursor-allow': true,
              'cursor-notallow': props.boardHolder === Board.ENEMY_BOARD,
            }"
          >
            <Dice
              :forbid-float="props.boardHolder === Board.ENEMY_BOARD"
              :value="boardGame[column - 1][row - 1]?.value"
              :color="boardGame[column - 1][row - 1]?.color"
            />
          </div>
        </BoardGameCell>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BoardGameCell from "./BoardGameCell.vue";
import Dice from "@/components/dice/DiceExtension.vue";

import { Board, DiceColor, DiceNumber } from "@/enum/board";
import { ref } from "vue";
const props = defineProps<{ boardHolder: Board }>();
const cellRowNumber = 3;
const cellColumnNumber = 3;

interface Dice {
  value: DiceNumber;
  color: DiceColor;
}
const boardGame = ref<Array<Array<null | Dice>>>([
  [{ value: DiceNumber.Five, color: DiceColor.Five }, null, null],
  [{ value: DiceNumber.Two, color: DiceColor.Two }, null, null],
  [null, null, null],
]);
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
.cursor-allow {
  cursor: pointer;
}
.cursor-notallow {
  cursor: no-drop;
}
</style>
