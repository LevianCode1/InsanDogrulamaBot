const { Collection, Client, Discord, MessageEmbed, Message } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
require('discord-buttons')(client);
const path = require('path')
const fs = require('fs')
const discordbuttons = require('discord-buttons')
const { MessageButton, MessageActionRow } = require("discord-buttons")
const keepAlive = require("./server");
const config = require('./config.json');
client.prefix = config.prefix;

client.on('clickButton', async (button) => {
    if (button.id == 'AddVerifiedRole') {
        button.reply.send(`Doğrulandınız!`, true)
        const role = button.guild.roles.cache.get(config.rolid)
        const member = button.clicker.member
        await member.roles.add(role)
    }{}
})

client.on('ready', () => {
    console.log('Bot Is Online')
    client.user.setActivity({
      name: `Sunucu Üyelerini`,
      type: "WATCHING",
      url: "https://www.youtube.com/channel/UCsQkQx6BRlC_fSFuj5mSzZA",
    });
})

client.on('message', async (message) => {
    if (message.content.startsWith(config.mesaj)) {
        const embed = new MessageEmbed()
            .setTitle('Doğrulama')
            .setColor("GREEN")
            .addField(`:flag_tr: Türkçe:`,'İnsan olduğunuzu doğrulamak için aşağıdaki butona tıklayın!')
            .addField(`:flag_us: Engilsh:`,'Click the button below to Verify You\'re Human!')

.setFooter(message.guild.name, client.user.avatarURL())
        const add = new MessageButton()
            .setStyle("green")
            .setLabel("✅ Onayla")
            .setID("AddVerifiedRole")

        const row = new MessageActionRow()
            .addComponent([add])


        message.channel.send({ component: row, embed: embed })
    }
})
keepAlive();
client.login(config.token);

