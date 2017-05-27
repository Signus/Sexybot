/*
*   Sexybot - commands/brainyquote.js
*   Grabs a random quote from brainyquote.com
*/

// TODO: Convert to general quote plugin, with arguments for site/theme, etc.

const { Command } = require('discord-akairo');
const kote = require('kote-api');

function exec(message) {
    kote.brainyQuote().then(quote => {
        return message.channel.send(quote.quote);
    });
}

module.exports = new Command('brainyquote', exec, {
    aliases: ['brainyquote'],
    cooldown: 10000
});
