import mongoose from 'mongoose';

var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: String,
},{
    versionKey: false
});

var user = mongoose.model('User', schema);

export default user;