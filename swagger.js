const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/temperatura.routes.js']

swaggerAutogen(outputFile, endpointsFiles)