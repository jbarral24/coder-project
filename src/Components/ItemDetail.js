import React from 'react';
import ItemsDetailContainer from './ItemsDetailContainer';

const ItemDetail = (props) => {

return (
<ItemsDetailContainer>  name = {props.name} price = {props.price} color = {props.color} seller = {props.seller} </ItemsDetailContainer>

)


};


export default ItemDetail;

