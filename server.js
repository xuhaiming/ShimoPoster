const express = require('express');
const session = require('express-session');
// const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;
const User = require('./repositories/UserSchema');
require('./repositories/dbServer');


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
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

app.post('/users', (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Bear created!' });
        });
});

app.get('/users', (req, res) => {
  User.find((err, users) => {
            if (err)
                res.send(err);

            res.json(users);
        });
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
