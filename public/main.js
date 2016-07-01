// parallax section
// ------------------------------------------
$.ajax( {
	url: "http://api.wunderground.com/api/d272db6293298224/geolookup/conditions/q/TX/Austin.json",
	dataType: "jsonp",
	success: function( parsed_json ) {
		var location = parsed_json[ 'location' ][ 'city' ];
		var temp_f = parsed_json[ 'current_observation' ][ 'temp_f' ];
		$( '.weather' ).text( 'It is currently ' + temp_f + ' degrees F in ' + location );
	}
} );
$( document ).ready( function( parallax ) {

	$( window ).trigger( 'scroll' );
	$( '.parallax-window' ).parallax( {
		// naturalWidth = 600
		// naturalHeight = 100
	} );
	console.log( "it works" );
} );


$( window ).load( function() {
	$( "#preloader" ).fadeOut( "slow" );
} );

// animation when the page is being scroll
$( window ).scroll( function() {
	if ( $( window ).scrollTop() > 400 ) {
		$( ".navbar-brand a" ).css( "color", "#fff" );
		$( "#navigation" ).removeClass( "animated-header" );
	} else {
		$( ".navbar-brand a" ).css( "color", "inherit" );
		$( "#navigation" ).addClass( "animated-header" );
	}
} );

// ==============================================
// carrousel
// ==============================================
// $( document ).ready( function( carousel ) {
// 	$( '.carousel' ).carousel( {
// 		interval: 3000
//
// 	} )
// } );
