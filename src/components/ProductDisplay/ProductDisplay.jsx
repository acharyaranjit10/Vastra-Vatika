import React,{useContext} from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.svg';
import star_dull_icon from '../Assets/star_dull_icon.svg';
import {ShopContext} from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props;
  const{addToCart} = useContext(ShopContext);
  
  if (!product) {
    return <div>Product not found.</div>; // Return an error message if product data is missing
  }

  const {
    image = 'default-image.jpg',
    name = 'Unknown Product',
    old_price = '0',
    new_price = '0',
    rating = 4, // Default rating
    reviews = 0
  } = product;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={image} alt={name} />
          <img src={image} alt={name} />
          <img src={image} alt={name} />
          <img src={image} alt={name} />
        </div>
        <div className="product-display-img">
          <img className='productdisplay-main-img' src={image} alt={name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{name}</h1>
        <div className="product-display-right-stars">
          {Array.from({ length: 5 }, (_, index) => (
            <img
              key={index}
              src={index < rating ? star_icon : star_dull_icon}
              alt={`star-${index}`}
            />
          ))}
          <p>({reviews})</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            Rs.{new_price}
          </div>
          <div className="productdisplay-right-price-old">
            Rs.{old_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Crafted from high-quality fabric, this versatile piece offers both comfort and style. Perfect for any occasion, it features a sleek design that complements any wardrobe.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
        <p className='productdisplay-right-category'>
          <span>Category: </span>Women, T-shirt, Croptop
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

