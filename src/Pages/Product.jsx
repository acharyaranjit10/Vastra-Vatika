
import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import {ShopContext} from '../Context/ShopContext'
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  
  return (
    <div>
     <Breadcrum product={product || { category: "Unknown", name: "Product" }} />

      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />

    </div>
  )
}
