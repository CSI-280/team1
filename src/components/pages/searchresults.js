import React from 'react'
import pf from '../pf.js';
import { render } from '@testing-library/react';
//import Header from '../header.js'

function searchResults() {
	let userInput = document.getElementById("search")

	
	pf.animal.search({type:	userInput})
    .then(resp =>{
		console.log("Search results", resp.data.animals);
		
		var i;

		for (i = 0; i < 20; i++)
		{
			document.getElementById("animalName" + i).innerHTML = resp.data.animals[i].name
			document.getElementById("animalType" + i).innerHTML = resp.data.animals[i].type
			document.getElementById("animalGender" + i).innerHTML = resp.data.animals[i].gender
			document.getElementById("animalPicture" + i).src = resp.data.animals[i].photos.large
		}
	});
	
	let htmlanimals = [];

	var i;

	for (i = 0; i < 20; i++)
	{
		htmlanimals.push("<h2 id=\"animalName" + i + "\"></h2>");
		htmlanimals.push("<img id=\"animalPicture" + i + "\" src=''></div>");
		htmlanimals.push("<div id=\"animalType" + i + "\"></div>");
		htmlanimals.push("<div id=\"animalGender" + i + "\"></div>")
	}

	return (
		<div>
			{htmlanimals.map(htmlanimal => <div style={animal}>{htmlanimal}</div>)}
		</div>
	)
}

const animal = {
	float: 'left',
	padding: '10px',
	backgroundColor: '#A9A9A9',
	border: '1px solid black',
	width: '250px',
	height: '250px'
}
export default searchResults