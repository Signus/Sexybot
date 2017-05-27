/*
*   Sexybot - commands/catdog.js
*   Grabs a random picture from random.cat or random.dog, based on command
*   If 'catdog' supplied, will randomly choose a cat or dog
*/

const { Command } = require('discord-akairo');
const request = require('request');

const requestURLs = {
    'cat': 'https://random.cat/meow.php',
    'dog': 'https://random.dog/woof.json'
}

function fetchPicture(command, callback) {
    switch(command) {
        case 'cat':
            url = requestURLs.cat;
            break;
        case 'dog':
            url = requestURLs.dog;
            break;
        default:
            url = Math.random() < 0.5 ? requestURLs.cat : requestURLs.dog
            break;
    }

    // TODO: Figure out how to redo request if mp4 or gif is returned.
    request({
        url: url,
        json: true
    }, function (err, resp, body) {
        if (url.includes('cat')) {
            callback(body.file);
        } else if (url.includes('dog')) {
            callback(body.url);
        }
    });
}

function exec(message) {
    const command = message.content.toLowerCase().replace(/^./, '');

    fetchPicture(command, function(file) {
        return message.channel.sendFile(file);
    });
}

module.exports = new Command('catdog', exec, {
    aliases: ['catdog', 'cat', 'dog', 'kitty', 'puppy'],
    cooldown: 10000
});
