<template>
  <base-stage>
    <template v-slot:enemyDetails>
      <character-details :info="enemy" />
    </template>
    <template v-slot:enemy>
      <character :type="'Enemy'" />
    </template>
    <template v-slot:playerDetails>
      <character-details :info="player" />
    </template>
    <template v-slot:player>
      <character :type="'Player'" />
    </template>
  </base-stage>
  <div class="stage-footer">
    <div>
      <combat-options
        @onPlayerAction="onPlayerAction"
        :player="player"
      ></combat-options>
    </div>
    <div>
      <combat-logs :logs="logs"></combat-logs>
    </div>
  </div>
  <stage-modal :show="isDone" :result="result" @onReset="onReset"></stage-modal>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import CharacterDetails from "./CharacterDetails.vue";
import Character from "./Character.vue";
import BaseStage from "./BaseStage.vue";
import CombatOptions from "./CombatOptions.vue";
import CombatLogs from "./CombatLogs.vue";
import { ActionDetails } from "@/interfaces/ActionDetails";
import useLogs from "../../hooks/useLogs";
import useCharacters from "../../hooks/useCharacters";
import useEnemyAI from "../../hooks/useEnemyAI";
import StageModal from "./StageModal.vue";

const StageCombat = defineComponent({
  components: {
    CharacterDetails: CharacterDetails,
    character: Character,
    combatOptions: CombatOptions,
    baseStage: BaseStage,
    combatLogs: CombatLogs,
    stageModal: StageModal,
  },
  setup() {
    const { logs, addLogs, onResetLogs } = useLogs();
    const {
      player,
      enemy,
      onPlayersTurn,
      onEnemyTurn,
      onResetCharacters,
    } = useCharacters();
    const { getEnemyAction } = useEnemyAI(enemy);

    const onPlayerAction = (action: ActionDetails) => {
      onPlayersTurn(action);
      addLogs(player.name, action);
      onEnemyAction();
    };

    const onEnemyAction = () => {
      const action = getEnemyAction();
      onEnemyTurn(action);
      addLogs(enemy.name, action);
    };

    const isDone = computed(() => {
      return player.health === 0 || enemy.health === 0;
    });
    const result = computed(() => {
      if (player.health > 0) {
        return "win";
      } else if (player.health === 0 && enemy.health === 0) {
        return "draw";
      } else {
        return "lose";
      }
    });

    const onReset = () => {
      onResetLogs();
      onResetCharacters();
    };

    return {
      player: player,
      enemy: enemy,
      onPlayerAction: onPlayerAction,
      logs: logs,
      isDone: isDone,
      result: result,
      onReset: onReset,
    };
  },
});

export default StageCombat;
</script>

<style scoped>
.stage-footer {
  margin-top: 20px;
}

.stage-footer > div:first-child {
  display: block;
  width: 33%;
  float: left;
}
.stage-footer > div:nth-child(2) {
  display: block;
  width: 65%;
  float: right;
}
</style>

<style>
.h-damage {
  background-color: #ff0000;
}
.m-damage {
  background-color: #916bbf;
}
.mana-cost {
  background-color: #3146b0;
}
.mana-restore {
  background-color: #0f00ff;
}
.heal {
  background-color: #04aa6d;
}
</style>
