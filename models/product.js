const Joi = require('joi');
const mongoose = require('mongoose');
const joi = rewuire('joi');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 255 },
    description: { type: String, required: true },
    category: { type: String, required: true, minlength: 5, maxlength: 50 },
    price: { type: Number, required: true },
    dateModified: { type: Date, default: Date.now },
   });

const Product =mongoose.model("Product", productSchema);

function validateProduct(Product){
    const schema = Joi.object({
        name:Joi.string().min(2).max(50).require(),
        description: Joi.string().require(),
        category: Joi.string().min(5).max(50).require(),
        price: Joi.number().require(),
    });
    return schema.validate(product);
}

 exports.Product = Product;
 exports.validate = validateProduct;
 exports.productSchema = productSchema;