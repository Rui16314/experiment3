const express = require('express');
const router = express.Router();
const { pairPlayers } = require('../game/pairing');
const { processRound } = require('../game/roundLogic');
const Player = require('../models/playerModel');

// Temporary in-memory store
const players = [];

router.post('/join', (req, res) => {
  const { id, experimentType } = req.body;
  const newPlayer = new Player(id, experimentType);
  players.push(newPlayer);
  res.json({ message: 'Player joined', player: newPlayer });
});

router.post('/action', (req, res) => {
  const { id, action } = req.body;
  const player = players.find(p => p.id === id);
  if (!player) return res.status(404).json({ error: 'Player not found' });

  player.submitAction(action);

  // Check if their pair is ready
  const pair = players.filter(p => p.role && p.currentRound === player.currentRound);
  const readyPair = pair.filter(p => p.action !== null);

  if (readyPair.length === 2) {
    processRound(readyPair[0], readyPair[1]);
    res.json({ message: 'Round processed', results: readyPair });
  } else {
    res.json({ message: 'Action received, waiting for pair' });
  }
});

module.exports = router;
