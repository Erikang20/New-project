var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );

/* GET home page. */
router.get( '/', function( req, res, next ) {
	console.log( req.session.passport.user );
	knex( 'users' ).where( 'id', req.session.passport.user.id ).first().then( function( result, err ) {
		console.log( result );
		res.render( 'profile', {
			user: result
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
