"use strict";

var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );

/* GET home page. */
router.get( '/', function( req, res, next ) {
	console.log( req.session.passport.user );
	var doggos = [];
	knex( 'users' ).where( 'users.id', req.session.passport.user.id ).innerJoin( 'dogs', 'users.id', 'dogs.owner' ).then( function( result, err ) {
		console.log( result );
		for ( var i = 0; i < result.length; i++ ) {
			console.log( i );
			doggos.push( {
				dog_name: result[ i ].name,
				dog_desc: result[ i ].description,
				dog_img: result[ i ].dog_img
			} )
			console.log( doggos[ i ] );
		}
	} )
	knex( 'users' ).where( 'id', req.session.passport.user.id ).first().then( function( result, err ) {
		console.log( result );
		console.log( doggos );
		res.render( 'profile', {
			user: result,
			dogs: doggos

		} );
	} );
} );
router.post( '/newDog', function( req, res ) {
	var user = req.body;
	console.log( user );
	knex( 'dogs' ).insert( {
		name: user.name,
		age: user.age,
		breed: user.breed,
		description: user.description,
		dog_img: "https://www.placecage.com/c/800/400",
		owner: req.session.passport.user.id
	} ).then( function( result, err ) {
		var doggos = [];
		knex( 'users' ).where( 'users.id', req.session.passport.user.id ).innerJoin( 'dogs', 'users.id', 'dogs.owner' ).then( function( result, err ) {
			console.log( result );
			for ( var i = 0; i < result.length; i++ ) {
				console.log( i );
				doggos.push( {
					dog_name: result[ i ].name,
					dog_desc: result[ i ].description,
					dog_img: result[ i ].dog_img
				} )
				res.redirect( '/profile' );
				console.log( doggos[ i ] );
			}
		} )
	} )
} );
router.get( '/newDog', function( req, res ) {
	res.render( 'newDog', {
		user: req.session.passport.user
	} )
} )



// router.get( '/', function( req, res, next ) {
// 	res.render( 'profile' );
// } );


//
// router.get( '/', function( req, res, next ) {
// 	res.cookie( 'views', parseInt( req.cookies.views || 0 ) + 1 );
//
// 	res.render( 'index', {
// 		title: 'puppylink',
// 		views: ( req.cookies.views || 0 )
// 	} );
// } );

module.exports = router;
