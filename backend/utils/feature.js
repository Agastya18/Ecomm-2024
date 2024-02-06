import Product from "../models/productModel.js";

export const reduceStock =async(orderItems)=>{

    for (let i = 0; i < orderItems.length; i++) {
        const order = orderItems[i];
        const product = await Product.findById(order._id);
        if (!product)
        {
            return res.status(400).json({message:"Product not found"});
        }
        product.countInStock -= order.qty;
        await product.save({validateBeforeSave: false});
      }


}