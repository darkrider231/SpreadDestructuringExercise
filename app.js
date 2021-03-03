// Destructuring Exercise
// 1a
const mcuShows = ["The Falcon And The Winter Soldier", "WandaVision"];

// 1b
const starWarsShows = ["The Mandalorian", "The Clone Wars"];

// 1c
const disneyPlusShows = {
    mcuShows,
    starWarsShows,
    anotherShow: "Muppets Now"
};

// 1d
console.log(disneyPlusShows);

// 2a
const netflixMovies = {
    action: `Extraction`,
    drama: `The Irishman`
};

// 2b
const disneyPlusMovies = {
    musical: `Hamilton`,
    drama: `Togo`
}

// 2c
const streamingMovies = {
    ...netflixMovies,
    
    ...disneyPlusMovies,
    comedy: `Shazam!`
}

// 2d
console.log(streamingMovies);

// 3a
const disneyJunior = {

    pj: "PJ Masks",
    jake: "Jake and the Neverland Pirates"
};

// 3b
const{pj, jake} = disneyJunior;
// 3c
console.log(pj, jake);

// 4a
const avengers = {
    captainAmerica: "Steve Rogers",
    theHulk: "Bruce Banner"
};

// 4b
const {captainAmerica: captainA, theHulk: theHulkA} = avengers;

// 4c
console.log(captainA, theHulkA);

// 4d
const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye: `Clint Barton`,
    ironMan: `Tony Stark`
};

// 4e
const {blackWidow: nat, hawkeye: others1, ironMan: others2} = moreAvengers;

// 4f
console.log(nat, others1, others2);

// BONUS
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
  };
