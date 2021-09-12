import { User as UserType } from './types';

export default class User {
  public name: string;

  public password: string;

  public birthday: Date;

  public id: string;

  constructor(user: UserType) {
    this.id = user.id;
    this.name = user.name;
    this.birthday = user.birthday;
    this.password = user.password;
  }
}
