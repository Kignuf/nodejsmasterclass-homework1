const handlers = require('./handlers')

function route(path, query, method, headers, cb) {
	// check path
	let handler = typeof handlers[path] !== 'undefined' ? handlers[path] : handlers.notFound
	// check method
	handler = typeof handler[method] !== 'undefined' ? handler[method] : handlers.notFound

	handler({path, query, method, headers}, cb)
}

module.exports = route