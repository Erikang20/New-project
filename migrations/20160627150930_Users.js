exports.up = function( knex, Promise ) {

	return knex.schema.createTable( 'users', function( table ) {
		table.increments();
		table.string( 'full_name' );
		table.string( 'userName' );
		table.string( 'email' );
		table.string( 'password' );
		table.string( 'about_me' ).defaultTo( '' );
		table.string( 'img' ).defaultTo( '' );
		table.string( 'rating' ).defaultTo( 0 );
		table.boolean( 'isAdmin' ).defaultTo( false );
		table.date( 'date_available_start' ).defaultTo( '1000-1-1' );
		table.date( 'date_available_end' ).defaultTo( '1000-1-1' );

	} );
};

exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'users' );

};
