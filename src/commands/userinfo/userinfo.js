module.exports = {
 name: "userinfo",
 aliases: ["whoami"],
 run: async (client, message, args) => {
  message.channel.send(`your info:\nuser id: ${msg.author.id}\nyour username and tag: ${msg.author.tag}\nyour avatar (URL): ${msg.author.displayAvatarURL}`)
 }
}
