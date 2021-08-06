const {Product, validate} = require('../models/product');
const express = require('express');
const router = express.Router();

router.get('/',async(req,res) =>{
    try{
        const products = await Product.find();
        return res.send(products);
    } catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post('/',async(req,res) => {
    try {
        const{error} = validate(req,res);
        if(error)
            return res,status(400).send(error);

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        });
        await product.save();
        return res.send(product);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
        }
});


module.exports =router;