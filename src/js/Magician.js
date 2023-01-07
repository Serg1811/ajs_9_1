import MagicCharacter from './MagicCharacter';

export default class Magician extends MagicCharacter {
  constructor(name) {
    super(name, 'Magician');
    this._attack = 90;
    this._defence = 40;
  }
}
