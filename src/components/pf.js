import React from 'react';

var petfinder = require("@petfinder/petfinder-js");
export const pf = new petfinder.Client({apiKey: "L7xN9DjGWgJENiTju1kRMvoFeuxtDVPDXJhLhzCbKHP8uXgCEZ", secret: "mCJgTIn4QFV0pBoQXsNz0YPPKQzbraELqfonphtm"});

export default pf