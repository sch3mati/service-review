const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const db = require('../database');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public/dist')));

// app.get('/', (req, res) => {
//   res.send('Hello World! from Express Server');
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
