import { AbstractUserFactory } from "./fatory-method/factories/AbstractUserFactory.ts";
import { StudentFactory } from "./fatory-method/factories/StudentFactory.ts";
import { TeacherFactory } from "./fatory-method/factories/TeacherFactory.ts";
import type { IUser } from "./fatory-method/interfaces/User.ts";

const createUserInstance = (factory: AbstractUserFactory): IUser => {
  return factory.create();
};

const student = createUserInstance(new StudentFactory());
const teacher = createUserInstance(new TeacherFactory());

console.log(student.assistir());
console.log(teacher.getLogin());
