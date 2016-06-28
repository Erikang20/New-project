var express = require( 'express' );
var passport = require( 'passport' );
var favicon = require( 'serve-favicon' );
var cookieSession = require( 'cookie-session' );
var FacebookStrategy = require( 'passport-facebook' ).Strategy;
var router = express.Router();



router.get( '/auth/facebook',
	passport.authenticate( 'facebook', {
		state: 'SOME STATE'
	} ),
	function( req, res ) {

	} );

router.get( '/auth/facebook/callback',
	passport.authenticate( 'facebook', {
		successRedirect: '/',
		failureRedirect: '/login'
	} ),
	function( req, res ) {
		// Successful authentication, redirect home.
		res.redirect( '/' );
	} );
//
// FACEBOOK.getLoginStatus( function( response ) {
// 	if ( response.status === 'connected' ) {
// 		console.log( 'Logged in.' );
// 	} else {
// 		FB.login();
// 	}
// } );


module.exports = router;