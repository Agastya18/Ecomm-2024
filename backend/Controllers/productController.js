import Product from "../models/productModel.js";
import { uploadOnCloudinary,deleteOnCloudinary } from "../utils/cloudinary.js";

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin

const createProduct= async(req,res)=>{
const {name,description,price,brand,category,countInStock}=req.body;
     if(!name || !description || !price || !brand || !category || !countInStock ){
         return res.status(400).json({message:"Please fill all the fields"});
     }
     console.log(req.files)
     const filed= req.files
     
       let locimages = [];
        if(!filed){
            return res.status(400).json({message:"Please upload an image"});
        
        }
        for(let i=0;i<filed.length;i++){
            const imageLocalPath = filed[i];
            if(!imageLocalPath){
                return res.status(400).json({message:"Please upload an image local path"});
            }
            const imageCloudinaryPath = await uploadOnCloudinary(imageLocalPath.path);
            if(!imageCloudinaryPath){
                return res.status(400).json({message:"Image upload failed"});
            }
            locimages.push(imageCloudinaryPath.url);

        }
        console.log(locimages);


        




 const createProduct= await Product.create({name,description,price,brand,category,countInStock,images:locimages,user:req.user._id});
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
   const products= await Product.find({});
   if(!products)
   {
         return res.status(404).json({message:"Products not found"});
   }
   return  res.status(200).json({message:"Products found",products});
    
   } catch (error) {
    console.log("not working........1.....1...");
   }
}

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin

const updateProduct=async(req,res)=>{
    const {name,description,price,brand,category,countInStock}=req.body;
    const product=await Product.findById(req.params.id);
     const filed= req.files
    // console.log(filed);
         let locimages = [];
        // if(!filed){
        //     return res.status(400).json({message:"Please upload an image"});
        // }

        
        if(filed.length > 0){
            for(let i=0;i<filed.length;i++){
                const imageLocalPath = filed[i];
                if(!imageLocalPath){
                    return res.status(400).json({message:"Please upload an image local path"});
                }
                const imageCloudinaryPath = await uploadOnCloudinary(imageLocalPath.path);
                if(!imageCloudinaryPath){
                    return res.status(400).json({message:"Image upload failed"});
                }
                locimages.push(imageCloudinaryPath.url);
    
            }
        }
      //  console.log("this is test",locimages);
        
     
    if(product){
        product.name=name || product.name;
        product.description=description || product.description;
        product.price=price || product.price;
        product.brand=brand || product.brand;
        product.category=category || product.category;
        //product.rating=rating   || product.rating;
      //  product.shipping=shipping || product.shipping;
        product.countInStock=countInStock || product.countInStock;
       // product.numReviews=numReviews || product.numReviews;
       if(filed.length>0){
        product.images= locimages || product.images
       }else{
        product.images= product.images
       }
       // product.images= locimages  || product.images;
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
      
  // deleting images from cloudinary
    // for(let i=0;i<product.images.length;i++){
    //     const imageCloudinaryPath = product.images[i];
        
    //     if(!imageCloudinaryPath){
    //         return res.status(400).json({message:"Please upload an image local path"});
    //     }
    //     const imageCloudinaryPathDelete = await deleteOnCloudinary(imageCloudinaryPath);
    //     if(!imageCloudinaryPathDelete){
    //         return res.status(400).json({message:"Image delete failed"});
    //     }
    // }


    if(product){
        await Product.deleteOne({_id:req.params.id})
        res.json({message:"Product deleted successfully"});
    }
    else{
        res.status(404).json({message:"Product not found"});
    }
}

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public


const getTopRatedProduct=async(req,res)=>{
    const products=await Product.find({}).sort({rating:-1}).limit(3);
    if(products){
        res.json({message:"Top rated products found",products});
    }else{
        res.status(404).json({message:"Top rated products not found"});
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
           
             return res.status(400).json({message:"Product already reviewed",alreadyReviewed});
         }


         const review={
            name:req.user.name,
            rating:Number(rating),
            comment,
            user:req.user._id,
            avatar:req.user.avatar,
       }
           
         
         
         product.reviews.push(review);
            product.numReviews=product.reviews.length;
         product.rating= Math.round(product.reviews.reduce((acc,item)=>item.rating+acc,0)/product.reviews.length*10)/10;
         await product.save({validateBeforeSave:false});
         res.status(201).json({message:"Review added"});
        }
        else{
            res.status(404).json({message:"Product not found"});
        }
}

// Get All Reviews of a products
// @route   GET /api/products/reviews
// @access  Private

const  getAllReviews = async (req, res) => {
    const product = await Product.findById(req.query.id);
    if (product) {
      res.json({message:"Reviews found",reviews:product.reviews});
    } else {
      res.status(404).json({message:"Product not found"});
    }
  };

  //detele reviews of a products
// @route   DELETE /api/products/reviews
// @access  Private

const deleteReview = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const reviews = product.reviews.filter(r=>r.user.toString()!==req.user._id.toString());
      product.reviews = reviews;
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
      await product.save({ validateBeforeSave: false });
      res.json({message:"Review deleted"});
    } else {
      res.status(404).json({message:" cannot delete review unauthorized"});
    }
  
}

//detele reviews of a products
// @route   DELETE /api/products/reviews
// @access  Admin

const deleteReviewAdmin = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const reviews = product.reviews.filter(r=>r._id.toString()!==req.params.reviewId.toString());
      product.reviews = reviews;
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;
      await product.save({ validateBeforeSave: false });
      res.json({message:"Review deleted"});
    } else {
      res.status(404).json({message:"Product not found"});
    }
}




export {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getTopRatedProduct,
    createProductReview,
    getAllReviews,
    deleteReview,
    
   
}