const Player = require('../models/playerModel');
const { pairPlayers } = require('../game/pairing');
const { processRound } = require('../game/roundLogic');

const players = [
  new Player('Rui1', '3-A'),
  new Player('Rui2', '3-A'),
  new Player('Rui3', '3-B'),
  new Player('Rui4', '3-B')
];

// Pair them
const pairs = pairPlayers(players);

// Submit actions
pairs.forEach(([p1, p2]) => {
  if (p1.experimentType === '3-A') {
    p1.submitAction('C');
    p2.submitAction('D');
  } else {
    p1.submitAction('2'); // effort level
    p2.submitAction('3');
  }

  processRound(p1, p2);
});

// Log results
players.forEach(p => {
  console.log(`Player ${p.id} - Total Payoff: ${p.payoff}`);
  console.log(p.history);
});
