
const yargs = require("yargs")
const pkg = require('./package.json')
const {addNode, getNodes} = require('./nodes.controller')
yargs.version(pkg.version)
yargs.command({
  command: 'add',
  describe: 'Add new node to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true
    }
  },
  handler({title}) {
    addNode(title)
  }
 })

 yargs.command({
  command: 'list',
  describe: 'print all nodes',
  handler() {
    const notes = getNodes()
    console.log(notes)
  }
 })

 yargs.parse()