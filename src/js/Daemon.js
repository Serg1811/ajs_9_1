import MagicCharacter from './MagicCharacter';

export default class Daemon extends MagicCharacter {
  constructor(name) {
    super(name, 'Daemon');
    this._attack = 100;
    this._defence = 40;
  }
}
