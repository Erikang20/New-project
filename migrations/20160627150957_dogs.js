exports.up = function( knex, Promise ) {

	return knex.schema.createTable( 'dogs', function( table ) {
		table.increments();
<<<<<<< HEAD
		table.string('name');
		table.integer('age');
		table.string('breed');
		table.string('img');
		table.string('description');
		table.date('date_need_care_start');
		table.date('date_need_care_end');
		table.integer('owner').unsigned().index().references('users.id').onDelete(
			'CASCADE');

	});
=======
		table.string( 'name' );
		table.integer( 'age' );
		table.string( 'breed' );
		table.string( 'img' );
		table.string( 'description' );
		table.date( 'date_need_care_start' );
		table.date( 'date_need_care_end' );
		table.integer( 'owner' ).unsigned().index().references( 'users.id' );
>>>>>>> 6efb26e684517dadde5be74cacbfec015fdfe3e7

	} );

};


exports.down = function( knex, Promise ) {
	return knex.schema.dropTable( 'dogs' );

};
