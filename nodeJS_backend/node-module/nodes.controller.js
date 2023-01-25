const fs = require('fs/promises')

async function addNode() {
  const notes =  require('./db.json')
  const node  = {
    title, 
    id: Date.now().toString()
  }
  notes.push(node)
 await fs.writeFile('./db.json', JSON.stringify(notes))
}
function getNodes() {
  return require('./db.json')
}

module.exports = {
  addNode, getNodes
}