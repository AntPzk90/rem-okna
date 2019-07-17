$(document).ready(function(){
    // размер контенера ( чтоб понять какой перед нами экран )
    var bodyWidth = $("body").width();
    // работа с шапкой сайта(если сайт скролился то добавляем модификатор)
    var header =  $(".header");
    if(bodyWidth < 750){
        $(".master-call__link").css("display","none");
        $(window).on("scroll", function(){
            header.removeClass("header--mobile-on");
            header.addClass("header--mobile-off");
            $(".header__mobile").removeClass("header__mobile--close");
            $(".header__mobile").addClass("header__mobile--open");
            if($(window).scrollTop() == 0){
                header.removeClass("header--mobile-off");
                header.addClass("header--mobile-on");
                $(".header__mobile").removeClass("header__mobile--open");
                $(".header__mobile").addClass("header__mobile--close");
            }
        });
    }else{
        $(".telephone").removeClass("telephone--close");
    }
    // клин на бургер
    $(".header__mobile").on("click", function(evt){
        evt.preventDefault();
        if($(".header__mobile").hasClass("header__mobile--open")){
            $(".header__mobile").removeClass("header__mobile--open");
            $(".header__mobile").addClass("header__mobile--close");
            header.removeClass("header--mobile-off");
            header.addClass("header--mobile-on");
        }
        else{
            header.removeClass("header--mobile-on");
            header.addClass("header--mobile-off");
            $(".header__mobile").removeClass("header__mobile--close");
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
            $(".master-call__link").fadeIn(400).css("display","inline-block");;
            $(".telephone").removeClass("telephone--close");
            $(".telephone").addClass("telephone--add");
        }else{
            $(".master-call__link").css("display","none");
            $(".telephone").removeClass("telephone--add");
            $(".telephone").addClass("telephone--close")
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