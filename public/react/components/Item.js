import React from 'react';

//component for each item card
export const Item = (props) => {

  console.log(props.item.title)

  return <>
    <ul className='list'>
      <img id='img' src={props.item.image} alt={props.item.title}/>
        <div> <hr className='item-line'></hr> </div>
        <h1 className='item-title'>{props.item.title}</h1>
        {/* <h3 className='item-description'>{props.item.description}</h3> */}
        <h4 className='item-price'>${props.item.price}</h4>
        <div><p className='item-category'>{props.item.category}</p></div>
    </ul>
  </>
}
	