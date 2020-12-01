import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props)
{
const[products, setProduct] =  useState([]);

useEffect(()=>{

  const fetchData=async()=>{
    axios.defaults.port = 5000;
     const {data}=await axios.get("http://localhost:5000/api/products");
     setProduct(data);
  }
  fetchData();
  return()=>{ };

}, []);

    return <ul className="products">
    {
      products.map(product =>
        <li key={product._id}>
        <div className="product" >
         
          <div className="product-name">
          <Link to={'/product/'+product._id}>
          <img className="product-image" src={product.image} alt="product_image" ></img>
            {product.name} 
          </Link></div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">Rs{product.price}</div>
          <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
          
        </div>
      </li>
        )
    }
  </ul>
    
}
export default HomeScreen;