//@desc   Logs request to console

const logger = (res, req, next) => {    
    console.log(`${req.env} ${req.PORT}://${req.get('host')}${req.path}`);
    next();
};

module.exports = logger;