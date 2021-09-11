const swaggerJsdoc = require('swagger-jsdoc');

module.exports = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'JR Academy express API tutorial',
      version: '1.0.0',
      contact: {
        name: 'Norris',
        email: 'norris.wu.au@outlook.com',
      },
    },
  },
  apis: ['src/controllers/*.js'],
});
