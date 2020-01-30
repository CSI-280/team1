import React from 'react'
import pf from '../pf.js';
import Header from '../header.js'

function searchResults() {
	let userInput = document.getElementById("search")
	
	pf.animal.search({type:	userInput})
    .then(resp =>{
        console.log("Search results", resp.data.animals);
		
		document.getElementById("animalName").innerHTML = resp.data.animals[0].name
		document.getElementById("animalType").innerHTML = resp.data.animals[0].type
		document.getElementById("animalGender").innerHTML = resp.data.animals[0].gender
		document.getElementById("animalPicture").src = resp.data.animals[0].photos.large
    });
	
	return (
		<div>
			<div id="animalType"></div>
			<div id="animalGender"></div>
			<div id="animalName"></div>
			<img id="animalPicture" src=""/>
		</div>
	)
}

export default searchResults