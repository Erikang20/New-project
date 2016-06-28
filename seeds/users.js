exports.seed = function( knex, Promise ) {
	// Deletes ALL existing entries
	return knex( 'users' ).del()
		.then( function() {
			return Promise.all( [
                // Inserts seed entries
                knex( 'users' ).insert( {
					id: 1,
					full_name: 'Aaron',
					userName: 'dogsrawesome1',
					email: 'fakeemail@gmail1.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 2,
					full_name: 'Erika',
					userName: 'dogsrawesome2',
					email: 'fakeemail@gmail2.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 3,
					full_name: 'Dax',
					userName: 'dogsrawesome3',
					email: 'fakeemail@gmail3.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 4,
					full_name: 'Peachy',
					userName: 'dogsrawesome4',
					email: 'fakeemail@gmail4.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 5,
					full_name: 'Ed',
					userName: 'dogsrawesome5',
					email: 'fakeemail@gmail5.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 6,
					full_name: 'Castro',
					userName: 'dogsrawesome6',
					email: 'fakeemail@gmail6.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 7,
					full_name: 'Bill',
					userName: 'dogsrawesome7',
					email: 'fakeemail@gmail7.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 8,
					full_name: 'Karen',
					userName: 'dogsrawesome8',
					email: 'fakeemail@gmail8.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 9,
					full_name: 'Anderson',
					userName: 'dogsrawesome9',
					email: 'fakeemail@gmail9.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 10,
					full_name: 'Price',
					userName: 'dogsrawesome10',
					email: 'fakeemail@gmail10.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 11,
					full_name: 'Dinh',
					userName: 'dogsrawesome11',
					email: 'fakeemail@gmail11.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 12,
					full_name: 'Marc',
					userName: 'dogsrawesome12',
					email: 'fakeemail@gmail12.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 13,
					full_name: 'Zubair',
					userName: 'dogsrawesome13',
					email: 'fakeemail@gmail13.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 14,
					full_name: 'Robert',
					userName: 'dogsrawesome14',
					email: 'fakeemail@gmail14.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} ),
                knex( 'users' ).insert( {
					id: 15,
					full_name: 'Cam',
					userName: 'dogsrawesome15',
					email: 'fakeemail@gmail15.com',
					password: 'nonencryptedpass',
					about_me: 'I love dogs and long walks on the beach with my dog',
					img: 'https://imgurl.com',
					rating: 0,
					isAdmin: false,
					date_available_start: '2016-8-10',
					date_available_end: '2016-8-12'
				} )
            ] );
		} );
};
