import User from './src/User';
import UserManager from './src/UserManager';

const userManager = new UserManager();

const user1 = new User({
  id: '1',
  name: 'João Vitor 1',
  birthday: new Date(),
  password: 'senha1',
});

const user2 = new User({
  id: '2',
  name: 'João Vitor 2',
  birthday: new Date(),
  password: 'senha 2',
});

const user3 = new User({
  id: '2',
  name: 'João Vitor 2',
  birthday: new Date(),
  password: 'senha 2',
});

userManager.multiplePushs([user1, user2, user3]);
