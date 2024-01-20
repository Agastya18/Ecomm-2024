import Product from "../models/productModel.js";


// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin

const createProduct= async(req,res)=>{
    const {name,description,price,brand,category,rating,shipping,countInStock,numReviews,images}=req.body;
     if(!name || !description || !price || !brand || !category || !rating || !shipping || !countInStock  || !numReviews ){
         return res.status(400).json({message:"Please fill all the fields"});
     }
      const createProduct= await Product.create({name,description,price,brand,category,rating,shipping,countInStock,images,numReviews,user:req.user._id});
        if(createProduct){
            res.status(201).json({message:"Product created successfully",product:createProduct});
        }else{
            res.status(400).json({message:"Product not created"});
        }


}

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public

const getProductById=async(req,res)=>{
    const product=await Product.findById(req.params.id);
    if(product){
        res.json({message:"Product found",product});
    }else{
        res.status(404).json({message:"Product not found"});
    }
}
export {
    createProduct,
    getProductById,
}