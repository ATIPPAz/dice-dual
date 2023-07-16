<script setup lang="ts">
import ATPCard from '@/components/card/index.vue'
import BoardGame from '@/components/boardgame/index.vue'
import DiceSlot from '@/components/diceSlot/index.vue'
import { Board } from '@/enum/board'
</script>

<template>
  <main>
    <ATPCard rounded>dice game</ATPCard>
    <BoardGame :board-holder="Board.ENEMY_BOARD" />
    <BoardGame :board-holder="Board.MY_BOARD" />
    <DiceSlot />
  </main>
</template>
