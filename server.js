const dotenv = require('dotenv')

const express = require('express');

//Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/testconfigs', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: 'Shows all Test Configs' }});
});

app.get('/api/v1/testconfigs/:team', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: `Get Single Test Config ${req.params.team}`}});
});

app.post('/api/v1/testconfigs', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: 'Create New Test Config' }});
});

app.put('/api/v1/testconfigs/:team', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: `Update Test Config ${req.params.team}`}});
});

app.delete('/api/v1/testconfigs/:team', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: `Delete Test Config ${req.params.team}`}});
});


const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);