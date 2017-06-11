/*
*   Sexybot - commands/insult.js
*   Picks a random insult, and you can @ someone
*/

// TODO: Randomize across insult APIs/libraries
// TODO: Add https://github.com/jacc/yomamma
// TODO: Add https://github.com/tomcheng/insults
// TODO: Force insults to require a group or user. If group, make plural.

const { Command } = require('discord-akairo');
const request = require('request');

function generateInsult(callback) {
    const insultURL = 'https://insult.mattbas.org/api/insult.json';

    request({
        url: insultURL,
        json: true
    }, function (err, resp, body) {
        callback(body.insult);
    });
}

function exec(message, args) {

    generateInsult(function(insult) {
        if (args.person) {
            return message.channel.send(insult + ', ' + args.person);
        }

        return message.channel.send(insult);
    });
}

module.exports = new Command('insult', exec, {
    aliases: ['insult'],
    args: [
        {
            id: 'person',
            type: 'member'
        }
    ],
    cooldown: 10000
});
