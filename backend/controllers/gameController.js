const db = require("../db");

exports.createGame = async (req, res) => {
  try {
    const newGame = {
      status: "waiting",
      starttime: "",
      endtime: "",
      createdBy: "test-coordinator-001" // placeholder UID
    };

    const docRef = await db.collection("games").add(newGame);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
