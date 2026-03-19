import User from '../model/User.js'

const USERS = [
  new User('Mattias Hellman'),
  new User('Sindhuja Parthasarathy'),
  new User('Iffat Zabin'),
  new User('Zackaria Azzoug'),
  new User('Alexander Haitin')
];

export function getAll() {
  return USERS;
}

export function getbyId(id) {
  return USERS.find((user) => user.id === id)
}

export function getLoggedIn() {
  return USERS[0];
}