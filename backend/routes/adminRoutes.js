const express = require('express');
const router = express.Router();

// Mock data store (replace with real DB or session store)
let players = [];
let currentRound = 0;
let experimentEnded = false;

// GET active players
router.get('/players', (req, res) => {
  res.json(players);
});

// POST start next round
router.post('/start-round', (req, res) => {
  currentRound += 1;
  // Logic to pair players, assign roles, etc.
  res.json({ round: currentRound, message: 'Round started' });
});

// POST end experiment
router.post('/end', (req, res) => {
  experimentEnded = true;
  // Logic to finalize payoffs, save data, etc.
  res.json({ message: 'Experiment ended successfully' });
});

module.exports = router;
