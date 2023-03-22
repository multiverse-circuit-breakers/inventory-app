import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList'
import { Item } from './Item'
import { NavBar } from './Navbar'

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([])

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			setSauces(saucesData); 
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchSauces();
	}, []);

	//GET fetch request for all items
	async function fetchItems(){
		try {
			const res = await fetch(`${apiURL}/items`);
			const itemsData = await res.json();
			setItems(itemsData)
		} catch (err){
			console.log('Error!', err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return ( <>
		<h1 className='heading'>Sauce Store</h1>
		<div><hr className='title-line'></hr></div>
		<NavBar />
		<main className='wrapper'>
			<ItemsList items={items} />
		</main>
	</> )
}