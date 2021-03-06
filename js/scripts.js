var width	= parseInt(d3.select("body").style("width").slice(0,-2)),
	height  = 800;

var posX,
	posY,
	posZ,
	finger;

var xRange = [10,15],  //Set up very conservative ranges at first. Range[0] is min, [1] is max. 
	yRange = [100,105],
	zRange = [10,15];

var svg = d3.select("#container")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.style("background", "black");

xScale = d3.scale.linear()  //Set up the scales for translating raw coordinates into pixels
			.domain(xRange)
			.range([0, width])

yScale = d3.scale.linear()
			.domain(yRange)
			.range([height, 0])

zScale = d3.scale.linear()
			.domain(zRange)
			.range([0, 40])

function position(x,y,z,index) { //Function to draw the circles. 
	var color = "grey"
	if (index%2 == 0){
		color = "green"
	} else {
		color = "gold"
	}
	
	svg.append("circle")
		.attr("cx", x)
		.attr("cy", y)
		.attr("r" , z)
		.attr("fill", color)
	.transition(1000)
	.attr("fill", "red")
		.remove();
}

function isMax(value, max) { //Functions to see if a new max/min range is obtained
	if (value > max){
		return value
	} else {
		return max
	}
}

function isMin(value, min) {
	if (value < min) {
		return value
	} else {
		return min
	}
}


var introText = ["Close hand into fist to return to the intro page.",
				 "Handwash Hero Project. Hold your hands over the Leap to get started.",
				 "Please start washing your hands and make a fist to return to this page."]

svg.selectAll("text")
	.data(introText)
	.enter()
	.append("text")
	.attr("x", width/2)
	.attr("y", function(d,i) {return (25 + ((height/3) - 15 )*i) })
	.attr("fill", function(d,i) {
		if (i == 0)	{return "black"
		} else { return "white"}
	})
	.attr("font-family", "optima")
	.attr("text-anchor", "middle")
	.attr("font-size", function(d,i){
		if (i == 1){
			return 20
		} else {
			return 15
		} 
	})
	.text(function(d){return d})

var fresh = true 

Leap.loop( function(frame) {

	if (frame.pointables.length > 0){
		console.log(frame)

		for (var h = 0; h < frame.hands.length; h++) {
			output.innerHTML = 'Palm Normal #' + h + ': '+ frame.hands[h].palmNormal;
		}

		if (fresh){
			d3.select("svg").style("background", "white") //Change the background color
			fresh = false
		}
		if(frame.hands[0].grabStrength ==1){
			d3.select("svg").style("background", "black")
			fresh = true
		}
	
		for (var i = 0; i < frame.pointables.length; i++) {
			if (frame.pointables[i].extended){
				finger = frame.pointables[i];
				var x = finger.tipPosition[0], //Grab the position of fingertips
					y = finger.tipPosition[1],
					z = finger.tipPosition[2];

				xRange[1] = isMax(x, xRange[1]) //Update the maximum range
				yRange[1] = isMax(y, yRange[1])
				zRange[1] = isMax(z, zRange[1])

				xRange[0] = isMin(x, xRange[0]) //Update the minumum range
				yRange[0] = isMin(y, yRange[0])
				zRange[0] = isMin(z, zRange[0])

				xScale.domain(xRange) //Update the domains of the scales
				yScale.domain(yRange)
				zScale.domain(zRange)

				posX = xScale(x); //Run the raw xyz values through their scaling functions
				posY = yScale(y);
				posZ = zScale(z);
				
				position(posX, posY, posZ,i);
			} //Closes if finger extended statement
		}//Closes for loop
	}//closes if hand detected statement
});
