const mongoose = require('mongoose') ;
const schema = mongoose.Schema;

var Contact = new mongoose.Schema({
fullName : String ,
phone : Number 
}) 
module.exports= mongoose.model('contact',Contact) ;