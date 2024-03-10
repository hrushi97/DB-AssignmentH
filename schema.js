const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({

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

    category_id: {
        type: Number,
        require: true,
        unique: true,
    },

    inventory_id: {
        type: Number,
        require: true,
        unique: true,
    },

    discount_id: {
        type: Number,
        require: true,
        unique: true,
    },

    sku: {
        type: String,
        require: true,
    },

    price: {
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

module.exports = mongoose.model("product", productSchema);