// models/roundModel.js
const db = require('../db'); // your PostgreSQL client

async function saveRoundData(roundData) {
  const query = `
    INSERT INTO rounds (
      experiment, round_number, player1_id, player2_id,
      player1_action, player2_action, player1_payoff, player2_payoff
    ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *;
  `;
  const values = [
    roundData.experiment,
    roundData.roundNumber,
    roundData.player1_id,
    roundData.player2_id,
    roundData.player1_action,
    roundData.player2_action,
    roundData.player1_payoff,
    roundData.player2_payoff,
  ];
  const result = await db.query(query, values);
  return result.rows[0];
}
