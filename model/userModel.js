const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    username:{
        type:String,
    },

    password:{
        type:String,
    }
    
})
 
const userModel = mongoose.model('userInfo',userSchema)
module.exports = userModel  