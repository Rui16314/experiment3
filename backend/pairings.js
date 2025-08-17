// pairing.js
function pairPlayers(playerList) {
  const unpaired = [...playerList].filter(p => !p.role);
  const shuffled = unpaired.sort(() => Math.random() - 0.5);

  const pairs = [];
  for (let i = 0; i < shuffled.length - 1; i += 2) {
    const player1 = shuffled[i];
    const player2 = shuffled[i + 1];

    player1.assignRole('Player1');
    player2.assignRole('Player2');

    pairs.push([player1, player2]);
  }

  return pairs;
}

module.exports = { pairPlayers };
