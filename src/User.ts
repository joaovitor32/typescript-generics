import { User as UserType } from './types';

export default class User {
  public user: UserType;

  constructor(user: UserType) {
    this.user = user;
  }
}
