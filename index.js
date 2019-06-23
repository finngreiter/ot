const fs = require('fs')
const exec = require('ez-spawn')

module.exports = () => {
  let commandsRaw = fs.readFileSync('otlist.json')
  let parsedJSON = JSON.parse(commandsRaw)
  let cmds = process.argv.slice(2)

  function justDoIt(stuff) {
    // console.log(commands)
    stuff.forEach((x) => {
      console.log(`Running \'${x}\'.`)
      exec.sync(x, (z) => console.log(z))
    })
  }
  justDoIt(parsedJSON[cmds])
}
