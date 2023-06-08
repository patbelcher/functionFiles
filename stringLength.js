//String Length
//One parameter: string to be measured
//Return the length of the string
//Bonus: pass the result of the Name Concatenator function as the argument

function getLength(string) {
    const totalLength =string.length;
    return totalLength;
}

const text = "Hey baby";
const stringLength = "The total characters of " + text + " is " + getLength(text);
console.log(stringLength);


