import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
function Checkout() {
  return (
    <div className='checkout'>
       <div className="checkout__left">
              <img className='checkout__ad' 
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg" alt="" />
              <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
              </div>
        </div>
         <div className="checkout__right">
                  <h2>The subtotal will go here</h2>
                <Subtotal />
                  {/* Subtotal */}
        </div>
    </div>
  )
}

export default Checkout