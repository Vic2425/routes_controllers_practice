const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users')
const port = process.env.PORT || 4000
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send('Hello Express app');
});

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/users/:id', (req, res) => {
  const user = users.find(i => i.id == req.params.id)
  res.json(user)
})

app.post('/users', (req, res) => {
  const id = users.length + 1
  const user = {
    id: id,
    name: `User ${id}`,
    age: Math.floor(Math.random()*(30-10+1)+10)
  }
  users.push(user)
  res.json(users[users.length - 1])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));