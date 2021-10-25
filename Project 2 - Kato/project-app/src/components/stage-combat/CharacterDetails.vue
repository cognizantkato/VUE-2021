<template>
  <div class="details-container">
    <div class="row name-container">
      <span>{{info.name}}</span>
    </div>
    <div class="row">
      <div class="bar-container">
        <div class="bar-name"><span>HP</span></div>
        <div class="bar">
          <div class="health-bar" :style="healthDisplay"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="bar-container">
        <div class="bar-name"><span>MP</span></div>
        <div class="bar">
          <div class="mana-bar" :style="manaDisplay"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Prop } from "vue";
import { CharacterInfo } from "@/interfaces/CharacterInfo";

const CharacterDetails = defineComponent({
  props: { 
    info: { required: true } as Prop<CharacterInfo> 
  },
  setup(props) {
    const healthDisplay = computed(() => {
      return {
        width: `${props?.info?.health}%`
      };
    });
    const manaDisplay = computed(() => {
      return {
        width: `${props?.info?.mana}%`
      };
    });
    return {
      healthDisplay: healthDisplay,
      manaDisplay: manaDisplay
    };
  }
});

export default CharacterDetails;
</script>

<style scoped>
.row {
  position: relative;
  height: 60px;
}
.name-container {
  text-align: left;
  font-size: 40px;
}
.details-container {
  font-family: "Common Pixel", sans-serif;
  background-color: #cccccc;
  padding: 15px 30px;
  margin-left: 40px;
  width: 70%;
  margin: 0 auto;

  border-radius: 50px 10px;
}
.bar-container {
  position: absolute;
  right: 2px;
  background-color: #000;
  width: 70%;
  height: 45px;
  border-radius: 25px;
}
.bar-container > div {
  display: inline-block;
}
.bar-name {
  color: #fff;
  font-size: 40px;
  float: left;
  text-align: right;
  width: 15%;
  margin-top: 2px;
}
.bar {
  float: right;
  margin-top: 3px;
  margin-right: 4px;
  width: 80%;
  border-radius: 25px;
  background-color: #ddd;
  border: 4px solid #fff;
}

.health-bar {
  border-radius: 25px;
  height: 30px;
  background-color: #04aa6d;
}

.mana-bar {
  border-radius: 25px;
  height: 30px;
  background-color: #3146b0;
}
</style>
