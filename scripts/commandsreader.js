const fs = require("fs") //imports library of node file system
const dir = "./commands/"
const config = require("../config.json")

module.exports = () => {
    var commands = {}
    const scripts = fs.readdirSync(dir)

    scripts.forEach(script => {
        commands[config.prefix+script.split(".")[0]] = require("../"+dir+script)
    })
    return commands
}