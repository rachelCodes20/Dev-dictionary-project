const mongoose = require('mongoose');
const { Schema } = mongoose;
const term = new Schema({
    // termImage: {type: <<image data type>>, required: true}
    termName: {type: String, required: true},
    termDefinition: {type: String, required:true},
})

module.exports = mongoose.model('devTerms', term);