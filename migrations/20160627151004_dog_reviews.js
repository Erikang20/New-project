exports.up = function ( knex, Promise ) {
	return knex.schema.createTable( 'dog_reviews', function ( table ) {
		table.increments();

	} );


};

exports.down = function ( knex, Promise ) {
	return knex.schema.dropTable( 'dog_reviews' );


};
