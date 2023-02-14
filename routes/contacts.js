const express = require('express') ;
const router = express.Router() ;
var Contact = require("../models/contact.js")
router.get('/',(req,res,next) =>{
res.json({message: 'hello'}) ;
}); 

router.post('/', (req,res,next) =>{
    var contact= new Contact({fullName:req.body.contactName , phone:req.body.contactNumber})
    contact.save((err,newContact)=>{
if (err){
    console.log(`there is an error ${err} `)
}else{
    res.json(newContact)
}
    })
    });  
module.exports = router ;