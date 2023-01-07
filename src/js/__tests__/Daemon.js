import Daemon from '../Daemon';

test('Daemon', () => {
  const expected = {
    _attack: 100,
    _defence: 40,
    _distanceAttack: 1,
    health: 100,
    level: 1,
    name: 'player1',
    type: 'Daemon',
    _stoned: false,
  };
  const received = new Daemon('player1', 'Daemon');
  expect(received).toEqual(expected);
});

// test('type error in Daemon', () => {
//   function typeDaemon() {
//     return new Daemon('player1', 'sometype');
//   }

//   expect(typeDaemon).toThrowError(new Error('Некорректный тип персонажа'));
// });
