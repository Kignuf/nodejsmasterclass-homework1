const http = require('http')
const https = require('https')

const app = require('./app')

function onStart() {
	console.log(`Server listening on port ${this.port}`)
}

class Server {
	constructor(httpsOptions) {
		this.httpServer = http.createServer(app)
		this.httpsServer = https.createServer(httpsOptions, app)
	}

	start(config) {
		const {http: httpConf, https: httpsConf} = config
		this.httpServer.listen(httpConf.port, onStart.bind(httpConf))
		this.httpsServer.listen(httpsConf.port, onStart.bind(httpsConf))
	}
}

module.exports = Server