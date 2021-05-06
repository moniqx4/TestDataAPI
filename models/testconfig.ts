const mongoose = require("mongoose");

const TestConfigSchema = new mongoose.Schema({
  configName: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    maxlength: [75, "ConfigName can not be more then 75 characters"],
  },
  slug: String,
  description: {
    type: String,
    required: false,
    maxlength: [500, "ConfigName can not be more then 500 characters"],
    trim: true,
  },
  team: {
    type: String,
    required: [true, "Please enter in Team Abbr, for example TCT"],
    maxlength: [25, "ConfigName can not be more then 75 characters"],
    trim: true,
  },
  companyId1: {
    type: String,
    required: [true, "Please enter in Company 1's Alias"],
    trim: true,
  },
  companyId2: {
    type: String,
    required: [true, "Please enter in Company 2's Alias"],
    trim: true,
  },
  adminUser: {
    type: String,
    required: [true, "Please enter in Admin's Username"],
    trim: true,
  },
  adminPassword: {
    type: String,
    required: [true, "Please enter in Admin's Id Password"],
  },
  employee1Username: {
    type: String,
    required: [true, "Please enter in Employee's Username"],
    trim: true,
  },
  employee1Password: {
    type: String,
    required: [true, "Please enter in Employee's Password"],
  },
  employee1FullName: {
    type: String,
    required: [true, "Please enter in Employee's Full Name"],
  },
  employee1Id: {
    type: String,
    required: [true, "Please enter in Employee's Id number"],
    trim: true,
  },
  employee1BadgeNumber: {
    type: String,
    required: false,
  },
  employee1Pin: {
    type: String,
    required: false,
  },
  webKioskInstanceName: {
    type: String,
    required: false,
  },
  webKioskPassword: {
    type: String,
    required: false,
  },
  webKioskSessionTimeout: {
    type: Number,
    required: false,
  },
  testrailProjectId: {
    type: String,
    required: false,
  },
  testrailMilestoneId: {
    type: String,
    required: false,
  },
  //   {
  //       toJson: { virtuals: true},
  //       toObject: { virtuals: true }
  //   }
});

module.exports = mongoose.model("TestConfig", TestConfigSchema);
