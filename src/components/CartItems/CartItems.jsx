import React,{useContext} from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove.svg'
const CartItems = () => {
    const {getTotalCart, all_product,cartItems,removeFromCart}= useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="ci-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
  if (cartItems[e.id] > 0) {
    return (
      <div key={e.id}>  {/* ✅ Added key */}
        <div className="ci-f ci-format">
          <img className='cipi' src={e.image} alt="" />
          <p>{e.name}</p>
          <p>Rs.{e.new_price}</p>
          <button className='ci-quantity'>{cartItems[e.id]}</button>
          <p>Rs.{e.new_price * cartItems[e.id]}</p>
          <img className='ci-rem' onClick={() => removeFromCart(e.id)} src={remove_icon} alt="" />
        </div>
        <hr />
      </div>
    );
  }
  return null;
})}
      <div className="cartitems-down">
        <div className="ci-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="ci-ti">
              <p>
                Subtotal
              </p>
              <p>Rs.{getTotalCart()}</p>
            </div>
            <hr />
            <div className="ci-ti">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="ci-ti">
              <h3>Total</h3>
              <h3>Rs.{getTotalCart()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="ci-promo">
          <p>If you have a promocode, enter here</p>
          <div className="ci-pbox">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems