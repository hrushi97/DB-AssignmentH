const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({

    id: {
        type: Number,
        require: true,
        unique: true,
    },

    
    quantity : {
        type: Number,
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

module.exports = mongoose.model("inventory", InventorySchema);