const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
     
number:{
    type:String,
},
  
    email:{
        type:String,
    },
    gender: { type: String, enum: ["male", "female", "other"], required: false },
    role: { type: String, enum: ["user", "admin", "moderator"], default: "user" },
  
   
});
//user models//
const User = mongoose.model('User', userSchema);

module.exports = User;
