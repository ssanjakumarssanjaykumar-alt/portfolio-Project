import React from 'react'
import shoe from './asset/shoe.webp'
import './Product.css'

const Product = ({ productObj }) => {
    
  return (
    <div>
      {productObj.map((i)=>{
        return(
            <div>
               <div style={{ display: "flex" }}>
            {productObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={shoe} className="imageShoe" />
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikePrice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
                

            </div>
        )
      })}
    </div>
  )
}

export default Product