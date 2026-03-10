class User {
  static identity = 0;

  constructor(name) {
    this.id = ++User.identity;
    this.name = name;
  }
}

export default User;