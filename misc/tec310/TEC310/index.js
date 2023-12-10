//buttons
$(document).ready(function(){
  $("#intro5").click(function(){
    $("#intro5").hide(55);
    $(".notworkingbuttons").hide(35);
    $(".button").show(35);
    $("#n0b").hide(0);
    $("#n0c").show(0);
  });
});

//text
$(document).ready(function(){
  $("#intro5").click(function(){
    $("#intro5").hide(55);
    $(".notworkingbuttontext").hide(35);
    $(".buttontext").show(35);
    $("#n0b").hide(0);
    $("#n0c").show(0);
  });
});

//text+shadow3
$('#t3').hover(
  function() {
     $('#b3').addClass('hover');
   },
  function() {
     $('#b3').removeClass('hover');
   }
);

//noot rotate
$(document).ready(function(){
  $("#n0c").hover(function(){
    $("#pextra").show(55);
  });
});

//pextra hide
$(document).ready(function(){
  $("#pextra").hover(function(){
    $("#pextra").hide(55);
  });
});

//noot 1 show
$(document).ready(function(){
  $("#b3").hover(function(){
    $("#n0c").hide(45);
    $("#n2").hide(45);
    $("#n3").hide(45);
    $("#n1").show(55);
  });
});

//noot 2 show
$(document).ready(function(){
  $("#b2").hover(function(){
    $("#n0c").hide(45);
    $("#n1").hide(45);
    $("#n3").hide(45);
    $("#n2").show(55);
  });
});

//noot 3 show
$(document).ready(function(){
  $("#b1").hover(function(){
    $("#n0c").hide(45);
    $("#n1").hide(45);
    $("#n2").hide(45);
    $("#n3").show(55);
  });
});
