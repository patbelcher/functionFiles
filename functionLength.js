function getLength(string) {
    const totalLength =string.length;
    return totalLength;
}

const text = "Hey baby";
const stringLength = "The total characters of " + text + " is " + getLength(text);
console.log(stringLength);