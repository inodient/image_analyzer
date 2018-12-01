var analyzingService = require( require("path").join( process.cwd(), "application", "services", "service_analyzing.js" ) );






exports.control_analyzing = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		var promises = [];

		promises.push( analyzingService.saveContents( req, res, connection ) );
		promises.push( analyzingService.extractRGB( req, res, connection ) );

		Promise.all( promises )
		.then( function(){
			resolve( {} );
		} )
		.catch( function(err){
			reject( err );
		} );


	} );
}

exports.control_list = function( req, res, connection ){
	return new Promise( function( resolve, reject ){
		analyzingService.getList( req, res, connection )
		.then( function( results ){
			// logger.debug( results );

			for( var i=0; i<results.length; i++ ){

				logger.debug( results[i].CREATED_DATE );

				if( results[i].CREATED_DATE ){
					results[i].CREATED_DATE = ( results[i].CREATED_DATE ).toISOString().split("T")[0]
				}
			}

			resolve( {"list" : results} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}









exports.control_view_failure = function( req, res, connection ){
	return new Promise( function( resolve, reject ){
		failureService.getFailure( req, res, connection )
		.then( function( results ){
			resolve( {"list" : results} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.control_del_failure = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		failureService.deleteFailure( req, res, connection )
		.then( function( results ){
			resolve( {} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );	
}