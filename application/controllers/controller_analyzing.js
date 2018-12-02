var analyzingService = require( require("path").join( process.cwd(), "application", "services", "service_analyzing.js" ) );






exports.control_analyzing = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		var promises = [];

		promises.push( analyzingService.saveContents( req, res, connection ) );
		promises.push( analyzingService.extractRGB( req, res, connection ) );

		Promise.all( promises )
		.then( function(){

			var argv = arguments[0];

			resolve( {"id":argv[0]} );
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

exports.control_view_report = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		analyzingService.getReport( req, res, connection )
		.then( function( results ){

			for( var i=0; i<results.length; i++ ){

				if( results[i].CREATED_DATE ){
					results[i].CREATED_DATE = ( results[i].CREATED_DATE ).toISOString().split("T")[0]
				}
			}

			resolve( {"history":results[0]} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );
}

exports.control_del_report = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		analyzingService.deleteReport( req, res, connection )
		.then( function( results ){
			resolve( {} );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );	
}









exports.control_auth = function( req, res, connection ){
	return new Promise( function( resolve, reject ){

		analyzingService.authCheck( req, res, connection )
		.then( function( results ){
			resolve( results );
		} )
		.catch( function(err){
			reject( err );
		} );
	} );	
}

