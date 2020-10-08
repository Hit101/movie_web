const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username :{
        type:String,
        require:true,
        unique:true
    },
    email: {
        type:String,
        require:true,
        unique:true,
       match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    password:{type:String,require:true,minLength: 8},
})


module.exports = mongoose.model('User1',userSchema)
