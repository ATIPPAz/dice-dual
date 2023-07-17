import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { DiceColor, mapDiceColor, mapDiceNumber } from '@/enum/board'
export const useDiceStore = defineStore('dice', () => {
  const diceState = ref<null | number>(null)
  const returnDiceState = ref(false)
  const diceFloatState = ref(false)
  const colorDiceState = ref<DiceColor | null>(null)
  const diceValue = computed(() => diceState.value)
  const colorDice = computed(() => colorDiceState.value)

  const returnDice = computed(() => returnDiceState.value)
  const diceFloat = computed(() => diceFloatState.value)
  function setDiceValue(value: number) {
    diceState.value = mapDiceNumber(value)
    colorDiceState.value = mapDiceColor(value)
  }

  function resetDiceValue() {
    diceState.value = null
  }
  function hasValue() {
    return diceState.value !== null
  }
  function setDiceFloat() {
    diceFloatState.value = true
  }
  function resetDiceFloat() {
    diceFloatState.value = false
  }
  return {
    diceValue,
    setDiceValue,
    resetDiceValue,
    hasValue,
    returnDice,
    diceFloat,
    setDiceFloat,
    resetDiceFloat,
    colorDice
  }
})
