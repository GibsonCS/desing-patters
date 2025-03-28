import type { IUser } from "../interfaces/User.ts";

export class Teacher implements IUser {
  assistir(): boolean {
    throw new Error("Method not implemented.");
  }
  login(): boolean {
    throw new Error("Method not implemented.");
  }
  getName(): string {
    throw new Error("Method not implemented.");
  }
  getLogin(): string {
    return "teacher.login";
  }
}
