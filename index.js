// QUESTION 1

function instagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;

}

// QUESTION 2

const instagramPost1 = new instagramPost('itabanaBlessing', 'politics', 'abcdef', 30, 19);

const instagramPost2 = new instagramPost('peaceItimi', 'selfworth', 'abcdefh', 2377, 2300);

console.log(instagramPost1);
console.log(instagramPost2);

// QUESTION 3A

function createPerson(name, age, location){
    this.name = name;
    this.age = age;
    this.location = location;
}

const musa = new createPerson('Musa Dawodu', 19, 'Lekki');
console.log(musa)

// QUESTION 3B

// function createJambScore(ENG,GOVT,LIT,CRK){
//     this.eng = ENG;
//     this.govt = GOVT;
//     this.lit = LIT;
//     this.crk = CRK;
// }

// musa.createJambScore = jambScore (70,85,82,94);
// console.log(musa)

// QUESTION 4

// Using Object.assign

const movie = {
    title: 'Omo Ghetto Saga',
    producer: 'Funke Akindele',
    year: 2021,
}

console.log(movie)

const secondMovie = Object.assign({}, movie);

secondMovie.title = 'Battle on Buka Street';

console.log(movie);
console.log(secondMovie);

// using spread syntax

const thirdMovie = {... movie};
thirdMovie.title = 'Jennifer Diary';

console.log(movie);
console.log(thirdMovie);


// using JSON.Parse

const fourthMovie = JSON.parse(JSON.stringify(movie));
fourthMovie.title = 'player coach';

console.log(movie);
console.log(fourthMovie);


// question 5