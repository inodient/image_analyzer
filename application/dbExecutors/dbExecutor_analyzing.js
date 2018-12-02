exports.getModelList = function( connection ){
	return new Promise( function(resolve, reject){
		var params = [];
		var queryId = "getModelList";

		mssqlHandler.executeQuery( queryId, params, connection.mssqlConnection )
		.then( function(queryResults){
			resolve( queryResults );
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} );
	} );
}

exports.getFailureList = function( connection ){
	return new Promise( function(resolve, reject){
		var params = [];
		var queryId = "getFailureList";

		mssqlHandler.executeQuery( queryId, params, connection.mssqlConnection )
		.then( function(queryResults){
			resolve( queryResults );
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} );
	} );
}













exports.insertContents = function( form, connection ){
	return new Promise( function(resolve, reject){

		var _current = new Date();
		var current = _current.toISOString();

		var params = [];
		var queryId = "insertContents"
		
		params.push( {"TITLE": (form["input-title"]).trim() } );
		params.push( {"IMAGE": (form["input-imagename"]).trim() } );
		params.push( {"DESCRIPTION": (form["input-description"]).trim() } );
		
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

exports.getRealImageName = function( form, connection ){
	return new Promise( function(resolve, reject){

		var params = [];
		var queryId = "getRealImageName";
		
		params.push( {"IMAGE": (form["input-imagename"]).trim() } );
		
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

exports.updateRGB = function( fileName, rgb, connection ){
	return new Promise( function(resolve, reject){

		var params = [];
		var queryId = "updateRGB";

		logger.debug( rgb.rdata );

		params.push( {"ORIGINALFILENAME": fileName } );
		params.push( {"RHIST": rgb.rhist } );
		params.push( {"GHIST": rgb.ghist } );
		params.push( {"BHIST": rgb.bhist } );
		params.push( {"RDATA": rgb.rdata } );
		params.push( {"GDATA": rgb.gdata } );
		params.push( {"BDATA": rgb.bdata } );


		mysqlHandler.executeQuery( queryId, params, connection )
		.then( function(queryResults){
			resolve( queryResults );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.getList = function( req, connection ){
	return new Promise( function(resolve, reject){

		var params = [];
		var queryId = "getList";
				
		mysqlHandler.executeQuery( queryId, params, connection )
		.then( function(queryResults){
			resolve( queryResults );
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} );
	} );
}

exports.getReport = function( reportId, connection ){
	return new Promise( function(resolve, reject){
		var params = [];
		var queryId = "getReport";

		params.push( {"ID" : reportId} );

		mysqlHandler.executeQuery( queryId, params, connection )
		.then( function(queryResults){
			resolve( queryResults.results );
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} );
	} );
}














exports.deleteFailure = function( failureInfo, connection ){
	return new Promise( function(resolve, reject){

		var _current = new Date();
		var current = _current.toISOString();

		var params = [];
		var queryId = "deleteFailure"
		params.push( {"ID": failureInfo.targetId } );

		logger.debug( failureInfo.targetId );

		mssqlHandler.executeQuery( queryId, params, connection.mssqlConnection )
		.then( function(queryResults){
			resolve( queryResults );
		} )
		.catch( function(err){
			logger.error( err );
			reject( err );
		} );
	} );
}