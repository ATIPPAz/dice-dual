import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { DiceColor, mapDiceColor, mapDiceNumber } from '@/enum/board'
export interface Dice {
  value: number
  color: DiceColor
  float: boolean
}
export const useDiceSlotStore = defineStore('diceSlot', () => {
  const diceSlotState = ref<Dice[]>([])
  const diceSlot = computed(() => diceSlotState.value)
  const diceSelect = computed(() => selectIndexState.value !== null ? diceSlotState.value[selectIndexState.value] : null)
  const selectIndexState = ref<number | null>(null)
  const selectIndex = computed(() => selectIndexState.value)

  function addNewRandomDice() {
    const rand = Math.floor(Math.random() * 6) + 1
    diceSlot.value.push({ value: mapDiceNumber(rand), color: mapDiceColor(rand), float: false })
  }

  function selectDice(index: number) {
    resetDiceSlot()
    selectIndexState.value = index
    putUpDice(index)
  }

  function hasDice() {
    return selectIndexState.value !== null
  }

  function getDiceWithIndex(index: number) {
    return diceSlot.value[index]
  }

  function resetDiceSlot() {
    diceSlot.value.forEach((e, index) => {
      putdownDice(index)
    })
    selectIndexState.value = null
  }

  function removeDiceInSlot(index: number | null, addNewDice: boolean) {
    if (index !== null) {
      putdownDice(index)
      selectIndexState.value = null
      diceSlot.value.splice(index, 1)
      if (addNewDice) {
        addNewRandomDice()
      }
    }
  }
  function putdownDice(index: number) {
    diceSlot.value[index].float = false
  }
  function putUpDice(index: number) {
    diceSlot.value[index].float = true
  }
  addNewRandomDice()
  addNewRandomDice()
  addNewRandomDice()
  return {
    addNewRandomDice,
    removeDiceInSlot,
    diceSlot,
    diceSelect,
    selectIndex,
    resetDiceSlot,
    selectDice,
    hasDice,
    getDiceWithIndex
  }
})
