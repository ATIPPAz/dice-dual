<template>
  <div
    class="dice"
    @click="select"
    :class="{ hasValue: props.value, cursor: props.isMove }"
    :style="color"
  >
    {{ props.value }}
  </div>
</template>
<script setup lang="ts">
import { useDiceStore } from '@/stores/dice'
import { DiceNumber, DiceColor } from '@/enum/board'
import { computed,ref } from 'vue'
const float = ref(false)
const { setDiceValue, setDiceFloat, resetDiceFloat } = useDiceStore()
const props = withDefaults(
  defineProps<{
    isMove?: boolean
    value: DiceNumber | null
    color: DiceColor | null
  }>(),
  {
    isMove: false,
    color: null,
    value: null
  }
)

const color = computed(() => `background-color:${props.color}`)

function select() {
  if (props.isMove) {
    float.value = true
    setDiceFloat()
    setDiceValue(props.value!)
  }
}
</script>
<style scoped>
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
