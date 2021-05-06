const dotenv = require('dotenv');
const express = require('express');
//const logger = require('./middleware/logger');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Route files
const testconfigs = require('./routes/testconfigs');

//Load env vars
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

//Body Parser
app.use(express.json());

//connect to database
//app.use(connectDB);


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/testconfigs', testconfigs);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Unhandled Rejection Err ${err.message}`.red)
    server.$close(() => process.exit(1))
});