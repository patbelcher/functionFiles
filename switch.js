//a switch statemetn is for ehrn er have many possible consitions

const pet = "bird";
switch(pet){
    case "dog":
    case "mutt":
    case "puppy":
    console.log("woof");
    break;

    case "kitten":
    case "cat":
    console.log("meow");
    break;

    case "bird":
    console.log("chirp");
    break;

    default:
    console.log("Cool pet, dude");
}


//now for the master coders, not the preferred way
/*
const grade = 82;

switch(true) {
    case (grade >= 90):
    console.log("A");
    break;

    case (grade >= 80):
    console.log("B");
    break;

    case (grade >= 70):
    console.log("C");
    break;

    case (grade >= 60):
    console.log("D");
    break;

    default: 
    console.log("F");

}



*/