const cloudinary = require('cloudinary').v2;
const productModel = require('../models/productModel');

const createProduct = (req,res) => {
    cloudinary.uploader.upload_stream({ folder:'products'}, (error,result) =>{
        if (error) return res.status(500).json({ error });

        const newProduct = new productModel({
            name: req.body.name,
            description: req.bocy.description,
            price: req.body.price,
            imageUrl: result.secure_url
        });

        newProduct.save()
        .then((savedProduct) => res.status(201).json(savedProduct))
        .catch((err) => res.status(500).json({error: err.message}))
    }).end(req.file.buffer);
};

const getAllProducts = (req,res) => {
    productModel.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json({ error: err.message}));
};

module.exports = {createProduct, getAllProducts};