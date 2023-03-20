import React from 'react';

export const Item = (props) => {

    console.log(props.item.title)

  return <>
    <ul className='list'>
        <img className='img' src={props.item.image} alt={props.item.title} />
        <h1>{props.item.title}</h1>
        <h3>{props.item.description}</h3>
        <h4>{props.item.price}</h4>
        <p>{props.item.category}</p>
    </ul>
  </>
} 
	