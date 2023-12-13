const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const port = process.env.PORT || 3001;
const path = require('path');
// const fs = require('fs');
const myPath = path.join(__dirname, 'pictures');
const userPath = path.join(__dirname, 'uploads');

app.use('/pictures', express.static(myPath));
app.use('uploads', express.json(userPath));
app.use(cors());

app.use(express.static(path.join(__dirname, 'pictures')));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});
const upload = multer({storage:storage});

// Send images based on user input 
app.get('/images', (req, res, next) => {
  const directory = req.query.directory;
  res.sendFile(`${__dirname}/pictures/${directory}.jpg`);
  //const dir = fs.existsSync(`${__dirname}/pictures/${directory}.jpg`);
  // if (dir) {
  //   res.sendFile(`${__dirname}/pictures/${directory}.jpg`);
  // }
  // else {
  //   res.status(404).send('No Picture Found');
  // }
})

// Upload user images 
app.post('/uploads', upload.single('file'), (req, res, next) => {
  if (!req.body) {
    res.json({msg: 'Image not received'});
  }
  res.json({msg:'Images received!'});
})

// Search uploads based on user input
app.get('/search-uploads', (req, res, next) => {
  const directory = req.query.directory;
  res.sendFile(`${__dirname}/uploads/${directory}.jpg`)
})

// // Encode the images to base64
// app.post('/scramble', (req, res, next) => {
//   const base64Data = req.body;
//   res.json({msg: `${base64Data}`});
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});