"use strict";

var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );
var bcrypt = require( 'bcrypt' );

/* GET home page. */
router.get( '/', function( req, res, next ) {
	knex( 'users' ).select().then( function( result, err ) {
		res.render( 'newUser', {
			user: result

		} );
	} );
} );


///post to users table
router.post( '/', function( req, res ) {
	var user = req.body;
	// eval( locus )
	console.log( user );
	knex( 'users' ).where( "user_name", user.user_name ).then( function( result, err ) {
		if ( result.length === 0 ) {
			knex( 'users' ).insert( {
				full_name: user.full_name,
				user_name: user.user_name,
				password: bcrypt.hashSync( user.password, 8 ),
				email: user.email,
				img: 'https://www.placecage.com/c/400/400'
			} ).then( function( result, err ) {
				res.redirect( '/login' ); // Change redirect to login. -- Dax :3
			} );
		} else {
			alert( 'Username taken' );
		}
	} );
} );


//add new users
router.get( '/newUser', function( req, res ) {
	res.render( 'newUser' );
} );



///get user id
router.get( '/:id', function( req, res ) {
	var userId = req.params.id;
	knex( 'users' ).where( 'id', userId ).first().then( function( result, err ) {
		var user = result;
		// eval( locus )
		res.render( 'profile', {
			user: user
		} );
	} );
} );



//edit
router.get( '/:id/edit', function( req, res ) {
	var userId = req.params.id;
	knex( 'users' ).where( 'id', userId ).select().then( function( result, err ) {
		// var user = result;
		res.render( 'users', {
			user: result[ 0 ]
		} );
	} );
} );

router.post( '/:id', function( req, res ) {
	var userId = req.params.id;
	var user = req.body;
	knex( 'users' ).where( 'id', userId ).first().update( {
		name: user.name,
		userName: user.userName
	} ).then( function( result ) {
		res.redirect( '/users' );
	} );
} );


module.exports = router;;
