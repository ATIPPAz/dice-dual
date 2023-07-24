<template>
<div class="float-dice-container">
  <Dice :class="{'float-dice':isFloating}" @click="isFloating =!isFloating"  
    :value="12"
    :color="null"
    :float="false"
    :index="1"/>
</div>
</template>
<script setup>
import Dice from './index.vue'
import {ref} from 'vue'
const isFloating = ref(false)
</script>
<style scoped lang="scss">

.float-dice-container {
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