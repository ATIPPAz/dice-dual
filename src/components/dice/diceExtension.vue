<template>
  <div class="float-dice-container">
    <Dice
      :class="{ 'float-dice': isFloating }"
      @click="diceClick"
      :value="props.value!"
      :color="props.color!"
      :float="false"
      :index="1"
    />
  </div>
</template>
<script setup lang="ts">
import type { DiceColor, DiceNumber } from "@/enum/board";
import Dice from "./index.vue";
import { ref } from "vue";
import { useDiceStore } from "@/stores/dice";

const diceStore = useDiceStore()
const {setDiceValue} = diceStore
const isFloating = ref(false);
const props = defineProps<{
  value: DiceNumber | undefined;
  color: DiceColor | undefined;
  forbidFloat: boolean;
  index:number
}>();
const emit = defineEmits<{(e: 'placeSuccess',value:number): void}>()
async function diceClick() {
  if (props.forbidFloat) return;
  isFloating.value = !isFloating.value;
  const action = await setDiceValue(props.value!)
  if(!action){
    isFloating.value = false
    return
  }
  emit('placeSuccess',props.index)
}
</script>
<style scoped lang="scss">
.float-dice-container {
  display: block;
  position: relative;
}
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
</style>
