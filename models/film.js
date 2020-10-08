const mongoose=require('mongoose');
const path = require('path')


const coverImageBasePath = 'uploads/filmCovers';

const filmSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,require:true},
    coverImageName:{type:String,require:true},
    publishDate: {type:Date,require:true},
    create_at:{type:Date,require:true,default:Date.now},
    description:{type:String,require:true},
    category:{type:mongoose.Schema.Types.ObjectId,require:true,ref:'Category'},
    director:{type:mongoose.Schema.Types.ObjectId,require:true,ref:'Director'},
    linkTrailer:{type:String,require:true},
    cast:{type:String,require:true}
})


filmSchema.virtual('coverImagePath').get(function() {
    if (this.coverImageName != null) {
      return path.join('/', coverImageBasePath, this.coverImageName)
    }
  })



module.exports = mongoose.model('Film',filmSchema);
module.exports.coverImageBasePath = coverImageBasePath