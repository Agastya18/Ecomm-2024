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

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

const getAllProducts=async(req,res)=>{
   try {
    const products = await Product.find({});
    if(products)
    {
        res.json({message:"Products found",products});
    }
    else{
        res.status(404).json({message:"Products not found"});
    }
   } catch (error) {
    console.log("not working........1.....1...");
   }
}

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin

const updateProduct=async(req,res)=>{
    const {name,description,price,brand,category,rating,shipping,countInStock,numReviews,images}=req.body;
    const product=await Product.findById(req.params.id);
    if(product){
        product.name=name || product.name;
        product.description=description || product.description;
        product.price=price || product.price;
        product.brand=brand || product.brand;
        product.category=category || product.category;
        product.rating=rating   || product.rating;
        product.shipping=shipping || product.shipping;
        product.countInStock=countInStock || product.countInStock;
        product.numReviews=numReviews || product.numReviews;
        product.images=images || product.images;
        const updatedProduct=await product.save({ validateBeforeSave:false});
        res.json({message:"Product updated successfully",product:updatedProduct});
    }else{
        res.status(404).json({message:"Product not found"});
    }

}
export {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
}