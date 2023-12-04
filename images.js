const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
const path = require('path')
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'pictures')))

app.get('/upload', (req, res, next) => {
  res.send(filename);
});

app.post('/textures', (req, res, next) => {
  res.send(body);
});

app.get('/pictures', (req, res, next) => {
  res.sendFile(`${__dirname}/pictures/Dwiggins.jpg`);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});