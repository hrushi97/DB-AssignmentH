const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discountSchema = new Schema({

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

    
    discount_percent: {
        type: Number,
        require: true,
    },

    
    created_at : {
        type: TimeStamp,
        default: currentTimeStamp,
    },

    active : {
        type: Boolean,
        require: true,
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

module.exports = mongoose.model("discount", discountSchema);
