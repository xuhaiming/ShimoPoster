const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use(session({
  secret: 'test'
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/user', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/userPage.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
