// Update with your config settings.

module.exports = {

	development: {
		client: 'pg',
		connection: {
			database: 'puppylink'
		}
	},
	production: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL
	}
};
