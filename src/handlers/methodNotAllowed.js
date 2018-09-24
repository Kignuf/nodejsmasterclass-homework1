module.exports = (data, cb) => {
	cb(405, {error: `Method "${data.method} is not allowed for this route`})
}