<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <p class="game-end-msg">{{ gameEndingMessage }}</p>
      <span @click="reset()">PLAY AGAIN</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

const StageModal = defineComponent({
  props: {
    show: Boolean,
    result: String,
  },
  setup(props, context) {
    const gameEndingMessage = computed(() => {
      const result = props.result;
      if (result === "win") {
        return "YOU WIN!";
      } else if (result === "draw") {
        return "DRAW!";
      } else {
        return "YOU LOSE!";
      }
    });
    const reset = () => {
      context.emit("onReset");
    };

    return {
      reset: reset,
      gameEndingMessage: gameEndingMessage,
    };
  },
});

export default StageModal;
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4); */
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  padding-top: 40px;
  border: 5px solid #000;
  width: 30%;
  border-radius: 7px;
  text-align: center;
}

.modal-content > span {
  background-color: #04aa6d;
  color:white;
  border: 2px solid #000;
  margin-right: 10px;
  padding: 10px 25px;
  min-width: 150px;
  border-radius: 7px;
  font-size: 25px;
  cursor:pointer;
}
.game-end-msg {
  font-size: 50px;
}
</style>
