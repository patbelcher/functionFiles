const student = {
    firstName: "Lorenzo",
    lastName: "Mokwa",
    age: 19,
    isDick: false, 
}

console.log(student.isDick)
console.log(student)
console.log(student.age)


//advanced stuff

//creating a object from separate variables

const make = 'Audi'
const model = 'A3'
const year = 2018

const myCar = { make, model, year } // assembled 3 variables int a single object

console.log(myCar.make)

//frequently, we have an object and we want to break it into separate vaiables

//this is called destructuring

// we have an object 

const movie = {
    title: 'fight club',
    writer: 'chuck p',
    year: 1999,
    genre: "action",
}

//lame way

//const title = movie.title;
//const writer = movie.writer;
//const genre = movie.genre;

//or the more awsome way
const {title, writer, genre, } = movie;

console.log(title);

