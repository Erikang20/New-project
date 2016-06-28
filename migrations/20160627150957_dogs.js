exports.up = function ( knex, Promise ) {

	return knex.schema.createTable( 'dogs', function ( table ) {
		table.increments();

	} );
};


exports.down = function ( knex, Promise ) {
	return knex.schema.dropTable( 'dogs' );

};
