/*
*   Sexybot - commands/lmgt.js
*   Appends the input string as a LMGTFY query
*/

const { Command } = require('discord-akairo');

function exec(message, args) {
    if (args.terms) {
        var query = args.terms.replace(/\s/g, '+')
        return message.channel.send('http://lmgtfy.com/?q=' + query);
    }
}

module.exports = new Command('lmgt', exec, {
    aliases: ['lmgt', 'lmgtfy', 'google'],
    args: [
        {
            id: 'terms',
            type: 'text',
            match: 'text'
        }
    ],
    cooldown: 10000
});
