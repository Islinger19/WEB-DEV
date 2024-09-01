const jokes = require("give-me-a-joke");
const cowsay = require("cowsay")
jokes.getRandomDadJoke(function (joke) {
    console.log(joke);
}
)