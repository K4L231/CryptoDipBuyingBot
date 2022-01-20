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
    let channel = await client.channels.fetch("933371340721881168");
    while (channel === null) {
        channel = await client.channels.fetch("933371340721881168");
    }

    console.log(channel.name)
    await channel.send(content)
}

client.login(process.env.DC_TOKEN);
module.exports = { sendMSG };