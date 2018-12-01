<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="/image.css">


<script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.4.3/cropper.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.4.3/cropper.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>


<link rel="stylesheet" href="/css/jquery.guillotine.css">
<script src="/js/jquery.guillotine.js"></script>
<link href='//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css' rel='stylesheet'>



<script type="text/javascript">
	$(document).ready( function(){
		// Histogram - start
		var labelsList = new Array();
		for( var i=0; i<256; i++ ){
			labelsList.push(i);
		}
		
		var ctx = document.getElementById("redHistChart").getContext("2d");
		var redHistChart = new Chart( ctx, {
			type: "bar",
			data: {
				labels: labelsList,
				datasets: [{
					label: "RED",
					data: [0],
					backgroundColor: 'rgba(255, 0,0,1)', 
				}]
			},
			options: {
				scales: {
					xAxes: [{
						display: true,
						barPercentage: 1,
					}],
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		} );

		var ctx = document.getElementById("greenHistChart").getContext("2d");
		var greenHistChart = new Chart( ctx, {
			type: "bar",
			data: {
				labels: labelsList,
				datasets: [{
					label: "GREEN",
					data: [0],
					backgroundColor: 'rgba(0,255,0,1)', 
				}]
			},
			options: {
				scales: {
					xAxes: [{
						display: true,
						barPercentage: 1,
					}],
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		} );
		
		var ctx = document.getElementById("blueHistChart").getContext("2d");
		var blueHistChart = new Chart( ctx, {
			type: "bar",
			data: {
				labels: labelsList,
				datasets: [{
					label: "BLUE",
					data: [0],
					backgroundColor: 'rgba(0,0,255,1)', 
				}]
			},
			options: {
				scales: {
					xAxes: [{
						display: true,
						barPercentage: 1,
					}],
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		} );
		// Histogram - end
		
		
		// File Control - start
		$('#imageUploadForm').submit(function(event) {
		    var formElement = this;
		    // You can directly create form data from the form element
		    // (Or you could get the files from input element and append them to FormData as we did in vanilla javascript)
		    var formData = new FormData(formElement);

		    $.ajax({
		        type: "POST",
		        enctype: 'multipart/form-data',
		        url: "/uploadFile",
		        data: formData,
		        processData: false,
		        contentType: false,
		        success: function (response) {
		            
		            var fileNameArray = $("#input-image").val().split("\\");
		            var fileName = fileNameArray[fileNameArray.length - 1];
		            /* $("#uploadedImage").attr( "src", "/uploads/" + fileName ); */
		            $("#uploadedImage").attr( "src", "/images/" + fileName );
		            
		            var ctx = document.getElementById("redHistChart").getContext("2d");
		    		var redHistChart = new Chart( ctx, {
		    			type: 'bar',
		    			data: {
		    				labels: labelsList,
		    				datasets: [{
		    					label: 'RED',
		    					data: response[0],
		    					backgroundColor: 'rgba(255, 0, 0, 1)', 
		    				}]
		    			},
		    			options: {
		    				scales: {
		    					xAxes: [{
		    						display: true,
		    						barPercentage: 1.30,
		    					}, {
		    						display: false,
		    					}],
		    					yAxes: [{
		    						ticks: {
		    							beginAtZero: true
		    						}
		    					}]
		    				}
		    			}
		    		} );

		    		ctx = document.getElementById("greenHistChart").getContext("2d");
		    		var redHistChart = new Chart( ctx, {
		    			type: 'bar',
		    			data: {
		    				labels: labelsList,
		    				datasets: [{
		    					label: 'GREEN',
		    					data: response[1],
		    					backgroundColor: 'rgba(0, 255, 0, 1)', 
		    				}]
		    			},
		    			options: {
		    				scales: {
		    					xAxes: [{
		    						display: true,
		    						barPercentage: 1.30,
		    					}, {
		    						display: false,
		    					}],
		    					yAxes: [{
		    						ticks: {
		    							beginAtZero: true
		    						}
		    					}]
		    				}
		    			}
		    		} );
		    		
		    		ctx = document.getElementById("blueHistChart").getContext("2d");
		    		var redHistChart = new Chart( ctx, {
		    			type: 'bar',
		    			data: {
		    				labels: labelsList,
		    				datasets: [{
		    					label: 'BLUE',
		    					data: response[2],
		    					backgroundColor: 'rgba(0, 0, 255, 1)', 
		    				}]
		    			},
		    			options: {
		    				scales: {
		    					xAxes: [{
		    						display: true,
		    						barPercentage: 1.30,
		    					}, {
		    						display: false,
		    					}],
		    					yAxes: [{
		    						ticks: {
		    							beginAtZero: true
		    						}
		    					}]
		    				}
		    			}
		    		} );
		    		
		    		$("#rMax").text( response[3][0] );
		    		$("#gMax").text( response[3][1] );
		    		$("#bMax").text( response[3][2] );
		            
		        },
		        error: function (error) {
		            console.log(error);
		            // process error
		        }
		    });

		    event.preventDefault();
		});
		// File Control - end
		
		
		
		$("#rotate").on( "click", function(){
			$("#uploadedImage").css( "transform", "rotate(" + 30 + "deg)" );
		} );
		
	} );
</script>






<title>Analyze Images</title>

</head>

<body>
	<div class="doc">
		<header class="navbar navbar-inverse navbar-fixed-top">
			<div class="navbar-container"
				style="max-width: 1000px; margin-left: auto; margin-right: auto;">
				<div class="navbar-header">
					<button type="button" style="margin-left: 10px"
						class="pull-left navbar-toggle" data-toggle="collapse"
						data-target="#top_menu">
						<span class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
					<a href="/" class="navbar-brand mobile-navbar-brand mobile-show">Image Analyzer</a>
				</div>
			</div>
			<div class="collapse navbar-collapse navbar-content" id="top_menu"
				style="max-width: 1000px; margin-left: auto; margin-right: auto;">
				<ul class="nav navbar-nav top-nav">
					<li id="0" class=""><a href="/">DashBoard</a></li>
					<li id="1" class="active"><a href="/analyzing">Analyzing</a></li>
					<li id="30"class=""><a href="/std">Standard</a></li>
					<li id="30"class=""><a href="/history">History</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right top-nav">
					<!-- <li style="padding-right: 15px" id="35" name="facebook" class=""><a href="window.open('https://www.facebook.com/dialog/feed?app_id=755383531310577&amp;display=popup&amp;caption=An%20example%20caption&amp;link=http://imgnews.naver.net/image/076/2017/10/18/2017101901001253400099581_20171018133052141.jpg?type=w540&amp;redirect_uri=http://localhost:3000/template', '', 'top=250,left=250,width=1000,height=400' );"><i class="fa fa-facebook fa-lg"></i>&nbsp;&nbsp;Facebook</a></li> -->
				</ul>
			</div>
		</header>
	
		<div class="page-content">
			<div class="container-fluid">
				
				<!-- Basic Image Information - Start -->
				<div class="row section-end">
					<div class="small-section-end"></div>
					<div class="col-md-12">
						<h2 class="after-line-block">Basic Image Information</h2>
					</div>
					<div class="col-md-6 small-section-end">
						<img id="uploadedImage" src="/uploads/sample.png" style="width: 100%"/>
						
						<div id='controls'>
					      <a href='#' id='rotate_left'  title='Rotate left'><i class='fa fa-rotate-left'></i></a>
					      <a href='#' id='zoom_out'     title='Zoom out'><i class='fa fa-search-minus'></i></a>
					      <a href='#' id='fit'          title='Fit image'><i class='fa fa-arrows-alt'></i></a>
					      <a href='#' id='zoom_in'      title='Zoom in'><i class='fa fa-search-plus'></i></a>
					      <a href='#' id='rotate_right' title='Rotate right'><i class='fa fa-rotate-right'></i></a>
					    </div>
					
					    <ul id='data'>
					      <div class='column'>
					        <li>x: <span id='x'></span></li>
					        <li>y: <span id='y'></span></li>
					      </div>
					      <div class='column'>
					        <li>width:  <span id='w'></span></li>
					        <li>height: <span id='h'></span></li>
					      </div>
					      <div class='column'>
					        <li>scale: <span id='scale'></span></li>
					        <li>angle: <span id='angle'></span></li>
					      </div>
					    </ul>
						
						
						
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<h4><label for="input-title">Title</label></h4>
							<input class="form-control" type="text" id="input-title" />
						</div>
						<div class="form-group">
							<h4><label for="ta-description">Description</label></h4>
							<textarea class="form-control" rows=4 id="ta-description"></textarea>
						</div>
						<form class="form-group" id="imageUploadForm">
							<h4><label for="input-image">Image Path</label></h4>
							<input class="form-control" type="file" id="input-image" name="file" />
							<button type="submit" class="btn_important_full">Analyze</button>
							<button id="rotate" type="button" class="btn_important_full">Rotate</button>						
						</form>
					</div>
				</div>
				<hr>
				<!-- Basic Image Information - End -->
				
				<!-- Analyzed Information - Start -->
				<div class="row section-end">
					<div class="col-md-12">
						<h2 class="after-line-block">Analyzed Result</h2>
					</div>
					<div class="col-md-4 small-section-end">
						<canvas id="redHistChart" width="30" height="20"></canvas>
					</div>
					<div class="col-md-4 small-section-end">
						<canvas id="greenHistChart" width="30" height="20"></canvas>
					</div>
					<div class="col-md-4 small-section-end">
						<canvas id="blueHistChart" width="30" height="20"></canvas>
					</div>
					
					<div class="col-md-12">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>Color</th>
									<th>Max(Color Value)</th>
									<th>FWHM</th>
									<th>FWHM/2</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>RED</td>
									<td id="rMax">Max(Color Value)</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>GREEN</td>
									<td id="gMax">Max(Color Value)</td>
									<td>-</td>
									<td>-</td>
								</tr>
								<tr>
									<td>BLUE</td>
									<td id="bMax">Max(Color Value)</td>
									<td>-</td>
									<td>-</td>
								</tr>
							</tbody>
							
						</table>
					</div>
				</div>
				<hr>
				<!-- Analyzed Information - End -->
				
				<!-- Conclusion & Next - Start -->
				<div class="row section-end">
					<div class="col-md-12">
						<h2 class="after-line-block">Conclusion & Report</h2>
					</div>
					<div class=col-md-12>
						<h4>Date</h4>
						<p>Oct 12 2018</p><br>
						<h4>Analyzer</h4>
						<p>Park Hong Gue</p><br>
						<h4>Conclusion</h4>
						<textarea class="form-control" rows=6></textarea>
					</div>
					<div class="col-md-12" >
						<button class="btn_important" style="float:right">Save Result</button>
						<button class="btn_important" style="float:right; margin-right: 10px">Re-Analyze</button>
					</div>
				</div>
				<!-- Conclusion & Next - End -->
			</div>
		</div>
	</div>
	
	<footer style="background-color: black">
		<div class="jumbotron footer-background">
			<div class="footer-heading">
				<h2 class="title">Image Analyzer</h2>
				<div class="description">Image Analyzing For maintaining machines</div>
			</div>

			<div class="footer-footer">
				<hr class="color-weaken">
				<p class="copyright">
					Copyright(c) 2018 KANGCHANGHO <br> Created and Maintained by <br
						class="mobile-show"> <a
						href="mailto:inodient@gmail.com?subject=KANGCHANGHO.COM - OPINITON">Ino
						Kang [Changho Kang]</a>. <br> <br> This work is using <a
						href="javascript:getLicenseInfo()">Spring Boot</a><br
						class="mobile-show"> and licensed under a <a
						href="javascript:getLicenseInfo()">MIT License</a>.
				</p>
			</div>

		</div>
	</footer>
	
	
	
	<script>
		jQuery(function(){
			var picture = $('#uploadedImage');
	
			  var camelize = function() {
			    var regex = /[\W_]+(.)/g
			    var replacer = function (match, submatch) { return submatch.toUpperCase() }
			    return function (str) { return str.replace(regex, replacer) }
			  }()
	
			  var showData = function (data) {
			    data.scale = parseFloat(data.scale.toFixed(4))
			    for(var k in data) { $('#'+k).html(data[k]) }
			  }
			  
			  
			    picture.guillotine({ eventOnChange: 'guillotinechange' })
			    picture.guillotine('fit')
			    for (var i=0; i<5; i++) { picture.guillotine('zoomIn') }
	
			    // Show controls and data
			    $('.loading').remove()
			    $('.notice, #controls, #data').removeClass('hidden')
			    showData( picture.guillotine('getData') )
	
			    // Bind actions
			    $('#controls a').click(function(e) {
			      e.preventDefault()
			      action = camelize(this.id)
			      picture.guillotine(action)
			    })
	
			    // Update data on change
			    picture.on('guillotinechange', function(e, data, action) { showData(data) })
			    
	
			  
			  picture.on('load', function() {
			    picture.guillotine({ eventOnChange: 'guillotinechange' })
			    picture.guillotine('fit')
			    for (var i=0; i<5; i++) { picture.guillotine('zoomIn') }
	
			    // Show controls and data
			    $('.loading').remove()
			    $('.notice, #controls, #data').removeClass('hidden')
			    showData( picture.guillotine('getData') )
	
			    // Bind actions
			    $('#controls a').click(function(e) {
			      e.preventDefault()
			      action = camelize(this.id)
			      picture.guillotine(action)
			    })
	
			    // Update data on change
			    picture.on('guillotinechange', function(e, data, action) { showData(data) })
			  })
		} );
	
	</script>
	
	
</body>

</html>