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

const getAllProducts= async(req,res)=>{
   try {
   const products= await Product.find();
   return  res.json(products);
    
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

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin

const deleteProduct=async(req,res)=>{

  const product=await Product.findById(req.params.id);
    if(product){
        await Product.deleteOne({_id:req.params.id})
        res.json({message:"Product deleted successfully"});
    }
    else{
        res.status(404).json({message:"Product not found"});
    }
}

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private

const createProductReview=async(req,res)=>{
   const {comment,rating}=req.body;
   const product=await Product.findById(req.params.id);
    if(product){
    const alreadyReviewed=product.reviews.find(r=>r.user.toString()===req.user._id.toString());
         if(alreadyReviewed){
              res.status(400).json({message:"Product already reviewed"});
         }
         const review={
              name:req.user.name,
              rating:Number(rating),
              comment,
              user:req.user._id
         }
         product.reviews.push(review);
         product.numReviews=product.reviews.length;
         product.rating=product.reviews.reduce((acc,item)=>item.rating+acc,0)/product.reviews.length;
         await product.save({validateBeforeSave:false});
         res.status(201).json({message:"Review added"});
        }
        else{
            res.status(404).json({message:"Product not found"});
        }
}
export {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
    createProductReview,
}