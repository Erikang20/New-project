// parallax section
// ------------------------------------------
$( document ).ready( function () {

			$( window ).trigger( 'scroll' );

			$( '.parallax-window' ).load( function ( parallax ) {
				// naturalWidth: 600,
				// naturalHeight: 200
			} );

			console.log( "it works" );

			$( window ).load( function () {
				$( "#preloader" ).fadeOut( "slow" );

				// animation when the page is being scroll
				$( window ).scroll( function () {
					if ( $( window ).scrollTop() > 400 ) {
						$( ".navbar-brand a" ).css( "color", "#fff" );
						$( "#navigation" ).removeClass( "animated-header" );
					}
					else {
						$( ".navbar-brand a" ).css( "color", "inherit" );
						$( "#navigation" ).addClass( "animated-header" );
					}
				} );

			} );
