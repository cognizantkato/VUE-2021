<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <base-option v-for="(skill, index) in player.skills" :key="index">
        <span class="skill-option" :class="canUseSkill(skill) ? '': 'disabled-skill'" @click="onSelectSkill(skill)">
          {{ skill.name }}
          <span v-if="skill.healthDamage !== 0" class="skill-detail h-damage"
            >D:{{ skill.healthDamage }}</span
          >
          <span v-if="skill.manaDamage !== 0" class="skill-detail m-damage"
            >MD:{{ skill.manaDamage }}</span
          >
          <span v-if="skill.manaCost !== 0" class="skill-detail mana-cost"
            >MC:{{ skill.manaCost }}</span
          >
          <span v-if="skill.healthRestore !== 0" class="skill-detail heal"
            >H:{{ skill.healthRestore }}</span
          >
        </span>
      </base-option>
      <base-option>
        <span class="skill-option" @click="onClickCancel()">Cancel</span>
      </base-option>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Prop, computed } from "vue";
import BaseOption from "./BaseOption.vue";
import { Skill } from "@/interfaces/Skill";
import { ActionDetails } from "@/interfaces/Actiondetails";
import { CharacterInfo } from "@/interfaces/CharacterInfo";

const CombatSkills = defineComponent({
  components: {
    baseOption: BaseOption,
  },
  props: {
    show: Boolean,
    player: { required: true } as Prop<CharacterInfo>,
  },
  setup(props, context) {
    const onClickCancel = () => {
      context.emit("onClose");
    };

    const onSelectSkill = (skill: Skill) => {
      if (canUseSkill(skill)) {
        context.emit("onSelectSkill", {
          moveName: skill.name,
          healthDamage: skill.healthDamage,
          manaDamage: skill.manaDamage,
          healthRestore: skill.healthRestore,
          manaRestore: 0,
          manaCost: skill.manaCost,
        } as ActionDetails);
      }
    };

    const canUseSkill = (skill: Skill) => {
      const mana = props.player?.mana;
      return (mana as number) >= skill.manaCost;
    };

    

    return {
      onClickCancel: onClickCancel,
      onSelectSkill: onSelectSkill,
      canUseSkill: canUseSkill
    };
  },
});
export default CombatSkills;
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
  width: 50%;
  border-radius: 7px;
  font-size: 40px;
}
.skill-option {
  margin-left: 60px;
}
.skill-detail {
  padding: 5px 15px;
  margin-right: 5px;
  border-radius: 10px;
  color: #fff;
}

.disabled-skill { 
  color: #d3d3d3;
}
</style>
