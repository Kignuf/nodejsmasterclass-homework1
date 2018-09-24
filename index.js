const fs = require('fs')
const Server = require('./src/server')
const config = require('./src/config')

const key = fs.readFileSync(__dirname + '/https/key.pem')
const cert = fs.readFileSync(__dirname + '/https/cert.pem')

const server = new Server({key, cert})

server.start(config)