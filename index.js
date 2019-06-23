const fs = require('fs')
const exec = require('child_process').exec

module.exports = () => {
  let commandsRaw = fs.readFileSync('otlist.json')
  let commands = JSON.parse(commandsRaw).commands
  console.log(commands)
  commands.forEach((x) => {
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
