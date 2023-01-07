import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this._attack = 40;
    this._defence = 10;
  }
}
