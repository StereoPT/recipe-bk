const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db')();

const ingredientRoutes = require('./routes/ingredientRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const middlewares = require('./routes/middlewares');

const server = express();

const whitelist = [process.env.CORS_ORIGIN, 'http://192.168.1.8:3000'];
const corsOptions = {
  origin: function(origin, cb) {
    if(whitelist.indexOf(origin) !== -1) {
      cb(null, true);
    } else {
      cb(new Error('Not Allowed by CORS!'));
    }
  }
}

server.use(morgan('common'));
server.use(helmet());
server.use(cors(corsOptions));
server.use(express.json());

console.log('[Recipe-BK Server]');

server.get('/', (req, res) => {
  res.json({
    message: 'Recipe-BK Server',
  });
});

server.use('/api/v1/ingredients', ingredientRoutes);
server.use('/api/v1/recipes', recipeRoutes);

server.use(middlewares.notFound);
server.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
server.listen(port, () => {
  console.log(`Listening at: http://localhost:${port}/`);
});