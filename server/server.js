const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const cloudinary = require('cloudinary').v2
const cors = require("cors");
const productRoutes = require('./routes/productRoutes')
const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

(async function() {

    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret: process.env.CLOUD_API_SECRET
    });
    
    //  const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'shoes',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    
    // console.log(uploadResult);
    
    // const optimizeUrl = cloudinary.url('shoes', {
    //     fetch_format: 'auto',
    //     quality: 'auto'
    // });
    
    // console.log(optimizeUrl);

    // const autoCropUrl = cloudinary.url('shoes', {
    //     crop: 'auto',
    //     gravity: 'auto',
    //     width: 500,
    //     height: 500,
    // });
    
    // console.log(autoCropUrl);    
})();

app.use('/', productRoutes);

mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch((err)=>console.log(err))

app.listen(PORT, ()=>console.log(`Server in running at ${PORT}`));