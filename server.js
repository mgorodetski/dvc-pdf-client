const express = require('express');
const cors = require('cors');
const path = require('path');

const publicPath = path.join(__dirname, './client/build');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));

app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'https://rocky-hamlet-62364.herokuapp.com/'); 
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,application/xml');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`server connected at ${port}`)
});

