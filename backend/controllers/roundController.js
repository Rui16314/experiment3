// controllers/roundController.js
const { getUserById, saveRoundData } = require('../models/userModel');
const { calculatePayoff } = require('../utils/payoffUtils');
const { assignRoles, matchPlayers } = require('../utils/matchUtils');

async function startRound(roundNumber, experiment) {
  const players = await matchPlayers(); // Random pairing logic
  const roundResults = [];

  for (const [player1, player2] of players) {
    const roles = assignRoles(player1, player2, roundNumber, experiment);
    const actions = await getPlayerActions(player1.id, player2.id); // From frontend or bot fallback

    const payoffs = calculatePayoff(actions.x, actions.y, roles.player1IsX, experiment);

    const roundData = {
      roundNumber,
      experiment,
      player1_id: player1.id,
      player2_id: player2.id,
      player1_action: actions.x,
      player2_action: actions.y,
      player1_payoff: payoffs.p1,
      player2_payoff: payoffs.p2,
    };

    await saveRoundData(roundData);
    roundResults.push(roundData);
  }

  return roundResults;
}
