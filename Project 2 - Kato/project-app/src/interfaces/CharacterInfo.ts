import { Skill } from "./Skill";

export interface CharacterInfo {
    name: string,
    health: number,
    mana: number
    skills: Skill[]
}