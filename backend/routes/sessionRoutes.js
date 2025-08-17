// routes/sessionRoutes.js
const express = require('express');
const router = express.Router();
const { firestore } = require('../db'); // assuming you updated db.js

// Create a new session
router.post('/create-session', async (req, res) => {
  try {
    const { playerName } = req.body;
    const newSession = await firestore.collection('sessions').add({
      playerName,
      createdAt: new Date()
    });
    res.status(201).json({ sessionId: newSession.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create session' });
  }
});

module.exports = router;
