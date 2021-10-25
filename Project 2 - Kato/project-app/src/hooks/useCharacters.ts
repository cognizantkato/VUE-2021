import { ActionDetails } from "@/interfaces/ActionDetails";
import { CharacterInfo } from "@/interfaces/CharacterInfo";
import { Skill } from "@/interfaces/Skill";
import { reactive } from "@vue/runtime-core";

const useCharacters = () => {
  const skills = [
    {
      name: "Heavy Punch",
      manaDamage: 0,
      healthDamage: 20,
      manaCost: 20,
      healthRestore: 0,
    },
    {
      name: "Focus Punch",
      manaDamage: 10,
      healthDamage: 10,
      manaCost: 20,
      healthRestore: 0,
    },
    {
      name: "Heal",
      manaDamage: 0,
      healthDamage: 0,
      manaCost: 20,
      healthRestore: 10,
    },
  ] as Skill[];

  const player = reactive<CharacterInfo>({
    name: "Player",
    health: 100,
    mana: 0,
    skills: skills,
  });

  const enemy = reactive<CharacterInfo>({
    name: "Enemy",
    health: 100,
    mana: 100,
    skills: skills,
  });

  const onPlayersTurn = (action: ActionDetails) => {
    const health = player.health + action.healthRestore;
    const mana = player.mana + action.manaRestore - action.manaCost;
    const enemyHealth = enemy.health - action.healthDamage;
    const enemyMana = enemy.mana - action.manaDamage;

    player.health = health <= 0 ? 0 : health > 100 ? 100 : health;
    player.mana = mana <= 0 ? 0 : mana > 100 ? 100 : mana;
    enemy.health = enemyHealth <= 0 ? 0 : enemyHealth > 100 ? 100 : enemyHealth;
    enemy.mana = enemyMana <= 0 ? 0 : enemyMana > 100 ? 100 : enemyMana;
  };

  const onEnemyTurn = (action: ActionDetails) => {
    const health = enemy.health + action.healthRestore;
    const mana = enemy.mana + action.manaRestore - action.manaCost;
    const playerHealth = player.health - action.healthDamage;
    const playerMana = player.mana - action.manaDamage;

    enemy.health = health <= 0 ? 0 : health > 100 ? 100 : health;
    enemy.mana = mana <= 0 ? 0 : mana > 100 ? 100 : mana;
    player.health =
      playerHealth <= 0 ? 0 : playerHealth > 100 ? 100 : playerHealth;
    player.mana = playerMana <= 0 ? 0 : playerMana > 100 ? 100 : playerMana;
  };

  const onResetCharacters = () => {
    player.health = 100;
    player.mana = 100;
    enemy.health = 100;
    enemy.mana = 100;
  };

  return {
    enemy: enemy,
    player: player,
    onPlayersTurn: onPlayersTurn,
    onEnemyTurn: onEnemyTurn,
    onResetCharacters: onResetCharacters,
  };
};

export default useCharacters;
