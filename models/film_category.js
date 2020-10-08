const mongoose = require('mongoose');


const filmcategorySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    film:{type:mongoose.Schema.Types.ObjectId,ref:'Film',require:true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Category',require:true}
})


module.exports = mongoose.model('Film_Category',filmcategorySchema);