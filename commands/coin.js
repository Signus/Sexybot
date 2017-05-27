/*
*   Sexybot - commands/coin.js
*   Heads or tails.
*/

// TODO: Add pictures for heads and tails (Sonic)

const { Command } = require('discord-akairo');

function exec(message) {
    return message.channel.send(Math.random() < 0.5 ? 'heads' : 'tails');
}

module.exports = new Command('coin', exec, {
    aliases: ['coin'],
    cooldown: 10000
});
