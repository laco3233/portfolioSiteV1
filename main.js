// create dad joke generator
let jokeSubmitButton = document.getElementById('jokeSubmit');

let joke = [
    "<b>Question:</b> You want to know what gets my goat? <br/><b>Punchline:</b> El Chupacabra!",
    "<b>Question:</b> What's the best thing about Switzerland? <br/><b>Punchline:</b> I don't know, but the flag is a big plus!",
    "<b>Question:</b> What do you call a fake noodle? <br/><b>Punchline:</b> An impasta!",
    "<b>Question:</b> What's the difference between a hippo and a zippo? <br/><b>Punchline:</b> One is really heavy, the other is a little lighter!",

]
/**
 * Generates a random joke and displays it on the webpage.
 *
 * @param {Event} event - The event object that triggered the function.
 */
let jokeGenerator = (event) => {
    let randomJoke = joke[Math.floor(Math.random() * joke.length)];
    console.log(randomJoke);
    document.getElementById("joke").innerHTML = randomJoke;
}

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
 */
let insultGenerator = (event) => {
    let adjective1 = insult.adjective1[Math.floor(Math.random() * insult.adjective1.length)];
    let adjective2 = insult.adjective2[Math.floor(Math.random() * insult.adjective2.length)];
    let noun = insult.noun[Math.floor(Math.random() * insult.noun.length)];

    console.log(`You absolute ${adjective1} ${adjective2} ${noun}`);
    document.getElementById("insult").innerHTML = `Here is your insult:<br/><b>You ${adjective1} ${adjective2} ${noun}!</b><br/>Try using it on your friends!`;
}

insultSubmitButton.addEventListener('click', insultGenerator);
jokeSubmitButton.addEventListener('click', jokeGenerator);