//Load google vis library and the core chart package

google.load("visualization", "1", {packages:["corechart"]});

google.setOnLoadCallback(popArtists);

function popArtists(){
	
	//Create a data table using an array.
	
	var data = google.visualization.arrayToDataTable([
	["People", "Votes"], 
	["Amanda Sorrywork", 822],
	["Willie Cayote", 613],
	["Stevie Knows",841],
	["Johnny Rockets", 899],	
	]);
	
	var options ={
		title: "Current Popularity Votes x 100",		
		};	
	
	//Create the chart variable
	var chart = new google.visualization.LineChart(document.getElementById("artist_popular"));
	
	//Draw The Chart
	chart.draw(data, options);	
	
	//Make chart responsive
	$(window).resize(function(){
	  popArtists();	  
	});
	
	}