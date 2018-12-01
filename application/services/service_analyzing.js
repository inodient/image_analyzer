var analyzingDbExecutor = require( require("path").join( process.cwd(), "application", "dbExecutors", "dbExecutor_analyzing.js" ) );





exports.getModelList = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		failureDbExecutor.getModelList( connection )
		.then( function( queryResults ){
			resolve( queryResults.results.recordset );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.getFailure = function( req, res, connection ){
	return new Promise( function(resolve, reject){

		var fail_id = req.params.id;

		failureDbExecutor.getFailure( fail_id, connection )
		.then( function( queryResults ){
			var res = queryResults.results.recordset;

			res[0].CREATE_DATE = ( (res[0].CREATE_DATE).toISOString() ).split("T")[0];
			
			resolve( (queryResults.results.recordset)[0] );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}









exports.saveContents = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		analyzingDbExecutor.insertContents( req.body, connection )
		.then( function( results ){
			resolve( {} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.extractRGB = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		analyzingDbExecutor.getRealImageName( req.body, connection )
		.then( function( results ){

			var fileName = results.results[0].savedFileName
			var filePath = require("path").join( process.cwd(), "upload", "template", "image", fileName );

			logger.debug( filePath );

			var Jimp = require('jimp');

			Jimp.read(filePath, function (err, image) {

				for( var i=0; i<image.bitmap.width; i++ ){
					for( var j=0; j<image.bitmap.height; j++ ){

						// logger.debug( Jimp.intToRGBA( image.getPixelColor(i, j) ) );
						


					}
				}
			});

			resolve( {} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.getList = function( req, res, connection ){
	return new Promise( function(resolve, reject){
		
		analyzingDbExecutor.getList( connection )
		.then( function( queryResults ){
			resolve( queryResults.results );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}















exports.deleteFailure = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		failureDbExecutor.deleteFailure( req.body, connection )
		.then( function( results ){
			// logger.debug( results );
			resolve( {} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}