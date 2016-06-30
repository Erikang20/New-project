exports.seed = function( knex, Promise ) {
	// Deletes ALL existing entries
	return knex( 'dogs' ).del()
		.then( function() {
			return Promise.all( [
				// Inserts seed entries
				knex( 'dogs' ).insert( {
					name: 'Iris',
					age: 12,
					breed: 'corgi',
					dog_img: 'https://dog_imgurl.com',
					description: 'Black coat with white crescent around the neck, long ears, stubby legs, long tail',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 1
				} ),
				knex( 'dogs' ).insert( {
					name: 'Barky',
					age: 3,
					breed: 'Golden Lab',
					dog_img: 'https://dog_imgurl.com',
					description: 'Generic Golden Lab Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 2
				} ),
				knex( 'dogs' ).insert( {
					name: 'Woofy',
					age: 2,
					breed: 'Pug',
					dog_img: 'https://dog_imgurl.com',
					description: 'Generic Pug Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 3
				} ),
				knex( 'dogs' ).insert( {
					name: 'McWoof',
					age: 12,
					breed: 'St. Bernard',
					dog_img: 'https://dog_imgurl.com',
					description: 'Generic St. Bernard Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 4
				} ),
				knex( 'dogs' ).insert( {
					name: 'Zenbarka',
					age: 3,
					breed: 'Golden Lab',
					dog_img: 'https://dog_imgurl.com',
					description: 'Super Enlightened',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 5
				} ),
				knex( 'dogs' ).insert( {
					name: 'Mei',
					age: 2,
					breed: 'Siberian Husky',
					dog_img: 'https://dog_imgurl.com',
					description: 'Ice Cold Bitch',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 6
				} ),
				knex( 'dogs' ).insert( {
					name: 'Winston',
					age: 12,
					breed: 'Pug',
					dog_img: 'https://dog_imgurl.com',
					description: 'Jumps around a lot',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 7
				} ),
				knex( 'dogs' ).insert( {
					name: 'Mercy',
					age: 3,
					breed: 'Golden Lab',
					dog_img: 'https://dog_imgurl.com',
					description: 'Makes you feel better after you feel dead',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 8
				} ),
				knex( 'dogs' ).insert( {
					name: 'Lucio',
					age: 2,
					breed: 'Pug',
					dog_img: 'https://dog_imgurl.com',
					description: 'Loves Music',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 9
				} ),
				knex( 'dogs' ).insert( {
					name: 'Woofbjorn',
					age: 12,
					breed: 'corgi',
					dog_img: 'https://dog_imgurl.com',
					description: 'Sits around and waits for things to happen for him',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 10
				} ),
				knex( 'dogs' ).insert( {
					name: 'Rhinebark',
					age: 3,
					breed: 'Black Lab',
					dog_img: 'https://dog_imgurl.com',
					description: 'Very Protective of loved ones',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 11
				} ),
				knex( 'dogs' ).insert( {
					name: 'Roaddog',
					age: 2,
					breed: 'corgi',
					dog_img: 'https://dog_imgurl.com',
					description: 'Always pulls things down with his tail',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 12
				} ),
				knex( 'dogs' ).insert( {
					name: 'Iris',
					age: 12,
					breed: 'corgi',
					dog_img: 'https://dog_imgurl.com',
					description: 'Black coat with white crescent around the neck, long ears, stubby legs, long tail',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 13
				} ),
				knex( 'dogs' ).insert( {
					name: 'Barky',
					age: 3,
					breed: 'Golden Lab',
					dog_img: 'https://dog_imgurl.com',
					description: 'Generic Golden Lab Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 14
				} ),
				knex( 'dogs' ).insert( {
					name: 'Woofy',
					age: 2,
					breed: 'Pug',
					dog_img: 'https://dog_imgurl.com',
					description: 'Generic Pug Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 15
				} )
			] );
		} );
};
