var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );

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
	knex( 'users' ).insert( {
		name: user.name,
		userName: user.userName
	} ).then( function( result, err ) {
		res.redirect( '/newUser' );
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


module.exports = router;
