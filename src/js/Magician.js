import Character from './MagicCharacter';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name);
    if (type !== 'Magician') {
      throw new Error('Некорректный тип персонажа');
    } else {
      this.type = type;
    }
    this.attack = 90;
    this.defence = 40;
  }
}
