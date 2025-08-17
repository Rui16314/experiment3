class Player {
  constructor(id, experimentType) {
    this.id = id; // unique identifier
    this.experimentType = experimentType; // '3-A' or '3-B'
    this.currentRound = 1;
    this.role = null; // 'Player1' or 'Player2'
    this.action = null; // 'U', 'C', 'D' or effort level
    this.payoff = 0;
    this.history = []; // store round-by-round data
  }

  assignRole(role) {
    this.role = role;
  }

  submitAction(action) {
    this.action = action;
  }

  recordPayoff(payoff) {
    this.payoff += payoff;
    this.history.push({
      round: this.currentRound,
      role: this.role,
      action: this.action,
      payoff
    });
    this.currentRound += 1;
    this.action = null;
    this.role = null;
  }
}

module.exports = Player;
