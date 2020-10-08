const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    user : {type:mongoose.Schema.Types.ObjectId,require:true,ref:'User'},
    film:{type:mongoose.Schema.Types.ObjectId,ref:'Film'},
    numberofrating:{type:Number,require:true},
    create_at:{type:Date,require:true,default:Date.now}
})

module.exports = mongoose.model('Rating',ratingSchema);