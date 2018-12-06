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








exports.saveContents = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		analyzingDbExecutor.insertContents( req.body, connection )
		.then( function( results ){

			resolve( results.results.insertId );
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

			var fileName = results.results[0].savedFileName;
			var originalFileName = results.results[0].originalFileName;
			var filePath = require("path").join( process.cwd(), "upload", "template", "image", fileName );

			var fileId = results.results[0].id;

			countRGB( filePath )
			.then( function(res){

				analyzingDbExecutor.updateRGB(originalFileName, res )
				.then( function( res ){

					resolve( res );
				} )
				.catch( function(err){
					reject( err );
				} );
				
			} )
			.catch( function(err){
				reject( err );
			} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

function countRGB( filePath, fileId ){
	return new Promise( function(resolve, reject){

		var Jimp = require('jimp');

		Jimp.read(filePath, function (err, image) {

			var rhist = new Array();
			var ghist = new Array();
			var bhist = new Array();

			var rData = new Array();
			var gData = new Array();
			var bData = new Array();

			for( var i=0; i<256; i++ ){
				rhist.push(0);
				ghist.push(0);
				bhist.push(0);
			}

			for( var i=0; i<image.bitmap.width; i++ ){
				for( var j=0; j<image.bitmap.height; j++ ){

					var rgbObj = Jimp.intToRGBA( image.getPixelColor(i, j) );

					rhist[rgbObj.r]++;
					ghist[rgbObj.g]++;
					bhist[rgbObj.b]++;

					// rData.push(rgbObj.r);
					// gData.push(rgbObj.g);
					// bData.push(rgbObj.b);
				}
			}

			resolve( {"rhist" : rhist, "ghist" : ghist, "bhist" : bhist, "rdata" : rData.toString(), "gdata" : gData.toString(), "bdata" : bData.toString()} );

		})

	} );
}

function updateRGB( originalFileName, rgb ){
	return new Promise( function(resolve, reject){

		analyzingDbExecutor.updateRGB( originalFileName, rgb, connection )
		.then( function(){
			resolve( rgb );
			// resolve( {"rhist" : rhist, "ghist" : ghist, "bhist" : bhist} );
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

exports.getReport = function( req, res, connection ){
	return new Promise( function(resolve, reject){

		var reportId = req.params.id;

		analyzingDbExecutor.getReport( reportId, connection )
		.then( function( queryResults ){
			var res = queryResults;

			resolve( queryResults );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.deleteReport = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		analyzingDbExecutor.deleteReport( req.body.targetId, connection )
		.then( function( results ){
			// logger.debug( results );
			resolve( {} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.authCheck = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		analyzingDbExecutor.authCheck( req, connection )
		.then( function( results ){

			logger.debug( results );

			if( results.results.length ){
				resolve( {"STATUS":"S"} );
			} else {
				resolve( {"STATUS":"E"} );
			}
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}