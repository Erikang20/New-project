exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('dogs').del()
		.then(function() {
			return Promise.all([
				// Inserts seed entries
				knex('dogs').insert({
					id: 1,
					name: 'Iris',
					age: 12,
					breed: 'corgi',
					img: 'https://imgurl.com',
					description: 'Black coat with white crescent around the neck, long ears, stubby legs, long tail',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 1
				}),
				knex('dogs').insert({
					id: 2,
					name: 'Barky',
					age: 3,
					breed: 'Golden Lab',
					img: 'https://imgurl.com',
					description: 'Generic Golden Lab Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 2
				}),
				knex('dogs').insert({
					id: 3,
					name: 'Woofy',
					age: 2,
					breed: 'Pug',
					img: 'https://imgurl.com',
					description: 'Generic Pug Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 3
				}),
				knex('dogs').insert({
					id: 4,
					name: 'McWoof',
					age: 12,
					breed: 'St. Bernard',
					img: 'https://imgurl.com',
					description: 'Generic St. Bernard Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 4
				}),
				knex('dogs').insert({
					id: 5,
					name: 'Zenbarka',
					age: 3,
					breed: 'Golden Lab',
					img: 'https://imgurl.com',
					description: 'Super Enlightened',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 5
				}),
				knex('dogs').insert({
					id: 6,
					name: 'Mei',
					age: 2,
					breed: 'Siberian Husky',
					img: 'https://imgurl.com',
					description: 'Ice Cold Bitch',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 6
				}),
				knex('dogs').insert({
					id: 7,
					name: 'Winston',
					age: 12,
					breed: 'Pug',
					img: 'https://imgurl.com',
					description: 'Jumps around a lot',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 7
				}),
				knex('dogs').insert({
					id: 8,
					name: 'Mercy',
					age: 3,
					breed: 'Golden Lab',
					img: 'https://imgurl.com',
					description: 'Makes you feel better after you feel dead',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 8
				}),
				knex('dogs').insert({
					id: 9,
					name: 'Lucio',
					age: 2,
					breed: 'Pug',
					img: 'https://imgurl.com',
					description: 'Loves Music',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 9
				}),
				knex('dogs').insert({
					id: 10,
					name: 'Woofbjorn',
					age: 12,
					breed: 'corgi',
					img: 'https://imgurl.com',
					description: 'Sits around and waits for things to happen for him',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 10
				}),
				knex('dogs').insert({
					id: 11,
					name: 'Rhinebark',
					age: 3,
					breed: 'Black Lab',
					img: 'https://imgurl.com',
					description: 'Very Protective of loved ones',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 11
				}),
				knex('dogs').insert({
					id: 12,
					name: 'Roaddog',
					age: 2,
					breed: 'corgi',
					img: 'https://imgurl.com',
					description: 'Always pulls things down with his tail',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 12
				}),
				knex('dogs').insert({
					id: 13,
					name: 'Iris',
					age: 12,
					breed: 'corgi',
					img: 'https://imgurl.com',
					description: 'Black coat with white crescent around the neck, long ears, stubby legs, long tail',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 13
				}),
				knex('dogs').insert({
					id: 14,
					name: 'Barky',
					age: 3,
					breed: 'Golden Lab',
					img: 'https://imgurl.com',
					description: 'Generic Golden Lab Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 2
				}),
				knex('dogs').insert({
					id: 15,
					name: 'Woofy',
					age: 2,
					breed: 'Pug',
					img: 'https://imgurl.com',
					description: 'Generic Pug Description',
					date_need_care_start: '2016-8-10',
					date_need_care_end: '2016-8-12',
					owner: 15
				})
			]);
		});
};
