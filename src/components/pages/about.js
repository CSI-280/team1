import React from 'react';
import miss from './../images/no-Photo.jpg';
import pf from '../pf.js';

let image;

class About extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            image: miss
        }

        this.getImage();
    }

    /*get an image from the API*/
    getImage()
    {
        /* declare variables */
        let len;

        /*API Search*/
        pf.animal.search({type: "dog", status: "adoptable"})
        .then(resp =>{

            /* output photots array to console for testing */
            console.log(resp.data.animals[0].photos);

            /* get length */
            len=resp.data.animals[0].photos.length;
            console.log("Photo Array Length: ", len);

            /*if length > 1 get img*/
            if (len > 0)
            {
                this.setState({
                    image: resp.data.animals[0].photos[0].medium
                })
            }
        })
    };

    render() {

        return (
            <div>
                <h1>About</h1>
                <p>This dog is adoptable</p>
                <img src={this.state.image} alt="Adoptable Dog" />
                
            </div>
        )
    }
}

// function About() {


//     return (
//         <React.Fragment>
//             <h1>About</h1>
//             <p>This dog is adoptable</p>
//             <img src={getImg()} alt="Adoptable Dog" />
//             <p>{image}</p>
//         </React.Fragment>
//     )
// }

export default About;