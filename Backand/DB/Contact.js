const mongoose = require('mongoose');
const schemaData = new mongoose.Schema({
        name:String,
        msg:String,
        pn:Number,
        
})
module.exports = mongoose.model("contacts",schemaData);