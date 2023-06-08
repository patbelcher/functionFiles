//Gas cost calculator
//two parameters: starting odometer reading and ending odometer reading
//Return the cost of gas for this trip at $3.64 per mile

function gasCost(end, start) {
    const perMileCost = .10
    const myCost = (end - start)  * perMileCost;
    return myCost;
}
const tripCost = gasCost(350, 120 );
console.log(tripCost);
console.log("Ending miles - starting miles * .10 per mile is trip cost.");