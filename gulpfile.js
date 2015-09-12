var gulp = require( 'gulp' );
var connect = require( 'gulp-connect' );
var ejs = require( 'gulp-ejs' );

gulp.task( 'connect', [ 'watch' ], function () {

	connect.server( {
		port: 3000,
		root: [ __dirname ],
		livereload: false,
		middleware: function ( connect, options ) {

			return [
				function ( req, res, next ) {

					if ( req.url.match( /\/[^\.]+$/ ) ) req.url += '.html';

					return next();

				}
			];

		}
	} );

} );

gulp.task( 'watch', [ 'build', ], function () {

	gulp.watch( [ 'ejs/*.ejs' ], [ 'ejs' ] );

} );

gulp.task( 'build', [ 'ejs' ] );

gulp.task( 'ejs', function () {

	return gulp.src( [ 'ejs/*.ejs', '!ejs/layout.ejs' ] )
		.pipe( ejs() )
		.pipe( gulp.dest( '.' ) );

} );
