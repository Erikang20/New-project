<<<<<<< HEAD
exports.up = function(knex, Promise) {
	return knex.schema.createTable('user_reviews', function(table) {
		table.increments();
		table.text('review');
		table.integer('written_for').unsigned().index().references('users.id').onDelete(
			'CASCADE');
		table.integer('written_by').unsigned().index().references('users.id').onDelete(
			'CASCADE');
=======
exports.up = function( knex, Promise ) {
		return knex.schema.createTable( 'user_reviews', function( table ) {
			table.increments();
			table.text( 'review' );
			table.integer( 'written_for' ).unsigned().index().references( 'users.id' );
			table.integer( 'written_by' ).unsigned().index().references( 'users.id' );
>>>>>>> 6efb26e684517dadde5be74cacbfec015fdfe3e7

		} );
	},


	exports.down = function( knex, Promise ) {
		return knex.schema.dropTable( 'user_reviews' );


	};
