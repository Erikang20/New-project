exports.up = function ( knex, Promise ) {

	return knex.schema.createTable( 'users', function ( table ) {
		table.increments();
		table.string( 'full_name' );
		table.string( 'userName' );
		table.string( 'email' );
		table.string( 'password' );
		table.string( 'about_me' );
		table.string( 'img' );
		table.string( 'rating' );
		table.boolean( 'isAdmin' );
		table.date( 'date_available_start' );
		table.date( 'date_available_end' );

	} );


};

exports.down = function ( knex, Promise ) {
	return knex.schema.dropTable( 'users' );

};
