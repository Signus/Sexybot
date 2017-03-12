/*
*   Sexybot - commands/say.js
*   The bot repeats what you say, and you can @ someone.
*/

// TODO: Add the ability to mention person

const { Command } = require('discord-akairo');

function exec(message, args) {
    if (args.text) {
        return message.channel.send(args.text);
    }
}

module.exports = new Command('say', exec, {
    aliases: ['say', 'tell'],
    args: [
        {
            id: 'text',
            type: 'string'
        },
        {
            id: 'person',
            type: 'member'
        }
    ],
    cooldown: 10000
});
