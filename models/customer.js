const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', {
    name : {type: String},
    items : {type: Number},
    price : {type: Number},
});

module.exports = Customer;