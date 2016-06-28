exports.seed = function( knex, Promise ) {
	// Deletes ALL existing entries
	return knex( 'users' ).del()
		.then( function() {
			return Promise.all( [
				// Inserts seed entries
				knex( 'users' ).insert( {
					full_name: 'Aaron',
					user_name: 'dogsrawesome1',
					email: 'fakeemail@gmail1.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Erika',
					user_name: 'dogsrawesome2',
					email: 'fakeemail@gmail2.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Dax',
					user_name: 'dogsrawesome3',
					email: 'fakeemail@gmail3.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Peachy',
					user_name: 'dogsrawesome4',
					email: 'fakeemail@gmail4.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Ed',
					user_name: 'dogsrawesome5',
					email: 'fakeemail@gmail5.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Castro',
					user_name: 'dogsrawesome6',
					email: 'fakeemail@gmail6.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Bill',
					user_name: 'dogsrawesome7',
					email: 'fakeemail@gmail7.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Karen',
					user_name: 'dogsrawesome8',
					email: 'fakeemail@gmail8.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Anderson',
					user_name: 'dogsrawesome9',
					email: 'fakeemail@gmail9.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Price',
					user_name: 'dogsrawesome10',
					email: 'fakeemail@gmail10.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Dinh',
					user_name: 'dogsrawesome11',
					email: 'fakeemail@gmail11.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Marc',
					user_name: 'dogsrawesome12',
					email: 'fakeemail@gmail12.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Zubair',
					user_name: 'dogsrawesome13',
					email: 'fakeemail@gmail13.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Robert',
					user_name: 'dogsrawesome14',
					email: 'fakeemail@gmail14.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
				knex( 'users' ).insert( {
					full_name: 'Cam',
					user_name: 'dogsrawesome15',
					email: 'fakeemail@gmail15.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					is_admin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} )
			] );
		} );
};
