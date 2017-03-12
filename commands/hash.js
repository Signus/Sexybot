/*
*   Sexybot - commands/hash.js
*   Encodes a provided value into md5, sha256, sha1, etc. from CryptoJS
*/

// TODO: Truncate large strings
// TODO: Create message block output for hash list
// TODO: Catch errors as message block to user?

const { Command } = require('discord-akairo');
const crypto = require('crypto');

function exec(message, args) {
    if (args.hashes) {
        return message.channel.send(crypto.getHashes());
    }

    if (args.hash && args.value) {
        hash = crypto.createHash(args.hash).update(args.value).digest('hex');
        return message.channel.send(hash);
    }
}

module.exports = new Command('hash', exec, {
    aliases: ['hash'],
    args: [
        {
            id: 'hash',
            type: 'string'
        },
        {
            id: 'value',
            type: 'string'
        },
        {
            id: 'hashes',
            match: 'flag',
            prefix: '--hashes'
        }
    ],
    cooldown: 10000
});
