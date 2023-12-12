const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const port = process.env.PORT || 3001;
const path = require('path');
const myPath = path.join(__dirname, 'pictures');
const userPath = path.join(__dirname, 'uploads');
const uploads = multer({dest: 'uploads/'});

app.use('/pictures', express.static(myPath));
app.use('uploads', express.json(userPath));
app.use(cors());

app.use(express.static(path.join(__dirname, 'pictures')));

// Send images based on user input 
app.get('/images', (req, res, next) => {
  const directory = req.query.directory;
  res.sendFile(`${__dirname}/pictures/${directory}.jpg`)
})
app.get('/uploads', uploads.single('file'), (req, res, next) => {
  if (!req.file) {
    res.json({msg: 'Image not received'});
  }
  else {
    res.json({msg:'images received!'});
  }
})

app.post('/textures', (req, res, next) => {
  base64Data = req.body;
})
app.post('/scramble', (req, res, next) => {
  const base64Data = req.body;
  res.json({msg: `${base64Data}`});
})
app.get('/pictures', (req, res, next) => {
  res.sendFile(`${__dirname}/pictures/flowers.jpg`);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});