const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.send(new Date().toISOString());
});

app.listen(3000);
