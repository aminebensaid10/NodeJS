var express = require('express');
var router = express.Router();
const products = require('../products.json')
router.get('/', function(req, res, next) {
    res.json(products)
  });
  router.get('/product/:id', function(req, res, next) {
    
        res.json ({
            products : products[req.params.id]
        
        });
    
   
  });
  router.get('/product/:id/:qt', function(req, res, next) {
    
    res.json ({
        id : products[req.params.id].name ,
        qt : req.params.qt ,
        unitprice : products[req.params.id].price ,
        totalprice : req.params.qt * products[req.params.id].price ,
        

    
    });


});
  module.exports = router;