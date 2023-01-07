export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    this.type = type;
    this._attack = 100;
    this._defence = 40;
    this._distanceAttack = 1;
    this.health = 100;
    this.level = 1;
  }

  get attack() {
    const superAttack = Math.round(this._attack * (1 - ((this._distanceAttack - 1) / 10)));
    return superAttack > 0 ? superAttack : 0;
  }

  set attack(attack) {
    this._attack = attack;
  }
}
