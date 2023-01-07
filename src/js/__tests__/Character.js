import Character from '../Character';
import Bowman from '../Bowman';

test('Character', () => {
  const expected = {
    type: undefined,
    _attack: 100,
    _defence: 40,
    _distanceAttack: 1,
    health: 100,
    level: 1,
    name: 'player1',
  };
  const received = new Character('player1');
  expect(received).toEqual(expected);
});

test('throw in Character', () => {
  function throwCharacter() {
    return new Character('q');
  }

  expect(throwCharacter).toThrowError(new Error('Длина имени должна быть от 2 до 10 символов'));
});

test('attack < 0', () => {
  const robin = new Bowman('robin');
  robin.attack = -20;
  expect(robin.attack).toBe(0);
});

test('superAttack > 0', () => {
  const robin = new Bowman('robin');
  robin.attack = 100;
  robin._distanceAttack = 3;
  expect(robin.attack).toBe(80);
});
