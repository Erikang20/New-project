exports.up = function ( knex, Promise ) {
	return knex.schema.createTable( 'dogs_reviews', function ( table ) {
		table.increments();
		table.text( 'review' );
		table.integer( 'written_for' ).unsigned().index().references( 'dogs.id' ).onDelete(
			'CASCADE' );
		table.integer( 'written_by' ).unsigned().index().references( 'users.id' ).onDelete(
			'CASCADE' );

	} );


};

exports.down = function ( knex, Promise ) {
	return knex.schema.dropTable( 'dogs_reviews' );


};
