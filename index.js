const express = require('express');
const cors = require('cors');
const Log = require('../logging-middleware/logger');

const app = express();
app.use(cors());
app.use(express.json());

const shorturlRouter = require('./routes/shorturl');
app.use('/', shorturlRouter);

// Placeholder for routes
app.get('/', (req, res) => {
  res.send('URL Shortener Microservice is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  Log('backend', 'info', 'service', `Server started on port ${PORT}`);
  console.log(`Server started on port ${PORT}`);
}); 