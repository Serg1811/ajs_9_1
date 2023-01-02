import Magician from '../Magician';

test('Magician', () => {
  const expected = {
    attack: 90,
    defence: 40,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Magician',
  };
  const received = new Magician('player1', 'Magician');
  expect(received).toEqual(expected);
});

test('type error in Magician', () => {
  function typeMagician() {
    return new Magician('player1', 'sometype');
  }

  expect(typeMagician).toThrowError(new Error('Некорректный тип персонажа'));
});

test('Magician set stoned', () => {
  const expected = {
    attack: 90,
    defence: 40,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Magician',
    stoned: true,
  };
  const received = new Magician('player1', 'Magician');
  received.setStoned();
  expect(received).toEqual(expected);
});

test('Magician get stoned', () => {
  const received = new Magician('player1', 'Magician');
  received.setStoned();
  expect(received.getStoned()).toBe(true);
});

test('Magician set attack', () => {
  const expected = {
    attack: 64,
    defence: 40,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Magician',
    stoned: true,
  };
  const received = new Magician('player1', 'Magician');
  received.setStoned();
  received.setAttack(3);
  expect(received).toEqual(expected);
});

test('Magician get attack', () => {
  const received = new Magician('player1', 'Magician');
  received.setStoned();
  received.setAttack(3);
  expect(received.getAttack()).toBe(64);
});

test('Magician attack', () => {
  const expected = {
    attack: 90,
    defence: 40,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Magician',
  };
  const received = new Magician('player1', 'Magician');
  received.setAttack(1);
  expect(received).toEqual(expected);
});
