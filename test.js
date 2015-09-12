var Ejs = require( 'ejs' );

Ejs.renderFile( 'index.js.html', function ( err, output ) {

	if ( err ) throw err;

	console.log( output );

} );
