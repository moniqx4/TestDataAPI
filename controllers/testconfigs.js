const TestConfig = require('../models/testconfig.ts')
const ErrorResponse = require('./../middleware/error');
const ErrorHandler = require('../middleware/error');

let err = ErrorHandler.ErrorResponse;

// @desc  Get All Test Configs
// @route GET /api/v1/testconfigs
// @access Private
exports.getTestConfigs = async ( req, res, next) => {
    try {
        const testconfigs = await TestConfig.find();
        res
            .status(200)
            .json({ success: true, msg: 'Shows all Test Configs', data: `${testconfigs}` });
    } catch (err) {
        //next(new ErrorResponse(`No TestConfigs were found.`, 404)) 
        next(err);
    }
}


// @desc    Get Single Test Config by team
// @route   GET /api/v1/testconfig/:team
// @access  Private
exports.getTestConfig = async ( req, res, next) => {

    try {
        const testconfig = await TestConfig.findByTeam(req.params.team, req.body,{
            new: true,
            runValidators: true
        });

        if (!testconfig) {
           return next(new ErrorResponse(`TestConfig was not found for team ${team}`, 404)) 
           //return next(err);
        }

           res
            .status(200).json({ success: true, msg: `Get Single Test Config ${req.params.team}`});
    } catch (error) {
        //next(new ErrorResponse(`TestConfig was not found for team ${team}`, 404))
        next(err);       
    }    
}

// @desc    Create Single Test Config
// @route   POST /api/v1/testconfig/:team
// @access  Private
exports.createTestConfig = async ( req, res, next) => {
    try {
        const testconfig = await TestConfig.create(req.body);

        res
        .status(200)
        .json({ success: true, msg: 'Create New Test Config', data: `${testconfig}` });
    } catch (error) {
        next(new ErrorResponse(`TestConfig was not found for team ${team}`, 404)) 
        //next(error)
    }
}

// @desc    Updates a Single Test Config
// @route   PUT /api/v1/testconfig/:team
// @access  Private
exports.updateTestConfig = async ( req, res, next) => {
try {
    const testconfig = await TestConfig.findByTeamAndUpdate(req.params.team, req.body,{
        new: true,
        runValidators: true
    });
    if (!testconfig) {
        return next(new ErrorResponse(`TestConfig was not found for team ${team}`, 404));
        //return next(err);
    }
    res
    .status(200)
    .json({ success: true, msg: `Update Test Config ${req.params.team}`});
    } catch (err) {
        next(err);
    }
};


// @desc     Deletes a Single Test Config
// @route    DELETE /api/v1/testconfig/:team
// @access   Private
exports.deleteTestConfig = async ( req, res, next) => {
    try {
            const testconfig = await TestConfig.findByTeamAndDelete(req.params.team);

        if (!testconfig) {
            return next(new ErrorResponse(`TestConfig was not found for team ${team}`, 404)) 
            //return next(err);
        }
    
        res
            .status(200)
            .json({ success: true, msg: `Delete Test Config ${req.params.team}`});

    } catch (error) {
        // res
        // .status(400).json({ success: false})
        next(err);
    }    
}