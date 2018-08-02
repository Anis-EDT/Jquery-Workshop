//toggle with javascript
function toggle(){
	var x = document.getElementById("hi")
	if(x.style.display =="none")
		x.style.display ="block"
	else
		x.style.display ="none"
}
// toggle with Jquery
	$("#tog").click(function(){
		$("#hi").toggle()
	})
	// adding the image
	$("#btn0").click(function(){
		$("div").append('<img src="images/fun.jpg"/>')
	})
	$("#btn").click(function(){
		$(".elyes").slideUp();
	})
	$("#btn1").click(function(){
		$(".elyes").slideDown();
	})
	// When the page finished loading
	$("document").ready(function(){
			var x= 0 ; 
	// rotate 
	$("#btn2").click(function(){

		setInterval(function(){ 
			x++
			$(".elyes").rotate(x);
			$(".elyese").rotate(-x);

		 }, 10);
		// adding a class to the tag
		 $("#elyes").addClass("tetzed")		
		
	})	})
		// Event listener on key press ( don't forget to check console !!!!!!!!)
		$("#input").keypress(function(e){
			console.log(e);

	})
