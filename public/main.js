// parallax section
// ------------------------------------------
$( document ).ready( function( parallax ) {

	$( window ).trigger( 'scroll' );
	$( '.parallax-window' ).parallax( {
		// naturalWidth = 600,
		// naturalHeight = 100
	} );
	console.log( "it works" );
} );
//
// $( document ).ready( function( parallax ) {
// 	$( '.parallax-window' ).parallax( {
// 		imageSrc: 'https://images.unsplash.com/photo-1414277578841-112f6e9398ec?crop=entropy&fit=crop&fm=jpg&h=800&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375'
// 	} );
// 	console.log( "im here" );
// } );



$( window ).load( function() {
	$( "#preloader" ).fadeOut( "slow" );

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

} );
