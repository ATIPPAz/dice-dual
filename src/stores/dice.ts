import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDiceStore = defineStore('dice', () => {
  const diceState = ref<null | number>(null)
  const returnDiceState = ref(false)
  const diceValue = computed(() => diceState.value)
  const returnDice = computed(() => returnDiceState.value)
  function setDiceValue(value: number) {
    diceState.value = value
  }
  function resetDiceValue() {
    diceState.value = null
  }
  function hasValue() {
    return diceState.value !== null
  }
  function setReturnDice() {
    returnDiceState.value = true
  }
  function resetReturnDice() {
    returnDiceState.value = false
  }
  return { diceValue, setDiceValue, resetDiceValue, hasValue, returnDice, setReturnDice, resetReturnDice }
})
