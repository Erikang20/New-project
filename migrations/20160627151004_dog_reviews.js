exports.up = function(knex, Promise) {
	return knex.schema.createTable('dog_reviews', function(table) {
		table.increments();
		table.text('review');
		table.integer('written_for').unsigned().index().references('dogs.id');
		table.integer('written_by').unsigned().index().references('users.id');

	});


};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('dog_reviews');

};
