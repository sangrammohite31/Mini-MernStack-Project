const mongoose = require('mongoose')

const keeperSchma = mongoose.Schema({
    title:{
        required:true,
        type:String,
    },

    description:{
        type:String
    }
})
const keeperSch = mongoose.model("Keeper",keeperSchma);

module.exports=keeperSch;