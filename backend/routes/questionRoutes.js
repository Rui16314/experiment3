// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const { query } = require('../db'); // PostgreSQL query function

// GET /api/questions
router.get('/questions', async (req, res) => {
  try {
    const result = await query('SELECT * FROM questions ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching questions:', err);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

module.exports = router;
