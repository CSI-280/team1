import React from 'react';
import dog from '../images/dog.jpg';
import Pet from '../pet.js';
import family from '../images/dogs.png';
import '../styles/homeStyle.css';


function Home() {
    return (
        <container>
            <div id="right">
                <h3>Available Dogs</h3>
                <Pet index="0" button="false" typePassed="dog"/>
                <Pet index="1" button="false" typePassed="dog"/>
            </div>
            <div>
                <img style={dogStyle} src={dog} alt="this is a dog" wdith="250" height="300"/>
                <p id="left">
                <b>Every pet needs a home and we want to give them one! </b><br></br>
                There are so many beautiful animals in the world that need homes. This site attempts
                to makes it easier for everyone to adopt pets. We use the petfinder application 
                programming interface to retrive data on real animals waiting to be potential pets. 
                There are many differnt types of anaimals to be found on this site. Old animals, young 
                animals,dogs, cats, horses, rabbits, snakes, turtles, cows, goats, sheep, and even more!
                </p>
                <p id="miss">
                <b>Pet Finder's mission </b><br></br>
                To use Internet technology and the resources it can generate to:<br></br>
                1.) Increase public awareness of the availability of high-quality adoptable pets<br></br>
                2.) Increase the overall effectiveness of pet adoption programs across North 
                America to the extent that the euthanasia of adoptable pets is eliminated<br></br>
                3.) Elevate the status of pets to that of family member<br></br>
                From the comfort of their personal computers, pet lovers can search for a pet that 
                best matches their needs. They can then reference a shelter’s web page and discover 
                what services it offers. Petfinder also includes discussion forums, a pet-care resource
                directory and a library of free pet-care articles to help keep pets in their homes.
                </p>
                <img style={dogStyle2} src={family} alt="Family of dogs" wdith="350" height="400"/>
            </div>
        </container>
    )
}
const dogStyle = {
    padding: '10px',
    float: 'left'
}

const dogStyle2 = {
    'margin-top': '5%'
}
export default Home
