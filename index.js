const fs = require('fs')
const shell = require('shelljs')

module.exports = () => {
  let commandsRaw = fs.readFileSync('otlist.json')
  let parsedJSON = JSON.parse(commandsRaw)
  let cmds = process.argv.slice(2)

  function justDoIt(stuff) {
    // console.log(commands)
    stuff.forEach((x) => {
      console.log(`Running \'${x}\':`)
      let playFunction = shell.exec(x)
    })
  }

  if(!(cmds in parsedJSON)){
    console.log(`Task '${cmds}' does not exist.`)
  } else {
      justDoIt(parsedJSON[cmds])
  }
}
