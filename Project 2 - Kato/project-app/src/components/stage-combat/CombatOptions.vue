<template>
  <div class="combat-options">
    <base-option
      ><span class="combat-option" @click="onClickAttack()"
        >ATTACK</span
      ></base-option
    >
    <base-option
      ><span class="combat-option" @click="onClickFocus()"
        >FOCUS</span
      ></base-option
    >
    <base-option
      ><span class="combat-option" @click="onClickSkills()"
        >SKILL</span
      ></base-option
    >
  </div>
  <combat-skills
    :show="showSkills"
    :player="player"
    @onClose="closeSkills"
    @onSelectSkill="onSelectSkill"
  ></combat-skills>
</template>

<script lang="ts">
import { defineComponent, ref, Prop, inject } from "vue";
import BaseOption from "./BaseOption.vue";
import CombatSkills from "./CombatSkills.vue";
import { ActionDetails } from "@/interfaces/ActionDetails"; 
import { CharacterInfo } from "@/interfaces/CharacterInfo";

const CombatOptions = defineComponent({
  components: {
    combatSkills: CombatSkills,
    baseOption: BaseOption,
  },
  props: {
    player: { requred: true } as Prop<CharacterInfo>
  },
  setup(props, context) {
    const activeHover = ref<string>("");
    const showSkills = ref<boolean>(false);

    const mouseOver = (type: string) => {
      activeHover.value = type;
    };

    const mouseOut = () => {
      activeHover.value = "";
    };
    const onClickSkills = () => {
      showSkills.value = true;
    };

    const closeSkills = () => {
      showSkills.value = false;
    };

    const onClickAttack = () => {
      context.emit("onPlayerAction", {
        moveName: "attack",
        healthDamage: 10,
        manaDamage: 0,
        healthRestore: 0,
        manaRestore: 0,
        manaCost: 0
      } as ActionDetails);
    };

    const onClickFocus = () => {
      context.emit("onPlayerAction", {
        moveName: "focus",
        healthDamage: 0,
        manaDamage: 0,
        healthRestore: 0,
        manaRestore: 20,
        manaCost: 0
      } as ActionDetails);
    };

    const onSelectSkill = (action: ActionDetails) => {
      context.emit("onPlayerAction", action);
      showSkills.value = false;
    }

    return {
      activeHover: activeHover,
      showSkills: showSkills,
      mouseOver: mouseOver,
      mouseOut: mouseOut,
      onClickSkills: onClickSkills,
      closeSkills: closeSkills,
      onClickFocus: onClickFocus,
      onClickAttack: onClickAttack,
      onSelectSkill:onSelectSkill
    };
  },
});
export default CombatOptions;
</script>

<style scoped>
.combat-option {
  margin-left: 40px;
}
.combat-options {
  border: 5px solid #000;
  border-radius: 10px;
  width: 74%;
  font-size: 40px;
  padding-top: 25px;
  height: 250px;
  padding-left: 25%;
}
</style>
