const admin = require("firebase-admin");
const { Pool } = require("pg");
require("dotenv").config();

// 🔥 Firebase Admin Setup
admin.initializeApp({
  credential: admin.credential.applicationDefault(), // or use a service account
});
const firestore = admin.firestore();

// 🐘 PostgreSQL Setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // for Render
});

// ✅ Unified Export
module.exports = {
  firestore,
  query: (text, params) => pool.query(text, params),
};
