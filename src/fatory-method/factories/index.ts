import { AbstractUserFactory } from "./AbstractUserFactory.ts";
import { StudentFactory } from "./StudentFactory.ts";
import { TeacherFactory } from "./TeacherFactory.ts";
import type { IUser } from "../interfaces/User.ts";

const createUserInstance = (factory: AbstractUserFactory): IUser => {
  return factory.create();
};

const student = createUserInstance(new StudentFactory());
const teacher = createUserInstance(new TeacherFactory());

console.log(student.assistir());
console.log(teacher.getLogin());
