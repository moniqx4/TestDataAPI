const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: 'Shows all Test Configs' }});
});

router.get('/:team', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: `Get Single Test Config ${req.params.team}`}});
});

router.post('/', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: 'Create New Test Config' }});
});

router.put('/:team', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: `Update Test Config ${req.params.team}`}});
});

router.delete('/:team', (req, res) => {    
    res.status(200).json({ success: true, data: { msg: `Delete Test Config ${req.params.team}`}});
});

module.exports = router;
