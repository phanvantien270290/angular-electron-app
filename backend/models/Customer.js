var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var User = mongoose.model('User');
//Define collection and schema
let CustomerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber1: {
    type: Number
  },
  phoneNumber2: {
    type: Number
  },
  address: {
    type: String
  },
  area: {
    type: String
  },
  descripttion: {
    type: String
  }

}, { timestamps: true });

CustomerSchema.methods.toJSONFor = (user) => {
  return {
    name: this.name,
    email: this.mail,
    phoneNumber1: this.phoneNumber1,
    phoneNumber2: this.phoneNumber2,
    address: this.address,
    area: this.area,
    descripttion: this.descripttion
  }
}