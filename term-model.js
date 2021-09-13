const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const termController = require('./termController')
const term = mongoose.Schema({
    // termImage: {type: <<image data type>>, required: true}
    termName: {type: String, required: true},
    termDefinition: {type: String, required:true},
})

module.exports = mongoose.model('DevTerm', term);