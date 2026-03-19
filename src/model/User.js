class User {
  static sequencer = 0;

  constructor(name) {
    this.id = ++User.sequencer;
    this.name = name;
  }
}

export default User;