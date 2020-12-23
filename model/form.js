const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

let schema = new Scheme({
    f_name: {type: String},
    l_name: {type: String},
    address: {type: String},
    email: {type: String},
    mobile: {type: Number},
});

module.exports = mongoose.model('Form', schema);
