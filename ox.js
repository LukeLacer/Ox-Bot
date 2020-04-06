/*
THIS IS THE MAIN CODE OF THE BOT
*/

const Discord = require("discord.js") //Pull the discord library "discord.js"
const client = new Discord.Client() //create a new client discord
const config = require("./config.json") //take data from JSON config, who has token and prefix for commands
const commands = require("./scripts/commandsreader.js")()

client.on("ready", () => { //When bot ready do this arrow function
    console.log(`Logado com o bot ${client.user.tag}`) //this arrow function make a feedback for the server telling with what the bot are connected
})

client.on("message", (msg) => { //when anyone send a message this arrow function will trigger
    if(!msg.author.bot){ //If who sended isn't a bot... (Because the bot was replying hiself)
        console.log(`${msg.author.username}: ${msg.content}`) //send in the terminal "name of who send: msg sended"
        /*
        This command will be replaced by a file with only commands
        if (msg.content == `${config.prefix}ola`) msg.reply("ola") command "[prefix]ola"
        */
        const args = msg.content.split(" ") //separate words with spaces
        if(commands[args[0]]) commands[args[0]](client,msg) //send message for the client
    }
})

client.login(config.token);