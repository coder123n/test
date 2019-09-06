$(document).ready(function(){
	$("#hide").click(function(){
		$("#hide").hide();
	});
	$("img").click(function(){
		$("p").show();
		$("h2").show();
		$(".stl").css({"color";red","background-color":"20,0,20"});
	});
	$("p").click(function(){
		$("img").fadeIn();
	});
	
	

							});