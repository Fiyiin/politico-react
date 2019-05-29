// server.js
const express = require('express');
const path = require('path');

const port = process.env.PORT || 4001;
const app = express();

// the __dirname is the current directory from where the script is running

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/ping', (req, res) => res.send('pong'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port);
