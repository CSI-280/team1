import React from 'react';
import miss from './../images/no-Photo.jpg';
import pf from '../pf.js';

/*get an image from the API*/
function getImg()
{
    /* declare variables */
    var len;
    var img;

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
            img=resp.data.animals[0].photos[0].medium
        }

        /*else set img to missing image*/
        else
        {
            img=miss;
        }

        console.log(img);
        return img
    })
};

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This dog is adoptable</p>
            <img src={getImg()} alt="Adoptable Dog" />
            </React.Fragment>
    )
}

export default About;