const handlers = require('./handlers')

function route(path, query, method, headers, body, cb) {
	let handler
	// check path
	if(typeof handlers[path] !== 'undefined'){
		// check method
		handler = handlers[path]
		handler = typeof handler[method] !== 'undefined' ? handler[method] : handlers.methodNotAllowed
	} else {
		handler = handlers.notFound
	}

	handler({path, query, method, headers, body}, cb)
}

module.exports = route