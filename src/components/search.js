import React from 'react';
import pf from './pf.js';
import miss from './images/no-Photo.jpg';
import './styles/searchStyle.css'

//https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
// also used a lot of nates adopt page code

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
			//set defaults
			query: '',
            image: miss,
            name: "Loading...", 
            gender: "Loading...", 
            age: "",
            breed: "",
            link: "",
		}
	}

	handleChange(event) {
		this.setState({
			query: event.target.value
		})
		console.log(this.state.query)
		//this.getInfo();
	}

	getInfo = () => {

		/* declare variables */
		let len;
		
		console.log("Test")

		pf.animal.search({type: this.state.query})
        .then(resp =>{
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
			else
			{
				this.setState({
					image: miss
				})
			}

		})
	}

	render() {
		return (
			<div>
				<div class="inputWrapper">
					<input class="search" type="text" value={this.state.query} onChange={event => this.handleChange(event)} placeholder="Search here..." />
					<button class="button" onClick={() => this.getInfo()}>Search</button>
				</div>
				<div class="searchresults" onClick={() => window.open(this.state.link)} onMouseOver={() => this.style="background-color: #292c34;"}>
					<a href={this.state.link} target="_blank" rel="noopener noreferrer"></a>
					<h3>{this.state.name}</h3>
					<img src={this.state.image} alt="Adoptable Dog" width="400" height="500"/>
					<p>{this.state.age} {this.state.gender} {this.state.breed}</p>
				</div>
			</div>
		)
	}
}

export default Search;