//Summation sentence
//Two parameters: num1 and num2
//Print to the console: “The sum of [num1] and [num2] is [result]”
//Bonus: write two versions of this function:
//Use console.log() inside of the function - this function returns nothing
//Challenge - do not use console.log() inside of the function


function summationSentence(num1, num2) {
    const result = num1 + num2;
    return (
        console.log("the sum of " + num1 + " and " + num2 + " is " + result)
    )
}
summationSentence(4, 5);