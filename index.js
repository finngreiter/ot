const fs = require('fs')
const exec = require('child_process').exec

module.exports = () => {
  let commandsRaw = fs.readFileSync('otlist.json')
  let parsedJSON = JSON.parse(commandsRaw)
  let cmds = process.argv.slice(2)

  function justDoIt(stuff) {
    // console.log(commands)
    stuff.forEach((x) => {
      console.log(`Running \'${x}\'.`)
      exec(x, (err, stdout, stderr) => {
        if(stdout !== null) {
          console.log(stdout)
        }
        if(stderr !== null) {
          console.log(stderr)
        }
      })
    })
  }
  justDoIt(parsedJSON[cmds])
}
