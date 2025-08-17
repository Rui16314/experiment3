// db.js
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(), // or use a service account
});

const db = admin.firestore();
module.exports = db;

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // for Render
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
