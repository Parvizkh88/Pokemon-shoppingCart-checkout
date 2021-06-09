// import {useState} from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemCart from './ItemCart';


const TotalPrice= styled.div`
  display:flex;
  justify-content:space-around;
  align-items: center;
`;
const CheckOut= styled.button`
  background-color: black;
  color: white;
  width: 400px;
  padding: 10px;
  display: block;
  margin: auto;
`;


export function ShoppingCart() {
  
  // const [totalPrice,setTotalPrice]=useState(0)
  let total=0
  let totalQty=0

  const getLocalStorage=()=>{
    if(localStorage.getItem("cart")){
     return JSON.parse(localStorage.getItem("cart"))
    }
    return []
  }

  const products= getLocalStorage()
    
  return (
    products.length
    ?
    <div>
      {products.map(item => {
       total += item.quantity*item.price
       totalQty +=item.quantity
        return <ItemCart item={item}  /> 
        }
        )}
        <TotalPrice className="">
          <h3>total Price</h3>
          <h3>{total}</h3>
          <h3>{totalQty}</h3>
        </TotalPrice>
        <CheckOut>
          <Link to="/CheckOut">Checkout</Link>
        </CheckOut>
    </div>

    :
      <h2>Your cart is empty!!</h2>

  )
}