// Server entry point
require('dotenv').config();
const port = process.env.PORT || 3000;
const environment = process.env.ENV === 'production' ? 'common' : 'dev';

// import packages
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

// import functions
const swaggerJsdoc = require('./utils/swagger');
const logger = require('./utils/logger');
const router = require('./routes');

const app = express();
app.use(morgan(environment));
app.use(express.json());
app.use(cors());

// api documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));

// api entry point "PUBLIC_URL/api"
app.use('/api', router);

// Start server on PORT
app.listen(port, () => {
  logger.info(`listening on port ${port}...`);
});
