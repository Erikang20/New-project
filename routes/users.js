var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );


////show homepage
router.get( '/', function( req, res ) {
	knex( 'users' ).select().then( function( result, err ) {
		// console.log( result );
		res.render( 'profile', {
			users: result
		} );
	} );
} );



router.get( '/:id', function( req, res ) {
	knex( 'users' ).where( 'id', req.params.id ).then( function( result, err ) {
		res.render( 'profile', {
			users: result
		} );
	} );
} );

module.exports = router;
