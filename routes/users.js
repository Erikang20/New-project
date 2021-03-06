"use strict";

var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );


////show homepage
router.delete( '/:id', function( req, res ) {
	knex( 'users' ).where( 'id', req.params.id ).delete().then( function( result, err ) {
		res.redirect( '/' );
	} );

} );
router.get( '/', function( req, res ) {
	console.log( req.session.passport );
	knex( 'users' ).select().then( function( result, err ) {
		res.render( 'users', {
			users: result,
			thisUser: req.user
		} );
	} );
} );




module.exports = router;
