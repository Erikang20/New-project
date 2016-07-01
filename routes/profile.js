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
