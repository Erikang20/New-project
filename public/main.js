// parallax section
// ------------------------------------------

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
