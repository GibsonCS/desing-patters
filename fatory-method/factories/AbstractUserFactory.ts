import type { IUser } from "../interfaces/User.ts";

export abstract class AbstractUserFactory {
  abstract create(): IUser;

  //   create(): IUser {
  //     return this.create();
  //   }
}
