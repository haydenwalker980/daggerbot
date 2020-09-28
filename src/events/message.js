module.exports = async (client, message) => {
	const prefix = '.';
	if(!message.content.startsWith(prefix)) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
	const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(c));
	if(!command) return;
	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	try {
		await command.run(client, message, args);
	}
	catch (error) {
		return message.channel.send(error.message);
	}
}
