const express = require("express");
const app = express();
const gameController = require("./controllers/gameController");

app.use(express.json());

app.post("/create-game", gameController.createGame);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
