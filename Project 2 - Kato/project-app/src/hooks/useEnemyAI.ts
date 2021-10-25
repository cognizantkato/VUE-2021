import { ActionDetails } from "@/interfaces/ActionDetails";
import { CharacterInfo } from "@/interfaces/CharacterInfo";
import { Skill } from "@/interfaces/Skill";

const useEnemyAI = (enemy: CharacterInfo) => {
  const actions = [
    {
      moveName: "attack",
      healthDamage: 10,
      manaDamage: 0,
      healthRestore: 0,
      manaRestore: 0,
      manaCost: 0,
    },
    {
      moveName: "focus",
      healthDamage: 0,
      manaDamage: 0,
      healthRestore: 0,
      manaRestore: 20,
      manaCost: 0,
    },
  ] as ActionDetails[];

  const getEnemyAction = function():ActionDetails {
    const action = Math.floor(Math.random() * 3);
    return action === 2 ? getEnemySkills() : actions[action];
  };

  const getEnemySkills = function():ActionDetails {
    const action = Math.floor(Math.random() * 3);
    const skill = enemy.skills[action];
    if (canEnemyUseSkill(skill))
        return {
        moveName: skill.name,
        healthDamage: skill.healthDamage,
        manaDamage: skill.manaDamage,
        healthRestore: skill.healthRestore,
        manaRestore: 0,
        manaCost: skill.manaCost,
        } as ActionDetails;
    else 
        return getEnemyAction();
  };

  const canEnemyUseSkill = (skill: Skill) => {
    return enemy.mana >= skill.manaCost;
  }

  return {
      getEnemyAction: getEnemyAction
  }
};

export default useEnemyAI;
