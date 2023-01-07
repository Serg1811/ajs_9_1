import Character from './Character';

export default class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this._attack = 25;
    this._defence = 25;
  }
}
