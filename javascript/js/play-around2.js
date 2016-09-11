// play-around2.js
$(document).ready(function(){
	// $("p").click(function(){
	// 	$(this).fadeOut("slow");
	// });

	$(".meddiv").click(function(){
		$(this).css("background-color", changeBackground());
	});


	function changeBackground () {
		rand = "#" + Math.random().toString(16).slice(2,8);
		return rand;
	};

	//I don't know why this one is wrong!
	$("#animate").click(function(){
		$("#loneblock").animate({top: "100px"});
	});

	
	$(".btn1").click(function(){
     $("p").animate({top: "100px"});
  });
  
  $(".btn2").click(function(){
        $("p").animate({top: "0px"});
  });

  $("#btn3").click(function(){
     $("#pbottom").animate({top: "+=10px"});
  });









});

