import Swordsman from '../Swordsman';

test('Swordsman', () => {
  const expected = {
    _attack: 40,
    _defence: 10,
    _distanceAttack: 1,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Swordsman',
  };
  const received = new Swordsman('player1', 'Swordsman');
  expect(received).toEqual(expected);
});
