//sp1, sp2
$(document).ready(function(){
  $("#noot").click(function(){
    $("#sp1").show(35);
    $("#sp2").delay(1000).fadeIn(100);
    $(".next").delay(1500).fadeIn(100);
  });
});

//sp3
$(document).ready(function(){
    $("#next").click(function(){
        $("#noot").hide();
        $("#noot1").show();
        $('#noot').replaceWith($('#noot1'));
        $("#sp1").hide();
        $("#sp2").hide();
        $("#next").hide();
        $("#sp3").show();
    });
});

//sp4
$(document).ready(function(){
  $("#sp3").click(function(){
    $("#sp3").hide();
    $("#sp4").show();
  });
});

//sp5
$(document).ready(function(){
  $("#sp4").click(function(){
    $("#sp4").hide();
    $("#sp5").show();
  });
});

//linkblock
$(document).ready(function(){
  $("#sp5").click(function(){
    $("#sp5").hide();
    $("#linkblock").hide();
  });
});

//Alerts
$(document).ready(function(){
  $(".nope").click(function(){
    alert("Link not available right now. Please try again later.");
  });
});

//links
$(document).ready(function(){
  $("#absorb").hover(
    function(){
      $("#arch").show();
    },
    function(){
      $("#arch").hide();
    }
  );
});

//flash
$(document).ready(function() {
  $("#absorb").click(
    function(){
      $("body").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    });
});
