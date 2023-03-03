// QUESTION 1

function instagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;

}

// QUESTION 2

const instagramPost1 = new instagramPost('itabanaBlessing', 'politics', 'https://www.instagram.com/p/CpEpXWUsaBA/?igshid=YmMyMTA2M2Y=', 30, 19);

const instagramPost2 = new instagramPost('peaceItimi', 'selfworth', 'https://www.instagram.com/p/CfFKnTCjsJ6/?igshid=YmMyMTA2M2Y=', 2377, 2300);

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

  function createJambScore(ENG,GOVT,LIT,CRK){
     this.eng = ENG;
     this.govt = GOVT;
     this.lit = LIT;
     this.crk = CRK;
 }
 console.log(musa)

 musa.createJambScore = createJambScore(70,85,82,94);
 console.log(musa.createJambScore)

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

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};

for (const key of Object.keys(presidentialCandidates)){
    console.log(presidentialCandidates[key] + " " + "is the presidential candidate of " + (key)); 
}