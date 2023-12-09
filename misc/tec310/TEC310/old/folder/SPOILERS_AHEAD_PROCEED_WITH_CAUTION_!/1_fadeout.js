$(document).ready(function(){
  $("#next1").click(function(){
    $("#p1").show();
    $("#next1").hide();
    $("#next2").show();
  });
});

$(document).ready(function(){
  $("#next2").click(function(){
    $("#p2").show();
    $("#next2").hide();
    $("#next3").show();
  });
});

$(document).ready(function(){
  $("#next3").click(function(){
    $("#p3").show();
    $("#next3").hide();
    $("#next4").show();
  });
});

$(document).ready(function(){
  $("#next4").click(function(){
    $("#next4").hide();
    $("#next5").show();
  });
});
