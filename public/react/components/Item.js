import React from 'react';

export const Item = (props) => {

  console.log(props.item.title)

  return <>
    <ul className='list'>
        <img id='img'className='list-items' src={props.item.image} alt={props.item.title} />
        <h1 className='list-items'>{props.item.title}</h1>
        <h3 className='list-items'>{props.item.description}</h3>
        <h4 className='list-items'>${props.item.price}</h4>
        <p className='list-items'>Category: {props.item.category}</p>
    </ul>
  </>
} 
	