const app = Vue.createApp({
  data() {
    return {
      actionLogs: [
      ],
      player: {
        name: "You",
        health: 100,
        action: null,
      },
      goblin: {
        name: "Goblin",
        health: 100,
        action: null,
      },
      actions: [
        {
          key: "A",
          name: "Attack",
          damage: 10,
          type: "damage",
        },
        {
          key: "HA",
          name: "Heavy Attack",
          damage: 20,
          type: "heavy damage",
        },
        {
          key: "D",
          name: "Defend",
          damage: 0,
          type: "defend",
        },
      ]
    };
  },
  methods: {
    action(action) {
      this.player.action = this.actions.find((a) => a.key === action);
      const index = Math.floor(Math.random() * 3);
      this.goblin.action = this.actions[index];
    },
    generateActionLog(player, actualDamage) {
      if (player.action.damage > 0 && actualDamage === 0) {
        return `${player.name} used ${player.action.name}! attack missed!`;
      } else if (player.action.type === "defend" && actualDamage > 0) {
        return `${player.name} used ${player.action.name}! counters ${actualDamage} points of damage! `;
      } else if (player.action.type === "defend") {
        return `${player.name} used ${player.action.name}!`;
      } else {
        return `${player.name} used ${player.action.name}! deals ${actualDamage} points of damage!`;
      }
    },
    reset() {
      this.player.health = 100;
      this.goblin.health = 100;
      this.actionLogs = [];
    },
  },
  computed: {
    goblinHealthDisplay() {
      return { width: `${this.goblin.health}%` };
    },
    playerHealthDisplay() {
      return { width: `${this.player.health}%` };
    },
    goblinDamage() {
      if (this.player.action.type === "defend") {
        return this.goblin.action.type === "heavy damage"
          ? 0
          : this.goblin.action.damage / 2;
      } else if (
        this.goblin.action.type === "defend" &&
        this.player.action.type === "heavy damage"
      ) {
        return this.player.action.damage;
      } else {
        return this.goblin.action.damage;
      }
    },
    playerDamage() {
      if (this.goblin.action.type === "defend") {
        return this.player.action.type === "heavy damage"
          ? 0
          : this.player.action.damage / 2;
      } else if (
        this.player.action.type === "defend" &&
        this.goblin.action.type === "heavy damage"
      ) {
        return this.goblin.action.damage;
      } else {
        return this.player.action.damage;
      }
    },
    isDone() {
      return this.player.health === 0 || this.goblin.health === 0;
    }, 
    gameEndingMessage() {
      if (this.player.health > 0)  {
        return "YOU WIN!"
      } else if (this.player.health === 0 && this.goblin.health === 0) {
        return "DRAW!";
      } else {
        return "YOU LOSE!";
      }
    }
  },
  watch: {
    currentAction(value) {},
    player: {
      deep: true,
      handler(value) {
        if (value.action) {
          console.log(`Player Action: ${this.player.action.key}`);
          console.log(`Goblin Action: ${this.goblin.action.key}`);

          const playerHealth = this.player.health - this.goblinDamage;
          const goblinHealth = this.goblin.health - this.playerDamage;
          this.player.health = playerHealth >= 0 ? playerHealth : 0;
          this.goblin.health = goblinHealth >= 0 ? goblinHealth : 0;
          console.log(`Player Health: ${this.player.health}`);
          console.log(`Goblin Health: ${this.goblin.health}`);
          
          this.actionLogs.unshift(this.generateActionLog(this.goblin, this.goblinDamage));
          this.actionLogs.unshift(this.generateActionLog(this.player, this.playerDamage));

          this.goblin.action = null;
          this.player.action = null;
        } else {
          this.isActionDisabled = false;
        }
      },
    }
  },
});

app.mount("#app-game");
