var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config/index').secret;
var mongoosePaginate = require('mongoose-paginate');

var UserSchema = new mongoose.Schema({
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    username: { type: String, lowercase: true, unique: true, required: [true, "can't be blank, lower case"], match: [/^[a-zA-Z0-9]{5,20}$/, 'must be character and  > 5 and < 20  '], index: true },
    email: { type: String, lowercase: true },
    hash:  String,
    salt: String,
    imageUrl: { type: String, default: "" },
    address: { type: String, default: "" },
    phoneNumber: { type: String, default: "" },
    description: { type: String, default: "" },

}, { timestamps: true });
UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.validPassword = function (password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
}

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

UserSchema.methods.toAuthJSON = function () {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        imageUrl: this.imageUrl,
        token: this.generateJWT(),
        phoneNumber: this.phoneNumber,
        address: this.address,
        description: this.description

    }
}

UserSchema.methods.toProfileJSONFor = function (user) {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        imageUrl: this.imageUrl,
        phoneNumber: this.phoneNumber,
        address: this.address,
        description: this.description
    };
};
UserSchema.plugin(mongoosePaginate);
mongoose.model('User', UserSchema, 'User');