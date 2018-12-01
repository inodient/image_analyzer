$(document).ready( function(){
		
		$('#singleUploadForm').submit(function(event) {
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
		            console.log(response);
		            // process response
		        },
		        error: function (error) {
		            console.log(error);
		            // process error
		        }
		    });

		    event.preventDefault();
		});
		
		
		
		
		var rhistList = new Array();
		var ghistList = new Array();
		var bhistList = new Array();
		
		  // <c:forEach items="${rhist}" var="rhist">
		  // 	rhistList.push("${rhist}");
		  // </c:forEach>
		  
		  // <c:forEach items="${ghist}" var="ghist">
		  // 	ghistList.push("${ghist}");
		  // </c:forEach>
		  
		  // <c:forEach items="${bhist}" var="bhist">
		  // 	bhistList.push("${bhist}");
		  // </c:forEach>

	    
	    
	    
	    var rctx = $("#rcolorhistcanvas")[0].getContext("2d");
	    var gctx = $("#gcolorhistcanvas")[0].getContext("2d");
	    var bctx = $("#bcolorhistcanvas")[0].getContext("2d");
	    
	    var rmax = Math.max.apply(null, rhistList);
	    var bmax = Math.max.apply(null, ghistList);
	    var gmax = Math.max.apply(null, bhistList);

	    function colorbars(ctx, max, vals, color, y) {
	      ctx.fillStyle = color;
	      jQuery.each(vals, function(i,x) {
	        var pct = (vals[i] / max) * 100;
	        ctx.fillRect(i, y, 1, -Math.round(pct));
	      });
	    }

	    colorbars(rctx, rmax, rhistList, "rgb(255,0,0)", 100);
	    colorbars(gctx, gmax, ghistList, "rgb(0,255,0)", 100);
	    colorbars(bctx, bmax, bhistList, "rgb(0,0,255)", 100);
	    
	    
	    	

	} );

    
    
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
    	  
    	  /*var data = google.visualization.arrayToDataTable( ${rhist} );
 */    	  
    	  /* var data = google.visualization.arrayToDataTable( [['Dinosaur', 'Length'], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 0], ['', 1], ['', 2], ['', 2], ['', 2], ['', 5], ['', 5], ['', 5], ['', 5], ['', 16], ['', 11], ['', 9], ['', 33], ['', 89], ['', 116], ['', 512], ['', 347], ['', 299043]]
); */
         var data = google.visualization.arrayToDataTable([
          ['Dinosaur', 'Length'],
          ['Acrocanthosaurus (top-spined lizard)', 12.2],
          ['Albertosaurus (Alberta lizard)', 9.1],
          ['Allosaurus (other lizard)', 12.2],
          ['Apatosaurus (deceptive lizard)', 22.9],
          ['Archaeopteryx (ancient wing)', 0.9],
          ['Argentinosaurus (Argentina lizard)', 36.6],
          ['Baryonyx (heavy claws)', 9.1],
          ['Brachiosaurus (arm lizard)', 30.5],
          ['Ceratosaurus (horned lizard)', 6.1],
          ['Coelophysis (hollow form)', 2.7],
          ['Compsognathus (elegant jaw)', 0.9],
          ['Deinonychus (terrible claw)', 2.7],
          ['Diplodocus (double beam)', 27.1],
          ['Dromicelomimus (emu mimic)', 3.4],
          ['Gallimimus (fowl mimic)', 5.5],
          ['Mamenchisaurus (Mamenchi lizard)', 21.0],
          ['Megalosaurus (big lizard)', 7.9],
          ['Microvenator (small hunter)', 1.2],
          ['Ornithomimus (bird mimic)', 4.6],
          ['Oviraptor (egg robber)', 1.5],
          ['Plateosaurus (flat lizard)', 7.9],
          ['Sauronithoides (narrow-clawed lizard)', 2.0],
          ['Seismosaurus (tremor lizard)', 45.7],
          ['Spinosaurus (spiny lizard)', 12.2],
          ['Supersaurus (super lizard)', 30.5],
          ['Tyrannosaurus (tyrant lizard)', 15.2],
          ['Ultrasaurus (ultra lizard)', 30.5],
          ['Velociraptor (swift robber)', 1.8]]); 

        var options = {
          title: 'Lengths of dinosaurs, in meters',
          legend: { position: 'none' },
          histogram: { bucketSize: 1 }
        };

        var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
   




$(document).ready( function(){
			
			var rhistList = new Array();
			var ghistList = new Array();
			var bhistList = new Array();
			
			  // <c:forEach items="${rhist}" var="rhist">
			  // 	rhistList.push("${rhist}");
			  // </c:forEach>
			  
			  // <c:forEach items="${ghist}" var="ghist">
			  // 	ghistList.push("${ghist}");
			  // </c:forEach>
			  
			  // <c:forEach items="${bhist}" var="bhist">
			  // 	bhistList.push("${bhist}");
			  // </c:forEach>
			
			  var labelsList = new Array();
			  for( var i=0; i<256; i++ ){
				  labelsList.push(i);
			  }
			  
			  console.log( rhistList );
			
			var ctx = document.getElementById("myChart").getContext('2d');
			var myChart = new Chart(ctx, {
  type: 'bar',
			  data: {
			    labels: labelsList,
			    datasets: [{
			      label: 'Group A',
			      data: rhistList,
			      backgroundColor: 'rgba(255, 99, 132, 1)',
			    }]
			  },
			  options: {
			    scales: {
			      xAxes: [{
			        display: false,
			        barPercentage: 1,
			      }, {
			        display: false,
			      }],
			      yAxes: [{
			        ticks: {
			          beginAtZero:true
			        }
			      }]
			    }
			  }
			});
			
			
		} );
		
   