const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({

    id: {
        type: Number,
        require: true,
        unique: true,
    },

    name: {
        type: String,
    },

    description: {
        type: String,
        require: true,
    },

    
    created_at : {
        type: TimeStamp,
        default: currentTimeStamp,
    },

    
    modified_at : {
        type: TimeStamp,
        default: currentTimeStamp,
    },

    
    deleted_at : {
        type: TimeStamp,
        default: currentTimeStamp,
    },


});

module.exports = mongoose.model("category", categorySchema);
