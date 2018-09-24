const environments = {
	staging: {
		name: 'staging',
		http: { port: 3000 },
		https: { port: 3001 }
	},
	production: {
		name: 'production',
		http: { port: 5000 },
		https: { port: 5001 }
	}
}

const currentEnv = typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : ''

module.exports = typeof environments[currentEnv] === 'object' ? environments[currentEnv] : environments.staging