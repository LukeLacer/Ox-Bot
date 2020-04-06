module.exports = async (client,msg) => {
    const channel = msg.channel;
    const fetchmsg = await channel.messages.fetch()
    await channel.bulkDelete(fetchmsg)
    msg.reply("Chat Limpo!")
}