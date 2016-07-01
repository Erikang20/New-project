"use strict";

var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );

/* GET home page. */

router.get( '/', function( req, res ) {
	res.render( 'newDog', {
		user: req.session.passport.user
	} )
} )
router.post( '/', function( req, res ) {
		var user = req.body;
		knex( 'dogs' ).insert( {
			name: req.name,
			age: req.age,
			breed: req.breed,
			description: req.description,
			owner: req.session.passport.user.id
		} ).then( function( req, res ) {
			res.render( '/profile' );
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
