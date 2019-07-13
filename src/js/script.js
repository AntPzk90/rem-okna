$(document).ready(function(){
	$(window).on("scroll", function(){
        var header =  $(".header");
	    var headHeight = header.height();
        var scroll =  $(window).scrollTop();
	   if(scroll > headHeight){
	      header.addClass("header--fixed").fadeIn(1000);
          //$(".represent").css("paddingTop", headHeight);
	    }else if(scroll == 0){
	      header.removeClass("header--fixed");
	      $(".represent").removeAttr('style');
	    };
    });
    var bodyWidth = $(".container").width();
    var telephoneBtnFunction = function(sizeVp){
        if(sizeVp >= 1050){
            $(".telephone").removeClass("telephone--close")
        }
    }
    console.log(bodyWidth)
    telephoneBtnFunction(bodyWidth);
    var telBtnClickHendler = function(evt){
        evt.preventDefault();
        $()
        if($(".telephone").hasClass("telephone--close")){
            $(".telephone").removeClass("telephone--close");
            $(".telephone").addClass("telephone--add");
            $(".master-call__link").fadeIn(1200);
        }else{
            $(".telephone").removeClass("telephone--add");
            $(".telephone").addClass("telephone--close");
            $(".master-call__link").fadeOut(300);
        }
        console.log(1)
    }
    $(".telephone__btn").on("click",telBtnClickHendler);
});