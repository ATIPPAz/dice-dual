import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { DiceColor, DiceNumber, mapDiceColor, mapDiceNumber } from "@/enum/board";
export const useDiceStore = defineStore("dice", () => {
  const diceState = ref<DiceNumber | null>(null);
  const returnDiceState = ref(false);
  const diceFloatState = ref(false);
  const colorDiceState = ref<DiceColor | null>(null);
  const diceValue = computed(() => diceState.value);
  const colorDice = computed(() => colorDiceState.value);
  let promiseSelectDiceAction: any = null
  const returnDice = computed(() => returnDiceState.value);
  const diceFloat = computed(() => diceFloatState.value);
  const hasSelected = computed(() => promiseSelectDiceAction !== null);

  function setDiceValue(value: DiceNumber) {
    diceState.value = value
    colorDiceState.value = mapDiceColor(value);
    if (promiseSelectDiceAction !== null) {
      promiseSelectDiceAction(false)
    }
    return new Promise(res => promiseSelectDiceAction = res)
  }


  function getDiceValue() {
    if (diceState.value) {
      const _diceState = { value: diceState.value!, color: colorDiceState.value! }
      diceState.value = null
      colorDiceState.value = null
      promiseSelectDiceAction(true)
      return _diceState
    }
    promiseSelectDiceAction(false)
    return null
  }

  function resetDiceValue() {
    diceState.value = null;
  }
  function hasValue() {
    return diceState.value !== null;
  }
  function setDiceFloat() {
    diceFloatState.value = true;
  }
  function resetDiceFloat() {
    diceFloatState.value = false;
  }
  return {
    diceValue,
    setDiceValue,
    resetDiceValue, getDiceValue,
    hasValue,
    returnDice,
    diceFloat, hasSelected,
    setDiceFloat,
    resetDiceFloat,
    colorDice,
  };
});
