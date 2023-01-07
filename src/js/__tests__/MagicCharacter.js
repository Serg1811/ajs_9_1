import MagicCharacter from '../MagicCharacter';
import Daemon from '../Daemon';
import Magician from '../Magician';

test('MagicCharacter', () => {
  const expected = {
    type: undefined,
    _attack: 100,
    _defence: 40,
    _distanceAttack: 1,
    health: 100,
    level: 1,
    name: 'player1',
    _stoned: false,
  };
  const received = new MagicCharacter('player1');
  expect(received).toEqual(expected);
});

test('throw in Character', () => {
  function throwCharacher() {
    return new MagicCharacter('q');
  }

  expect(throwCharacher).toThrowError(new Error('Длина имени должна быть от 2 до 10 символов'));
});

test('attack < 0', () => {
  const balrog = new Daemon('balrog');
  balrog.attack = -20;
  expect(balrog.attack).toBe(0);
});

test('superAttack < 0 and smoke', () => {
  const balrog = new Daemon('balrog');
  balrog.stoned = true;
  balrog._distanceAttack = 13;
  expect(balrog.attack).toBe(0);
});

test('superAttack > 0', () => {
  const balrog = new Daemon('balrog');
  balrog.attack = 100;
  balrog._distanceAttack = 3;
  expect(balrog.attack).toBe(80);
});

test('superAttack > 0 and smoke', () => {
  const gendalf = new Magician('gendalf');
  gendalf.stoned = true;
  expect(gendalf.stoned).toBeTruthy();
});

test('superAttack > 0 and smoke', () => {
  const gendalf = new Magician('gendalf');
  gendalf._attack = 200;
  gendalf._distanceAttack = 2;
  gendalf.stoned = true;
  expect(gendalf.attack).toBe(175);
});
