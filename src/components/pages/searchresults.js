import React from 'react';
import pf from '../pf.js';
import miss from './images/no-Photo.jpg';
import Header from '../header.js';

class searchResults extends React.Component {

	//constructor
    constructor(props) {
        super(props);
        this.state = {
            //set defaults
            image: miss,
            name: "Loading...", 
            gender: "Loading...", 
            age: "Loading...",
            breed: "Loading...",
            link: "Loading...",
		}
		
	this.search();	
}

search()
{
	let len;

	let userInput = document.getElementById(Header.search).value;

	pf.animal.search({type: userInput, status: "adoptable"})
    .then(resp => {
			
		console.log(resp.data.animals[this.props.index]);

		this.setState({
			name: resp.data.animals[this.props.index].name, 
            gender: resp.data.animals[this.props.index].gender, 
            age: resp.data.animals[this.props.index].age,
            breed: resp.data.animals[this.props.index].breeds.primary,
            link: resp.data.animals[this.props.index].url
		})

		/* get length of photos array */
		len=resp.data.animals[this.props.index].photos.length;

		/*if length > 1 get img*/
		if (len > 0)
		{
			//set image variable
			this.setState({
				image: resp.data.animals[this.props.index].photos[0].medium
			})
		}
	})
};

render() {
	return (
		<div>
			<a href={this.state.link} target="_blank" rel="noopener"></a>
            <h3>{this.state.name} is adoptable</h3>
            <img src={this.state.image} alt="Adoptable Dog" width="400" height="500"/>
            <p>{this.state.age} {this.state.gender} {this.state.breed}</p>
		</div>
	)
}

export default searchResults;