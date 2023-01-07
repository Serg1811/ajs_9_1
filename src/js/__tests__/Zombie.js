import Zombie from '../Zombie';

test('Zombie', () => {
  const expected = {
    _attack: 40,
    _defence: 10,
    _distanceAttack: 1,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Zombie',
  };
  const received = new Zombie('player1', 'Zombie');
  expect(received).toEqual(expected);
});
