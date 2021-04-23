const dotenv = require('dotenv');
const express = require('express');

// Route files
const testconfigs = require('./routes/testconfigs');

//Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//Mount routers
app.use('/api/v1/testconfigs', testconfigs);


const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);