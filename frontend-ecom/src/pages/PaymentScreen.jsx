import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../redux/slices/cartSlice';
const PaymentScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    useEffect(() => {
        if (!shippingAddress.address) {
            navigate('/ship');
        }
    }, [ shippingAddress, navigate]);

    const [paymentMethod, setPaymentMethod] = useState('PayPal');
      
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/order');
    };

  return (
    <div className=' flex items-center justify-center'>
     {/* code for PaymentScreen */}

     <button onClick={submitHandler}>payment</button>

     


      


    </div>
  )
}

export default PaymentScreen