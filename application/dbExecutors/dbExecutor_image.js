exports.insertImageInfo = function( imageInfo, connection ){
	return new Promise( function(resolve, reject){

		var _current = new Date();
		var current = _current.toISOString();

		var params = [];
		var queryId = "insertImageInfo"
		params.push( {"ORGFILE": (imageInfo.originalFileName).trim() } );
		params.push( {"SAVEDFILE":imageInfo.savedFileName} );
		params.push( {"PATH":imageInfo.path} );
		params.push( {"DATE": current } );

		mysqlHandler.executeQuery( queryId, params, connection.mysqlConnection )
		.then( function(queryResults){
			resolve( queryResults );
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} );
	} );
}