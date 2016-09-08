$(document).ready(function(){
    $("#startingButton").click(function(){
        $("#startingButton").hide();
        $("#chooseColorP").show(1000)
    });
});


$(document).ready(function(){
        $(".btn").hide();
        $("#getContextButton").hide();
        $("#chooseColorP").hide();
});

$(document).ready(function(){
    $("#startingButton").click(function(){
        $(".btn").fadeIn(1000);
        $("#getContextButton").fadeIn(1000);
        $("#chooseColorP").show(1000);
    });
});

$(document).ready(function(){
    $("#getContextButton").click(function(){
        $("#showChosenColor").hide();
        $("#chooseColorP").show(1000);
    });
});

$(document).ready(function(){
    $(".Column").click(function(){
        $("#showChosenColor").show();
    });
});
