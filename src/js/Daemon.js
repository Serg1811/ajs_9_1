import Character from './MagicCharacter';

export default class Daemon extends Character {
  constructor(name, type = 'Daemon') {
    super(name);
    if (type !== 'Daemon') {
      throw new Error('Некорректный тип персонажа');
    } else {
      this.type = type;
    }
    this.attack = 100;
    this.defence = 40;
  }
}
