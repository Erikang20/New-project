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
var pg = require( 'pg' );
var knex = require( './db/knex' );
var FacebookStrategy = require( 'passport-facebook' ).Strategy;
var LocalStrategy = require( 'passport-local' ).Strategy;
var auth = require( './routes/auth' );
var routes = require( './routes/index' );
var users = require( './routes/users' );
var login = require( './routes/login' );
var profile = require( './routes/profile' );
var newUser = require( './routes/newUser' );
var bcrypt = require( 'bcrypt' );
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

app.use( cookieSession( {
	name: 'session',
	keys: [ process.env[ 'SECRET_KEY' ] ]
} ) );
app.use( passport.initialize() );
app.use( passport.session() );

// ------------------------------------------------------------------
// Configure Passport authenticated session persistence for Facebook.
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// Initialize Passport and restore authentication state, if any, from the
// session.
// ------------------------------------------------------------------

// passport.serializeUser( function( user, done ) {
// 	//later this will be where you selectively send to the browser an identifier for your user, like their primary key from the database, or their ID from linkedin
// 	done( null, user.id );
// } );
//
// passport.deserializeUser( function( id, done ) {
// 	//here is where you will go to the database and get the user each time from it's id, after you set up your db
// 	knex( 'users' ).where( 'id', id ).then( function( result, err ) {
// 		done( err, result );
// 	} );
//
// } );


passport.use( new LocalStrategy( {
	usernameField: 'user_name',
	passwordField: 'password'
}, function( username, password, done ) {

	console.log( "yo" );

	console.log( "yo, im here" );
	// Check id of user, retrieve row in users table.
	knex( 'users' ).where( 'user_name', username )
		.first()
		.then( function( user ) {
			// compareSync the user's hashed password.
			if ( user && bcrypt.compareSync( password, user.password ) ) {
				// On match, return confirmation of session.
				console.log( "I'm here fam" );
				return done( null, user );
			}
			// Otherwise, return no session, redirect.
			console.log( 'otherwised' );
			return done( null, false );
		} )
} ) );

// ---------------------------------
// Facebook Strategy
// ---------------------------------


passport.use( new FacebookStrategy( {
		clientID: process.env.FACEBOOK_APP_ID,
		clientSecret: process.env.FACEBOOK_APP_SECRET,
		callbackURL: "https:/puppylink.herokuapp.com/auth/facebook/callback"
			// scope: [ 'r_emailaddress', 'r_basicprofile' ],

	},
	function( accessToken, refreshToken, profile, cb ) {

		console.log( profile );
		knex( 'users' ).where( "user_name", profile.id ).first().then( function( result, err ) {
			console.log( "FUCK" + result );
			if ( !result ) {
				console.log( "I'm here" );
				knex( 'users' ).insert( {
					full_name: profile.displayName,
					user_name: profile.id,
					email: 'facebook',
					password: null
				} ).then( function( result, err ) {
					console.log( result );
					cb( null, result );
				} )
			} else {
				cb( null, result );
			}
		} )
	}
) );

passport.serializeUser( function( user, cb ) {
	cb( null, user );
} );

passport.deserializeUser( function( user, cb ) {
	cb( null, user );
} );

// -------------------------------
// routes
// -------------------------------



app.use( '/login', login );
app.use( '/auth', auth );
app.use( '/', routes );
app.use( '/users', users );
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

app.get( '/auth',
	function( req, res ) {
		res.render( 'auth' );
	} );


app.get( '/auth/facebook',
	passport.authenticate( 'facebook' )
);

// CALLBACK URL
// localhost:3000/login/facebook/return
app.get( '/auth/facebook/callback',
	passport.authenticate( 'facebook', {
		failureRedirect: '/login'
	} ),
	function( req, res ) {

		res.redirect( '/profile' );
	} );


// -------------------------------

var port = process.env.PORT || 3000;
app.listen( port, function() {
	console.log( "Im listening yo!" );
} );

module.exports = {
	app
};;;
