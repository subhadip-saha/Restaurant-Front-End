import React from "react";
import "./style.css";
import Menu from "./menuApi";

const Restaurant = () => {
  return (
      
      <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">Maggi</h2>
            <span className="card-description subtle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            In, fuga quam sunt velit sed perspiciatis.
            </span>
            <div className="card-read">Read</div>
         </div>
      
         <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
      </>
      
  );
};

export default Restaurant;