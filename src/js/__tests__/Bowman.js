import Bowman from '../Bowman';

test('Bowman', () => {
  const expected = {
    _attack: 25,
    _defence: 25,
    _distanceAttack: 1,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Bowman',
  };
  const received = new Bowman('player1', 'Bowman');
  expect(received).toEqual(expected);
});
