//Cone Calculator
//Two parameters: radius and height
//Return the volume of a cone with these conditions
//Formula: https://www.google.com/search?q=volume+of+a+cone

function coneCalculator(radius, height) {
    const volume = (1/3 * height) * 3.14 * Math.pow(radius, 2);
    return volume;
}

const finalVolume = coneCalculator(4, 5);
console.log("The volume of the cone is " + finalVolume); 