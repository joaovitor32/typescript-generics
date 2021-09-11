export interface User {
  id: string;
  name: string;
  birthday: Date;
  password: string;
}

export interface Manager<T> {
  elements: T[];
  push(object: T): void;
  multiplePushs(objects: T[]): void;
  delete(id: string): void;
  find(id: string): Readonly<Omit<T, 'password'>>;
}
