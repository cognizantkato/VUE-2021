import { Skill } from "./Skill";

export interface ClassType {
    name: string,
    health: number,
    mana: number,
    skills: Skill[]
}