const { Client, Collection } = require("discord.js");
const config = require('./config.js');
const client = new Client();

["commands", "aliases"].forEach(x => client[x] = new Collection());

["command", "event"].forEach(handler => {
    require(`./modules/handlers/${handler}`)(client);
});

client.login(config.bot.token)
console.log('no')
