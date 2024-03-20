// create dad joke generator
//let firstName = document.querySelector("firstName");



//insult generator
const insultSubmitButton = document.querySelector("insultSubmitButton");

insultSubmitButton.addEventListener('mousedown', insultGenerator);
insultSubmitButton.addEventListener('mousedown', console.log("test"));
 

let insult = {
    adjective1: ["bald", "horrible", "terrible", "silly", "dumb", "smelly"],
    adjective2: ["gawdy", "foolish", "ugly", "high calorie", "grotesque"],
    noun: ["clown", "sponge", "fool", "Mount Rushmore", "shell of a human"]
}

/**
 * Generates an insult message using random adjectives and a random noun.
 *
 * @param {event} event - the event triggering the function
 * @return {string} the generated insult message
 */
let insultGenerator = (event) => {
    let adjective1 = insult.adjective1[Math.floor(Math.random() * insult.adjective1.length)];
    let adjective2 = insult.adjective2[Math.floor(Math.random() * insult.adjective2.length)];
    let noun = insult.noun[Math.floor(Math.random() * insult.noun.length)];

    console.log(`You absolute ${adjective1} ${adjective2} ${noun}`);
    event.document.getElementById("insult").innerHTML = `You absolute ${adjective1} ${adjective2} ${noun}`;
}

