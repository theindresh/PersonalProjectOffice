import axios from "axios";
import React, { useState, useEffect } from "react";
import '../Home/cards.css'

function Debouncing() {
  const [inputValue, setInputValue] = useState("");
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.trim() !== "") {
        fetchProduct(inputValue);
      } else {
        setProductData(null);
      }
    }, 500); // Adjust debounce delay as needed

    return () => clearTimeout(timer);
  }, [inputValue]);

  const fetchProduct = (id) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setProductData(null);
      });
  };

  return (
    <div className="app">
      <input
        placeholder="Enter Item Number.."
        onChange={(e) => setInputValue(e.target.value)}
      />
      {productData && (
        <div className="card">
        <img src={productData.image} alt="Indresh" className="photoset" />
        <div className="container ">
          <h4 className="hname">{productData.title}</h4>
          <p className="pname">{productData.price}</p>
        </div>
        <div className="">
       
        <button className="custom_buttonb">Add To Cart</button>
        <button className="custom_buttonb">Buy</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default Debouncing;
