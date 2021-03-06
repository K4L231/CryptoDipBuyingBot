require('dotenv').config();

const { Client, Intents } = require('discord.js');
const { url } = require('inspector');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
async function sendMSG(content) {
    let channel = await client.channels.fetch(process.env.DC_CHANNEL);
    while (channel === null) {
        channel = await client.channels.fetch(process.env.DC_CHANNEL);
    }
    await channel.send(content)
}

client.login(process.env.DC_TOKEN);
module.exports = { sendMSG };