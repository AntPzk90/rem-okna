$(document).ready(function(){
    // размер контенера ( чтоб понять какой перед нами экран )
    var bodyWidth = $("body").width();
    console.log(bodyWidth);
    // работа с шапкой сайта(если сайт скролился то добавляем модификатор)
    var header =  $(".header");
    if(bodyWidth < 750){
        $(window).on("scroll", function(){
            console.log(1)
            header.addClass("header--mobile");
            $(".header__mobile").addClass("header__mobile--open");
            $(".represent").css("paddingTop","150px");
            if($(window).scrollTop() == 0){
                header.removeClass("header--mobile");
                $(".represent").removeAttr("style");
                $(".header__mobile").removeClass("header__mobile--open");
                $(".header__mobile").addClass("header__mobile--close");
            }
        });
    }else{
        $(".telephone").removeClass("telephone--close");
    }
    // клин на бургер
    $(".header__mobile").on("click", function(evt){
        if($(".header__mobile").hasClass("header__mobile--open")){
            $(".header__mobile").removeClass("header__mobile--open");
            $(".header__mobile").addClass("header__mobile--close");
            header.removeClass("header--mobile");
        }
        else{
            header.addClass("header--mobile");
            $(".header__mobile").addClass("header__mobile--open");
        }
    })
    if($(window).scrollTop()!= 0){
        header.addClass("header--fixed");
    }
    // фиксация шапки при скроле
	$(window).on("scroll", function(){
        var header =  $(".header");
	    var headHeight = header.height();
        var scroll =  $(window).scrollTop();
	   if(scroll > headHeight){
          header.addClass("header--fixed").fadeIn(1000);
	    }else if(scroll == 0){
	      header.removeClass("header--fixed");
	    };
    });
    // работа с появлением попапа
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
    }
    $(".telephone__btn").on("click",telBtnClickHendler);
    var popupBtnClickHendler = function(evt){
        evt.preventDefault();
        $("body").append('<div class="overlay"></div>');
        $(".modal-form__form").addClass("modal-form__form--active");
        $(".overlay").on("click",function(evt){
            evt.preventDefault();
            $(".overlay").fadeOut(300).remove();
            $(".modal-form__form").removeClass("modal-form__form--active");
        });
    };
    $(".master-call").on("click",popupBtnClickHendler);
    // работа с закрытием попапа.
    var closeBtnClickHendler = function(evt){
        evt.preventDefault();
        $(".modal-form__form").removeClass("modal-form__form--active");
        $(".overlay").fadeOut(300).remove();
    }
    $(".modal-form__close-btn").on("click",closeBtnClickHendler);
});