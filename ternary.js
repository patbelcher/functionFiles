//a ternary is a shorthand if/else statement
/* 
insread of writing
const pet = " dog";
if(pet === "dog") {
    petSound === "woof";
} else {
    petSound === "meow";
}

**Now  BETTER WAY

let petSound = "meow";
if(pet ==="dog") {
    petSound ===" woof";
}
in the above the else if not needed

now for a ternary
it has the form
(condition) ? __(if true)___ : _(if false)_____;

so lets rewrite the above
*/
const petSound = (pet ==="dog") ? "woof" : "meow";

const sound = (pet ==="dog")
                    ? "woof"
                    : (pet ==="cat")
                    ? "meow"
                    : "chirp";