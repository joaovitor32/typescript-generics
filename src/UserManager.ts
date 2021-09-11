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
    const elementExist = this.find(id);

    if (!elementExist) {
      throw new AppError('User does not exists');
    }

    const index = this.elements.indexOf(elementExist);

    if (index > -1) {
      this.elements.splice(index, 1);
    }
  }

  find(id: string): Readonly<Omit<User, 'password'>> {
    const response = this.elements.find(element => element.user.id === id);

    return { user: response.user };
  }
}

export default UserManager;
