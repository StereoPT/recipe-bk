const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db')();

const ingredientRoutes = require('./routes/ingredientRoutes');
const middlewares = require('./routes/middlewares');

const server = express();

server.use(morgan('common'));
server.use(helmet());
server.use(cors({
  origin: process.env.CORS_ORIGIN
}));
server.use(express.json());

console.log('[Recipe-BK Server]');

server.get('/', (req, res) => {
  res.json({
    message: 'Recipe-BK Server',
  });
});

server.use('/api/v1/ingredients', ingredientRoutes);

server.use(middlewares.notFound);
server.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
server.listen(port, () => {
  console.log(`Listening at: http://localhost:${port}/`);
});