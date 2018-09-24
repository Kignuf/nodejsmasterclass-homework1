module.exports = (data, cb) => {
	cb(404, {error: `Page "${data.path}" not found`})
}