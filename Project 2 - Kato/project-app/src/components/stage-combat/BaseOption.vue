<template>
    <div class="option" @mouseover="mouseOver()" @mouseout="mouseOut()">
      <i v-show="active" class="arrow right"></i>
      <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const BaseOption = defineComponent({
    setup() {
        const active = ref<boolean>(false);

        const mouseOver = () => { 
            active.value = true;
        }

        const mouseOut = () => {
            active.value = false;
        }
        return {
            active:active,
            mouseOver: mouseOver,
            mouseOut: mouseOut
        }
    },
})
export default BaseOption;
</script>

<style scoped>
.option {
  margin-bottom: 40px;
  text-align: left;
  cursor:pointer;
}
.arrow {
  border: solid black;
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 3px;
  font-size: 20px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>