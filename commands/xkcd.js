/*
*   Sexybot - commands/xkcd.js
*   Returns a random picture from XKCD
*/

// TODO: Pass arguments to get latest, random, or a specific comic.
// TODO: Introduce error handler for all plugins

const { Command } = require('discord-akairo');
const xkcd = require('xkcd-imgs');

function exec(message) {
    xkcd.img(function(err, res){
        if(!err) {
            return message.channel.sendFile(res.url);
        }
    });
}

module.exports = new Command('xkcd', exec, {
    aliases: ['xkcd'],
    cooldown: 10000
});
