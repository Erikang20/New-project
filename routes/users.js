var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );


////show homepage
router.get( '/', function( req, res ) {
	knex( 'users' ).select().then( function( result, err ) {
		// console.log( result );
		res.render( 'index', {
			user: result
		} );
	} );
} );



//delete
router.get( '/:id', function( req, res ) {
	var userId = req.params.id;
	knex( 'users' ).where( 'id', userId ).then( function( result ) {

		res.render( '/users/delete', {
			user: user
		} );
	} );
} );

router.delete( '/:id', function( req, res ) {
	var userId = req.params.id;
	knex( 'users' ).where( 'id', userId ).del().then( function( result ) {
		var user = result;
		res.redirect( '/users' );
		// eval( locus );

	} );
} );

module.exports = router;
