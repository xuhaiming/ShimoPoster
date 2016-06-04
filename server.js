const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(session({
  secret: 'test'
}));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.post('/register', (req, res, next) => {
  auth.registerNewUser(req.body.displayName, req.body.username, req.body.password, (error) => {
    if (error != null) {
      res.send(error);
    } else {
      res.send('hello');
    }
    next();
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
