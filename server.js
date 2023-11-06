const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8081;

app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const { first, second } = req.body;
  if (isNaN(first) || isNaN(second)) {
    res.status(400).json({ error: 'Date invalide' });
  } else {
    const result = first + second;
    res.status(200).json({ result });
  }
});

app.post('/subtract', (req, res) => {
  const { first, second } = req.body;
  if (isNaN(first) || isNaN(second)) {
    res.status(400).json({ error: 'Date invalide' });
  } else {
    const result = first - second;
    res.status(200).json({ result });
  }
});

app.post('/multiply', (req, res) => {
  const { first, second } = req.body;
  if (isNaN(first) || isNaN(second)) {
    res.status(400).json({ error: 'Date invalide' });
  } else {
    const result = first * second;
    res.status(200).json({ result });
  }
});

app.post('/divide', (req, res) => {
  const { first, second } = req.body;
  if (isNaN(first) || isNaN(second) || second === 0) {
    res.status(400).json({ error: 'Date invalide' });
  } else {
    const result = first / second;
    res.status(200).json({ result });
  }
});

app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});

