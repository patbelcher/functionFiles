//Name Concatenator
//Two parameters: first name and last name
//Return the full name of the person

function fullName(first, last) {
    const myName = first + ' ' + last;
    return myName;
}
const getName = fullName("paco", "Jones");
console.log(getName);