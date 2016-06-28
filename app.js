var express = require( 'express' );
var http = require( 'http' );
var path = require( 'path' );
var cookieSession = require( 'cookie-session' );
var favicon = require( 'serve-favicon' );
var logger = require( 'morgan' );
var cookieParser = require( 'cookie-parser' );
var bodyParser = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var passport = require( 'passport' );
var FacebookStrategy = require( 'passport-facebook' ).Strategy;
var app = express();


require( 'dotenv' ).load();
require( 'locus' );


// -------------------------------
// view engine setup
// -------------------------------

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, '/views' ) );
app.use( express.static( path.join( __dirname, '/public' ) ) );
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
	extended: false
} ) );
app.use( methodOverride( '_method' ) );
app.use( cookieParser() );

// -------------------------------
// Initialize Passport and restore authentication state, if any, from the
// session.
// -------------------------------

app.use( cookieSession( {
	name: 'session',
	keys: [ process.env[ 'SECRET_KEY' ] ]
} ) );
app.use( passport.initialize() );
app.use( passport.session() );

passport.serializeUser( function( user, done ) {
	//later this will be where you selectively send to the browser an identifier for your user, like their primary key from the database, or their ID from linkedin
	done( null, user );
} );

passport.deserializeUser( function( obj, done ) {
	//here is where you will go to the database and get the user each time from it's id, after you set up your db
	done( null, obj );
} );



// ---------------------------------
// Facebook Strategy
// ---------------------------------


passport.use( new FacebookStrategy( {
		clientID: process.env.FACEBOOK_APP_ID,
		clientSecret: process.env.FACEBOOK_APP_SECRET,
		callbackURL: "http://localhost:3000/auth/facebook/callback",
		scope: [ 'r_emailaddress', 'r_basicprofile' ],
		enableProof: true

	},
	function( accessToken, refreshToken, profile, cb ) {
		User.findOrCreate( {
			facebookId: profile.id
		}, function( err, user ) {
			return cb( err, user );
		} );
	}
) );



// ---------------------------------
// Configure Passport authenticated session persistence for Facebook.
// ---------------------------------

passport.serializeUser( function( user, cb ) {
	cb( null, user );
} );

passport.deserializeUser( function( obj, cb ) {
	cb( null, obj );
} );


// -------------------------------
// routes
// -------------------------------

var auth = require( './routes/auth' );
var routes = require( './routes/index' );
var users = require( './routes/users' );
var login = require( './routes/login' );
var profile = require( './routes/profile' );
var newUser = require( './routes/newUser' );

app.use( '/auth', auth );
app.use( '/', routes );
app.use( '/users', users );
app.use( '/login', login );
app.use( '/profile', profile );
app.use( '/newUser', newUser );



// ---------------------------
// Define routes.
// ---------------------------


app.get( '/', function( req, res ) {
	res.render( 'index', {
		user: req.user
	} );
} );

app.get( '/login',
	function( req, res ) {
		res.render( 'login' );
	} );

app.get( '/login/facebook',
	passport.authenticate( 'facebook' ) );

app.get( '/login/facebook/return',
	passport.authenticate( 'facebook', {
		failureRedirect: '/login'
	} ),
	function( req, res ) {
		res.redirect( '/' );
	} );

// app.get( '/profile',
// 	require( 'connect-ensure-login' ).ensureLoggedIn(),
// 	function( req, res ) {
// 		res.render( 'profile', {
// 			user: req.user
// 		} );
// 	} );


// -------------------------------

var port = process.env.PORT || 3000;
app.listen( port, function() {
	console.log( "Im listening yo!" );
} );

module.exports = {
	app
};
