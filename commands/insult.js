/*
*   Sexybot - commands/insult.js
*   Picks a random insult, and you can @ someone
*/

// TODO: Create list of insult generators to choose from.
// TODO: Detect if user mention doesn't exactly match member.

const { Command } = require('discord-akairo');
const request = require('request');

// Utilizes Ryan McGreal's Elizabethan Insult Generator
// http://quandyfactory.com/insult
function generateInsult(callback) {
    const insultURL = 'http://quandyfactory.com/insult/json';

    request({
        url: insultURL,
        json: true
    }, function (err, resp, body) {
        callback(body.insult.replace(/.$/, ""));
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
