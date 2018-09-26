const url = require('url')
const { StringDecoder } = require('string_decoder')
const route = require('./router')

module.exports = (req, res) => {
	const parsedUrl = url.parse(req.url, true)
	const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '')
	const query = parsedUrl.query
	const method = req.method.toLowerCase()
	const headers = req.headers

	let body = ''
	const decoder = new StringDecoder('utf-8')
	req.on('data', data => body += decoder.write(data))
	req.on('end', () => {
		body += decoder.end()

		route(path, query, method, headers, body, (statusCode, payload) => {
			statusCode = typeof statusCode === 'number' ? statusCode : 200
			payload = typeof payload === 'object' ? payload : {}

			res.setHeader('Content-Type', 'application/json')
			res.writeHead(statusCode)
			res.end(JSON.stringify(payload))
		})
	})

}