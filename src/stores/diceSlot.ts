import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { DiceColor, DiceNumber, mapDiceColor, mapDiceNumber } from '@/enum/board'
import {useDiceStore} from './dice'
export const useDiceSlotStore = defineStore('diceSlot', () => {
  const {setDiceValue,resetDiceValue,resetDiceFloat} = useDiceStore()
  const diceSlotState = ref<{ value: number; color: DiceColor }[]>([])
  const diceSlot = computed(()=> diceSlotState.value)
  
  function addNewRandomDice(){
    const rand = Math.floor(Math.random() * 6) + 1
    setDiceValue(rand)
    diceSlot.value.push({ value: mapDiceNumber(rand), color: mapDiceColor(rand) })
    putdownDice()
  }
  function removeDiceInSlot(){
    diceSlot.value.pop()
    resetDiceValue()
  }
  function putdownDice(){
  resetDiceValue()
  resetDiceFloat()
  }
  addNewRandomDice()
  addNewRandomDice()

  return{
    addNewRandomDice,
    removeDiceInSlot,
    putdownDice,
    diceSlot
  }
})
