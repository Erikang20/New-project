exports.up = function( knex, Promise ) {

	return knex.schema.createTable( 'dogs', function( table ) {
		table.increments();
		table.string( 'name' );
		table.integer( 'age' );
		table.string( 'breed' );
		table.string( 'img' );
		table.string( 'description' );
		table.date( 'date_need_care_start' );
		table.date( 'date_need_care_end' );
		table.integer( 'owner' ).unsigned().index().references( 'users.id' );

	} );

};


exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'dogs' );

};
