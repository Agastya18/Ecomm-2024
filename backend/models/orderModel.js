import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    orderItems: [
        {
            name:{type:String,required:true},
            qty:{type:Number,required:true},
            images: [
                {
                 type: String,
                 
               },   
           ],
            price:{type:Number,required:true},
            brand:{type:String,required:true},
            product:{
                type:mongoose.Schema.Types.ObjectId,
                //required:true,
                ref:'Product'
            }
        }
    ],
    shippingAddress:{
        address:{type:String,required:true},
        city:{type:String,required:true},
        province:{type:String,required:true},
        postalCode:{type:String,required:true},
        country:{type:String,required:true},
    },
    paymentMethod:{
        type:String,
        required:true
    },
    paymentResult:{
        id:{type:String},
        status:{type:String ,default:false,required:true},
       
        
    },
    itemsPrice:{type:Number,required:true,default:0.0},
    taxPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    shippingPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    totalPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    
    orderStatus:{      // or orderStatus
        type:String,
        required:true,
        default:"Processing"
    },
    deliveredAt:{
        type:Date
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
    
});

const Order = mongoose.model('Order',orderSchema);
export default Order;