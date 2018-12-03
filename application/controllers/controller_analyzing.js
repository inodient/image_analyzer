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

			// logger.debug( results[0] );
			var rhist = (results[0].RHIST).toString().split(",");
			var ghist = (results[0].GHIST).toString().split(",");
			var bhist = (results[0].BHIST).toString().split(",");

			var rhistPressed = [];
			var ghistPressed = [];
			var bhistPressed = [];


			var rdata = [];
			var gdata = [];
			var bdata = [];


			for( var i=0; i<rhist.length; i++ ){
				rhistPressed.push( Math.ceil(rhist[i] / 50) );
			}
			for( var i=0; i<ghist.length; i++ ){
				ghistPressed.push( Math.ceil(ghist[i] / 50) );
			}
			for( var i=0; i<bhist.length; i++ ){
				bhistPressed.push( Math.ceil(bhist[i] / 50) );
			}

			for( var i=0; i<rhistPressed.length; i++ ){
				var pressed = parseInt( rhistPressed[i] );

				for( var j=0; j<pressed; j++ ){
					var temp = [];
					temp.push( i );
					rdata.push( temp );
				}
			}

			for( var i=0; i<ghistPressed.length; i++ ){
				var pressed = parseInt( ghistPressed[i] );

				for( var j=0; j<pressed; j++ ){
					var temp = [];
					temp.push( i );
					gdata.push( i );
				}
			}

			for( var i=0; i<bhistPressed.length; i++ ){
				var pressed = parseInt( bhistPressed[i] );

				for( var j=0; j<pressed; j++ ){
					var temp = [];
					temp.push( i );
					bdata.push( i );
				}
			}

			results[0].RDATA = rdata;
			results[0].GDATA = gdata;
			results[0].BDATA = bdata;

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

