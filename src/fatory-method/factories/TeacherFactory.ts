import type { IUser } from "../interfaces/User.ts";
import { Teacher } from "../models/Teacher.ts";
import { AbstractUserFactory } from "./AbstractUserFactory.ts";

export class TeacherFactory extends AbstractUserFactory {
  create(): IUser {
    return new Teacher();
  }
}
