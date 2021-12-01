const req = event => require(`../events/${event}`)
require('events').EventEmitter.defaultMaxListeners = 15;//lrowsxrd
//lrowsxrd
module.exports = client => {//lrowsxrd
    client.on('ready',() => req('ready')(client))//lrowsxrd
    client.on('message',req('message'))//lrowsxrd
   //lrowsxrd
//lrowsxrd
}