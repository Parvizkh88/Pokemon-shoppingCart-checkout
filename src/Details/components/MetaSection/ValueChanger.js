import { useState} from "react";

import styled from "styled-components";

const ValueController = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
`;

const IncreaseBtn = styled.button`
  font-size: 20pt;
  font-weight: bold;
  background-color: black;
  color: white;
  width: 70px;
  height: 70px;
  border-radius:50%
`;
const DecreaseBtn = styled.button`
font-size: 20pt;
font-weight: bold;
background-color: black;
color: white;
width: 70px;
height: 70px;
border-radius:50%
`;
const ValueInput = styled.input`
  width: 90px;
  height: 70px;
  margin: 15px;
  font-size: 20pt;
  font-weight: bold;
  text-align:center;
`;


const ValueChanger = ({idPro,ZeroValue,value}) => {
  const [valuePro, setValuePro] = useState(value);

  const decreaseValue=()=>{
    if(valuePro>1)
      setValuePro(valuePro-1)
    else{
      setValuePro(0)

      setTimeout(() => {
         ZeroValue()
      }, 1000);
      
    }

  
    if(localStorage.getItem("cart")){
      let products= JSON.parse(localStorage.getItem("cart"))
      const newProduct = products.find(item => item.id===idPro )
      products = products.filter(item => item.id!==idPro )

      if(valuePro-1 > 0){
        newProduct.quantity=valuePro-1
        products.push(newProduct)
      }
        
      localStorage.setItem("cart",JSON.stringify(products))
      
      
    }
    
       
  }

  const increaseValue=()=>{
    if(valuePro < 100){
      setValuePro(valuePro+1)

      if(localStorage.getItem("cart")){
        let products= JSON.parse(localStorage.getItem("cart"))
        const newProduct = products.find(item => item.id===idPro )
        products = products.filter(item => item.id!==idPro )

        
        newProduct.quantity=valuePro+1
        products.push(newProduct)
        localStorage.setItem("cart",JSON.stringify(products))
      }
    }
    
       
  }

  return(
    <ValueController>
      <DecreaseBtn onClick={decreaseValue}> - </DecreaseBtn>
      <ValueInput value={valuePro} readOnly />
      <IncreaseBtn onClick={increaseValue}> + </IncreaseBtn>
    </ValueController>
  )
};

export {styled }
export default ValueChanger;