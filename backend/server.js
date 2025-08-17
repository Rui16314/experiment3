// server.js
const express = require('express');
const app = express();
const roundRoutes = require('./routes/roundRoutes');

app.use(express.json());
app.use('/api/round', roundRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
