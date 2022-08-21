// https://community.bonitasoft.com/blog/building-restful-api-nodejs-and-express
// https://www.npmjs.com/package/nodemon
// https://www.npmjs.com/package/morgan
// https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/
// https://www.freecodecamp.org/news/rest-api-best-practices-rest-endpoint-design-examples/
// https://www.npmjs.com/package/swagger-ui-express
// https://jsdoc.app/

const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const apiRoutes = require("./routes/temperatura.routes");

// App
const app = express()
// Morgan
app.use(morgan('tiny'))

app.use(express.json());
app.use(cors());

// Add routes
app.use('/', apiRoutes);

// Starting server
app.listen('8080')