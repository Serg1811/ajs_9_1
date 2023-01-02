export default class Character {
  constructor(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    this.health = 100;
    this.level = 1;
  }
}
