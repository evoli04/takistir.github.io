$(document).ready(function(){
	var x = 0;
	$("#sol").click(function(){
        x=x-10;
		$("#resim").css("left",x+"px");
	});
	$("#sag").click(function(){
		x=x+10;
		$("#resim").css("left",x+"px");
	});
});
//bitis

//renk degistirme
$(document).ready(function(){
	$("#changeColor").click(function(){
		$("p").css("color", "blue");
	});
});

//kayan yazi
 // Optional: Adjust speed
 $(".scrolling-text p").css("animation-duration", "20s"); // Change 20s to desired speed (e.g., "10s", "30s")

 //metin degistirme

 $(document).ready(function(){
	$("#btn").click(function(){
	  $("#demo").text("Metin değişti!");
	});
  });

  //butona tiklama
  $(document).ready(function(){
	$("#buton").click(function(){
	  alert("Butona tıklandı!");
	});
  });

//yazi kaybetme
  $(document).ready(function(){
	$("#kaybolma").click(function(){
	  $(this).fadeOut();
	});
  });

  //hover olunca renk degistiren kutu
  $(document).ready(function(){
	$("#box").mouseover(function(){
	  $(this).css("background-color", "blue");
	});
	$("#box").mouseout(function(){
	  $(this).css("background-color", "red");
	});
  });

//toplam hesaplama
  $(document).ready(function(){
	$("#calculate").click(function(){
	  var num1 = parseInt($("#num1").val());
	  var num2 = parseInt($("#num2").val());
	  var result = num1 + num2;
	  $("#result").text("Toplam: " + result);
	});
  });

//donen kareler
  $(document).ready(function(){
	$(".item").click(function(){
	  $(this).toggleClass("rotate");
	});
  });

//sakamatik
  $(document).ready(function(){
	$("#fetchData").click(function(){
		$.ajax({
			url: "https://api.chucknorris.io/jokes/random",
			method: "GET",
			success: function(data){
				$("#joke").text(data.value);
			}
		});
	});
});

//hihglight etme
$(document).ready(function(){
	$("li").click(function(){
		$("li").removeClass("highlight");
		$(this).addClass("highlight");
	});
});
