const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name can not be empty'
    },
    username: {
        type: String,
        required: 'Username can not be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password can not be empty',
        minlength: [4, 'Password must be at least 4 character long']
    },
    saltSecret: String,
    address: String,
    birthday: String,
    phone: String
});


userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

userSchema.methods.verifyPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

userSchema.methods.generateJwt = (userId) => {
    return jwt.sign({"_id": userId},
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
};

userSchema.plugin(uniqueValidator);
let User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};
