// create dad joke generator
let jokeSubmitButton = document.getElementById('jokeSubmit');

let joke = [
    "Question: You want to know what gets my goat? Punchline: El Chupacabra!",
    "Question: What's the best thing about Switzerland? Punchline: I don't know, but the flag is a big plus!",
    "Question: What do you call a fake noodle? Punchline: An impasta!",

]
    




//insult generator
let insultSubmitButton = document.getElementById('insultSubmit');

    

let insult = {
    adjective1: ["hairless", "horrible", "awful", "silly", "unintelligent", "foul"],
    adjective2: ["gawdy", "foolish", "unsightly", "high calorie", "grotesque"],
    noun: ["Toad stool", "sponge", "fool", "Mount Rushmore", "shell of a human"]
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
    document.getElementById("insult").innerHTML = `Here is your insult:<br/><b>You ${adjective1} ${adjective2} ${noun}!</b><br/>Try using it on your friends!`;
}

insultSubmitButton.addEventListener('click', insultGenerator);