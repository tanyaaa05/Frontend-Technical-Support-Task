
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/selection', (req, res) => {
  console.log('User selection:', req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
