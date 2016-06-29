var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );
var passport = require( 'passport' );

/* GET home page. */
router.get( '/', function( req, res, next ) {
	res.render( 'login' );
} );


router.post( '/', passport.authenticate( 'local', {
	successRedirect: '/', // redirect to the secure profile section
	failureRedirect: '/blahblah' // redirect back to the signup page if there is an error
} ) );


// req.login( user, function( err ) {
// 	if ( err ) {
// 		return next( err );
// 	}
// 	return res.redirect( '/users/' + req.user.username );
// } );

module.exports = router;
