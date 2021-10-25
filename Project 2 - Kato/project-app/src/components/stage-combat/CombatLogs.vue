<template>
  <div class="combat-logs">
    <div v-for="(log, index) in logs" :key="index">
      {{log.message}}
          <span v-if="log.details.healthDamage !== 0" class="log-detail h-damage"
            >D:{{ log.details.healthDamage }}</span
          >
          <span v-if="log.details.manaDamage !== 0" class="log-detail m-damage"
            >MD:{{ log.details.manaDamage }}</span
          >
          <span v-if="log.details.manaCost !== 0" class="log-detail mana-cost"
            >MC:{{ log.details.manaCost }}</span
          >
          <span v-if="log.details.manaRestore !== 0" class="log-detail mana-restore"
            >MR:{{ log.details.manaRestore }}</span
          >
          <span v-if="log.details.healthRestore !== 0" class="log-detail heal"
            >H:{{ log.details.healthRestore }}</span
          >
    </div>
  </div>
</template>

<script lang="ts">
import { ActionLogs } from "@/interfaces/ActionLogs";
import { defineComponent, Prop, ref } from "vue";

const CombatLogs = defineComponent({
  props: {
    logs: { required: true } as Prop<ActionLogs>,
  }
});
export default CombatLogs;
</script>

<style scoped>
.combat-logs {
  border: 5px solid #000;
  height: 275px;
  overflow-y: auto;
  border-radius: 10px;
}

.combat-logs > div {
  margin-top: 15px;
  font-size: 25px;
  text-align: right;
  padding-right: 30px;
}

.log-detail { 
  padding: 5px 15px;
  margin-right: 5px;
  border-radius: 10px;
  color: #fff;
}
</style>
