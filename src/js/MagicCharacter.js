import Character from './Character';

export default class MagicCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this._stoned = false;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  get attack() {
    let superAttack = (this._attack * (1 - ((this._distanceAttack - 1) / 10)));
    if (this._stoned) {
      superAttack -= Math.round(Math.log2(this._distanceAttack) * 5);
    }
    return superAttack > 0 ? superAttack : 0;
  }

  set attack(attack) {
    this._attack = attack;
  }
}
