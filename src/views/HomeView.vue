<script setup lang="ts">
import ATPCard from "@/components/card/index.vue";
import BoardGame from "@/components/boardgame/index.vue";
import DiceSlot from "@/components/diceSlot/index.vue";
import { Board } from "@/enum/board";
import { ref } from "vue";
import { useSocketServerStore } from "@/stores/socket";
import type { JoinRoomFunction } from "@/stores/socket";

// const { joinRoom,onJoinRoom} = useSocketServerStore()

// onJoinRoom((data:JoinRoomFunction)=>{
// console.log(data);
// })

const roomId = ref();
</script>

<template>
  <main>
    <ATPCard rounded>dice game</ATPCard>
    <BoardGame :board-holder="Board.ENEMY_BOARD" />
    <BoardGame :board-holder="Board.MY_BOARD" />
    <DiceSlot />
    <!--     
    <v-text-field v-model="roomId" placeholder="sdasd" />
    <v-btn @click="joinRoom(roomId)">joinroom</v-btn> -->
  </main>
</template>
