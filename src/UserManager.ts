import AppError from 'Error/AppError';

import { Manager } from './types';
import User from './User';

class UserManager implements Manager<User> {
  elements: User[] = [];

  push(object: User): void {
    this.elements.push(object);
  }

  multiplePushs(objects: User[]): void {
    objects.forEach(element => {
      this.elements.push(element);
    });
  }

  delete(id: string): void {
    const index = this.elements.findIndex(element => element.id === id);

    if (index === -1) {
      throw new AppError('User does not exists');
    }

    if (index > -1) {
      this.elements.splice(index, 1);
    }
  }

  find(id: string): Readonly<Omit<User, 'password'>> {
    const user = this.elements.find(element => element.id === id);

    return {
      id: user.id,
      name: user.name,
      birthday: user.birthday,
    };
  }

  getUserProperty<User, K extends keyof User>(object: User, key: K): User[K] {
    return object[key];
  }
}

export default UserManager;
