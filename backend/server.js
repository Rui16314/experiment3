const express = require("express");
const app = express();
const gameController = require("./controllers/gameController");

app.use(express.json());

app.post("/create-game", gameController.createGame);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
const express = require('express');
const app = express();
const sessionRoutes = require('./routes/sessionRoutes');

app.use(express.json()); // Middleware to parse JSON
app.use('/api', sessionRoutes); // Prefix all routes with /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
