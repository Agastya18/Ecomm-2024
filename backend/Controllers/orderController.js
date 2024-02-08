import Order from "../models/orderModel.js";
import { reduceStock } from "../utils/feature.js";
// @desc    Create new order
// @route   POST /api/orders
// @access  Private

const createOrder =async (req, res) => {
    try {
        const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentResult,
        isPaid,
        } = req.body;
        if (orderItems && orderItems.length === 0) {
       return res.status(400).json({ message: "No order items" });
        
        }
      const order = await Order.create({ shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice, user: req.user._id, orderItems,paymentResult, isPaid });
        // if (order) {
        //     await reduceStock(orderItems);
        // }    

        res.status(201).json({ message: "Order created", order });;
    } catch (error) {
       console.error(error);
    }
}

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private

const getMyOrders =async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.status(201).json(orders);
    } catch (error) {
        console.error(error);
    }
}

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private

const getOrderById =async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("user", "name email");
        if (order) {
            res.status(201).json(order);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.error(error);
    }
}

// get all orders
// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin

const getAllOrders =async (req, res) => {
    try {
        const orders = await Order.find({}).populate("user", "id name");
        if(!orders) {
            return res.status(404).json({ message: "No orders found" });
        }
        let totalAmount=0;
        orders.forEach(order=>{
            totalAmount+=order.totalPrice;
        })
        res.status(201).json(orders,totalAmount);
    } catch (error) {
        console.error(error);
    }
}

// update order status
// @desc    Update order status
// @route   GET /admin/orders/:id
// @access  Private/Admin

const updateOrderStatus =async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
       if(!order) {
           return res.status(404).json({ message: "Order not found" });
       }
       if(order.orderStatus==="Delivered"){
           return res.status(400).json({ message: "Order already delivered" });
       }
       if(req.body.status==="Shipped"){
              
              order.orderStatus="Shipped";
             // order.deliveredAt=Date.now();

           
       }
         if(req.body.status==="Delivered"){
              order.orderStatus="Delivered";
              order.deliveredAt=Date.now();
         }

        const updatedOrder = await order.save({ validateBeforeSave: false });
        res.status(201).json({ message: "Order status updated", updatedOrder });


    } catch (error) {
        console.error(error);
    }
}

// delete order
// @desc    Delete order
// @route   DELETE /api/orders/:id
// @access  Private/Admin

const deleteOrder =async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            
             await Order.deleteOne({_id:req.params.id})
            res.status(201).json({ message: "Order removed" });
        } else {
           return  res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        console.error(error);
    }
}



export { createOrder, getMyOrders, getOrderById, getAllOrders, updateOrderStatus, deleteOrder, };
