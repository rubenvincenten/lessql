$( function () {

	// replace tabs with 4 spaces
	// also replace initial and trailing newlines
	$( 'pre code' ).each( function() {

		var $this = $( this );
		var html = $this.html();
		html = html.replace( /\t/gi, '    ' );
		html = html.replace( /^\n+|\n+$/gi, '' );
		$this.html( html );

	} );

} );
