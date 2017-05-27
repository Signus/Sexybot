# sexybot
Sexybot is a multi-purpose bot meant for some tomfoolery in your guild.

## Installation
Copy the `.env.example` and populate the file:

```sh
cp .env.example .env
```

```
DISCORD_CLIENT=clientid
DISCORD_TOKEN=token
```

Install the dependencies and start the sexybot client:
```sh
$ cd sexybot
$ npm install
$ node sexybot.js
```

## Commands
 - `!brainyquote` : Produces a ~~random~~ quote from brainyquote.com
 - `!catdog` : Returns a random picture of a cat or dog. Also accepts `!cat` and `!dog`
 - `!coin`: Flip a coin
 - `!hash` : Generates a hash digest for a provided string
 - `!insult` : Generates a random insult
 - `!lmgt` : Generates a lmgtfy.com query from the provided string
 - `!ping` : Ping? Pong! Pong? Ping!
 - `!say` : Repeats the provided string
 - `!xkcd` : Produces a random image from xkcd

### Planned Commands
In the progress of building a bunch of random commands for fun!
 - `cah` : Play a game of Cards Against Humanity
 - `clue` : "@Signus did it with the candlestick in the library"
 - `currency` : Convert currencies
 - `dice` : Roll a die
 - `dj` : Music server
 - `doge` : Such Discord, much bot
 - `gif` : Produces a random gif based on a search string
 - `opensnow` : Get snow conditions and forecasts from Opensnow
 - `rfc` : Search RFC documents
 - `slap` : Slap members of your channel
 - `trivia` : What is the airspeed velocity of an unladen swallow?
 - `weather` : Get the weather for a zip code

## Examples

## TODO
 - Group commands by function
 - Add helper functions for describing command arguments
 - Add music server

## License
[MIT](LICENSE)
