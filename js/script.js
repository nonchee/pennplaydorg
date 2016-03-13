console.log("yeee");

$(document).ready(function(){
    
    //intialize clouds function
    //callback is animate clouds

           $("#content-welcome").fadeIn();
    
    var animateCloud = function(targetElement, speed, first){
        
        var docWidth = $(document).width();  
        if (!first) {
            $(targetElement).css("left", '-150px');
        }
        var left = parseInt($(targetElement).css('left'));
        var thisSpeed = speed * ((docWidth - left) / docWidth);

        $(targetElement).animate(  
            {'left': docWidth + 10}, 
            { duration: thisSpeed, complete: function(){
                animateCloud(this, speed, false);
                }
            }
        );
    };

    
    var clouds = $("#clouds"); 
    var i = 0;
    var speeds = {};
    var tops = [15,45,113,70,69, 20];
    var lefts = [-10,10,35,50,75, 90]
    clouds.children().each(function () {
 
        // alert(30000 + randSpeed); 
        $(this).css("left", lefts[i] + "%"); 
        $(this).css("top", tops[i] - 5); 
        speeds[i] = Math.floor((Math.random() * 1000) + 100);
        animateCloud(this, 80000 + speeds[i], true); 
        i++;
    });
    
    var scrolledDown = false;
    var lastPosition = 0;
    $(document).scroll(function () { 
        
        position = window.pageYOffset;
        //console.log(position); 
        if (position > 500) {
            $('#welcome-pennplaytitle').hide();
            scrolledDown = true;
        } else { 
            var foreground_y = parseInt($("#foreground-hourglass").css("top"));
            if(position < lastPosition) {
                $("#foreground-hourglass").css("top", foreground_y + 1);
            }
            else {
                $("#foreground-hourglass").css("top", foreground_y - 1);
            }
            lastPosition = position;
        }
        
        if (position > 1400) {
                    $('#smalltitle').css('display', "inline");
            $('#smalltitle').addClass('animated bounceInDown'); }
        
        if (position > 1650) {
            $('#information-tabs').css('display', "inline");
            $('#information-tabs').addClass('animated bounce');
            
        }
        
        if (position <= 0 && scrolledDown) {
            $('#welcome-pennplaytitle').show();
            $('#welcome-pennplaytitle').addClass('animated bounce');
            scrolledDown = false;
        }
      /*  if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('#information-tabs').fadeIn();
        }*/
    });
    
    $("#nav-FAQ").on("click", function () {
      /*  $(".lotsawords").animate({color: "#FFA447"}, 'slow', function () { 
            $(".lotsawords").hide();
            $("#content-faq").fadeIn();

        });*/
        $(".lotsawords").hide();
        $("#content-faq").fadeIn();
    });
    
    $("#nav-Schedule").on("click", function () {
        $(".lotsawords").hide();
        $("#content-schedule").fadeIn();
    });
        
    $("#nav-Partners").on("click", function () {
        $(".lotsawords").hide();
        $("#content-partners").fadeIn();
    });
        
    $("#nav-Team").on("click", function () {
        $(".lotsawords").hide();
        $("#content-team").fadeIn();
    });
}); 


