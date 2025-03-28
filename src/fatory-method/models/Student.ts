import type { IUser } from "../interfaces/User.ts";

export class Student implements IUser {
  assistir(): boolean {
    return true;
  }
  login(): boolean {
    return true;
  }
  getName(): string {
    return "Gibson";
  }
  getLogin(): string {
    return "gibson.cruz";
  }
}
