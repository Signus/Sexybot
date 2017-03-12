/*
*   Sexybot - A Discord bot to entertain your guild with limitless charm
*/

require('dotenv').config()
const { AkairoClient } = require('discord-akairo');

const client = new AkairoClient({
    ownerID: process.env.DISCORD_CLIENT,
    prefix: '!',
    commandDirectory: './commands/'
});

client.login(process.env.DISCORD_TOKEN).then(() => {
    console.log('Sexybot at your service!');
});
