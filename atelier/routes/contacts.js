const express = require('express') ;
const router = express.Router() ;
var Contact = require("../models/contact.js")
router.get('/',(req,res,next) =>{
res.json({message: 'hello'}) ;
}); 

router.get('/:id',(req,res,next)=> {
    Contact.findById(req.params.id,(err, cont)=>{
            res.json(cont) ;
    })
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
    router.put('/:id' , (req , res , next)=> {
  
        Contact.updateOne({ id: req.params.id , fullName : req.body.contactName , phone :req.body.contactTel },(err,data)=>{
          if(err) return done(err);
          res.json(data)
        });
      });

      router.delete('/:id' , (req , res , next)=> {
  
        Contact.deleteOne({ id: req.params.id },(err,data)=>{
          if(err) return done(err);
          res.json(data)
        });
      });
module.exports = router ;