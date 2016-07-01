"use strict";

var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );


////show homepage
router.get( '/', function( req, res ) {
	console.log( req.session.passport );
	knex( 'users' ).select().then( function( result, err ) {
		res.render( 'user', {
			user: result,
			thisUser: req.user
		} );
	} );
} );



router.get( '/:id', function( req, res ) {
	knex( 'users' ).where( 'id', req.params.id ).then( function( result, err ) {
		res.render( 'profile', {
			user: result,
			thisUser: req.user
		} );
	} );
} );

module.exports = router;
