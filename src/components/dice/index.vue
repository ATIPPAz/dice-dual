<template>
  <div
    class="dice"
    :class="{ hasValue: props.value, cursor: props.isMove }"
    :style="color"
  >
    {{ props.value }}
  </div>
</template>
<script setup lang="ts">
import { useDiceSlotStore } from "@/stores/diceSlot";
import { DiceNumber, DiceColor } from "@/enum/board";
import { computed } from "vue";
const { selectDice } = useDiceSlotStore();
const props = defineProps<{
  isMove?: boolean;
  value: DiceNumber;
  color: DiceColor;
}>();

const color = computed(() => `background-color:${props.color}`);

// function select() {
//   if (props.isMove) {
//     selectDice(props.index!)
//   }
// }
</script>
<style scoped lang="scss">
.float-dice {
  position: absolute;
  animation-name: floating-up;
  animation-duration: 0.075s;
  top: -10px;
  animation-timing-function: linear;
}
@keyframes floating-up {
  0% {
    top: 0px;
  }
  25% {
    top: -5px;
  }
  50%,
  100% {
    top: -10px;
  }
  75% {
    top: -15px;
  }
}
.dice {
  width: 48px;
  height: 48px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hasValue {
  border: 1px solid black;
}
.cursor {
  cursor: pointer;
}
</style>
