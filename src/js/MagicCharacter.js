import Character from './Character';

export default class MagicCharacter extends Character {
  setStoned() {
    this.stoned = true;
  }

  getStoned() {
    return this.stoned;
  }

  setAttack(x) {
    if (x > 1) {
      this.attack -= (this.attack * ((x - 1) / 10));
    }

    if (this.stoned) {
      this.attack = Math.round(this.attack - Math.log2(x) * 5);
    }
    return this.attack;
  }

  getAttack() {
    return this.attack;
  }
}
