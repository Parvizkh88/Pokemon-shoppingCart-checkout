import ValueChanger,{styled} from "../Details/components/MetaSection/ValueChanger";

// import styled from "styled-components";

const Item= styled.div`
  display:flex;
  justify-content:space-around;
  align-items: center;
`;

const ImageItem= styled.img`
    width: 200px;
    height: 200px;
`;

export default function ItemCart( {item} ) {

    return (
       <Item>
           <ImageItem src={item.image} className="" alt=""/>
           <h3>{item.name}</h3>
           <div>{item.price}</div>
           <ValueChanger idPro={item.id} value={item.quantity} />
       </Item>
    
      )
}
