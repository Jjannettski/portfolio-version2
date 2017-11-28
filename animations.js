$(document).ready(function(){

$('.tooltipped').tooltip();
$('.dropdown-trigger').dropdown();

$("#story-button").on("click",function(){
	$('.modal').modal();
});

$("#work-button").on("click", function(){
	$('.modal').modal();
});

$("#work-button").on("click",function(){
		$(".transform").toggleClass('transform-active');
	$(".transform").removeClass("transform");
	});
});