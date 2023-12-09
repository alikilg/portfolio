//sp1, sp2
$(document).ready(function(){
  $("#noot").click(function(){
    $("#sp1").show(35);
    $("#sp2").delay(1000).fadeIn(100);
    $("#noot").hide();
    $("#nootext1").show();
  });
});

//sp3
$(document).ready(function(){
  $("#sp2").click(function(){
    $("#sp1").hide();
    $("#sp2").hide();
    $("#sp3").show(35);
  });
});

//sp4, sp5
$(document).ready(function(){
  $("#sp3").click(function(){
    $("#sp3").hide();
    $("#sp4").show(35);
    $("#sp5").delay(1000).fadeIn(100);
  });
});

//sp6, sp7
$(document).ready(function(){
  $("#sp5").click(function(){
    $("#sp4").hide();
    $("#sp5").hide();
    $("#sp6").show(35);
    $("#sp7").delay(1000).show(35);
  });
});

//sp8, sp9
$(document).ready(function(){
  $("#sp7").click(function(){
    $("#sp6").hide();
    $("#sp7").hide();
    $("#sp8").show(35);
    $("#sp9").delay(1000).show(35);
  });
});

//sp10
$(document).ready(function(){
  $("#sp9").click(function(){
    $("#sp8").hide();
    $("#sp9").hide();
    $("#sp10").show(35);
  });
});

//sp11
$(document).ready(function(){
  $("#sp10").click(function(){
    $("#sp9").hide();
    $("#sp10").hide();
    $("#sp11").show(35);
  });
});

//nootmove
$(document).ready(function(){
  $("#sp11").click(function(){
    $("#sp11").hide();
    $("#nootext1").hide();
    $("#nootmove1").show();
    $(".block").hide();
  });
});


$(document).ready(function(){
    $("#nootmove1").click(function(){
        $("#sp12").show(35);
        $("#nootmove1").animate({left: '300px'}, function() {
          $('#nootmove2').show();
          $('#nootmove1').replaceWith($('#nootmove2'));
        });
    });
});

$(document).ready(function(){
    $("#nootmove2").click(function(){
        $("#sp12").hide();
        $("#sp13").show(35);
        $("#nootmove2").animate({left: '450px'}, function() {
          $('#nootmove3').show();
          $('#nootmove2').replaceWith($('#nootmove3'));
        });
    });
});

$(document).ready(function(){
    $("#nootmove3").click(function(){
        $("#sp13").hide();
        $("#nootmove3").animate({left: '556px'}, function() {
          $('#nootmove4').show();
          $('#nootmove3').replaceWith($('#nootmove4'));
        });
    });
});
