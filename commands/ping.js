/*
*   Sexybot - commands/ping.js
*   Alternates ping/pong based on the original command. 
*/

const { Command } = require('discord-akairo');

function exec(message) {
    const prefix = this.client.options.prefix;

    switch(message.content.toLowerCase()) {
        case (prefix + 'ping'):
            return message.channel.send('pong!');
        case (prefix + 'pong'):
            return message.channel.send('ping!');
    }
}

module.exports = new Command('ping', exec, {
    aliases: ['ping', 'pong']
});
