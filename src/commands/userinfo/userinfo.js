module.exports = {
 name: "userinfo",
 aliases: ["whoami"],
 run: async (client, message, args) => {
  message.channel.send(`your info:\nuser id: ${message.author.id}\nyour username and tag: ${message.author.tag\nyour avatar (URL): ${message.author.avatarURL}`)
 }
}
