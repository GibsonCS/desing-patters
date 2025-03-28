import type { IUser } from "../interfaces/User.ts";
import { Student } from "../models/Student.ts";
import { AbstractUserFactory } from "./AbstractUserFactory.ts";

export class StudentFactory extends AbstractUserFactory {
  public create(): IUser {
    return new Student();
  }
}
