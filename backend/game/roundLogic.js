function processRound(player1, player2) {
  const type = player1.experimentType; // assuming both have same type
  const action1 = player1.action;
  const action2 = player2.action;

  let payoff1 = 0;
  let payoff2 = 0;

  if (type === '3-A') {
    // Prisoner's Dilemma logic
    if (action1 === 'C' && action2 === 'C') {
      payoff1 = 3;
      payoff2 = 3;
    } else if (action1 === 'D' && action2 === 'D') {
      payoff1 = 1;
      payoff2 = 1;
    } else if (action1 === 'C' && action2 === 'D') {
      payoff1 = 0;
      payoff2 = 5;
    } else if (action1 === 'D' && action2 === 'C') {
      payoff1 = 5;
      payoff2 = 0;
    }
  } else if (type === '3-B') {
    // Effort game logic
    const effort1 = parseInt(action1);
    const effort2 = parseInt(action2);
    const totalEffort = effort1 + effort2;

    payoff1 = totalEffort - effort1;
    payoff2 = totalEffort - effort2;
  }

  player1.recordPayoff(payoff1);
  player2.recordPayoff(payoff2);
}

module.exports = { processRound };
