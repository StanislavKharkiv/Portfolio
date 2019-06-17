$(document).ready(function(){
	var flag = false;
	var _wind;
	var modal_width;
	//Определяем размер окна и получая отношение ширины и длины меняем класс модального окна
	function _window(){
		var mobile = false;
		var win = ($(window).width() / $(window).height());
		win = win.toFixed(1);
		if(win > 1.5) {
			modal_width = "66%";
			return "modal"
		}else{
			modal_width = "99%";
			return "modal-mobile"
		}	
	}
	// Открытие модального окна и закрытие
	$('.image-hover').on('click', function() {
		if(!flag){
			_wind = _window();
			$(this).prev().addClass(_wind);
			$(this).prev().animate({
				width: modal_width
			}, 500);
			$(this).parent().addClass('modal-parent');
			flag = true;
		}else{
				$(this).prev().stop(true).removeClass(_wind).css("width", "100%");
				$(this).parent().removeClass('modal-parent');
				flag = false;
		}
	})
	// закрытие при крилке на само изображение
	$('.image').on('click', function () {
			$(this).stop(true);
			$(this).removeClass(_wind).css("width", "inherit");;
			$(this).parent().removeClass('modal-parent');
			flag = false;
	})

	//Slider
	$('.single-item').slick({
		infinite: true,
	    dots: false,
	    аccessibility: true,
	    autoplay: true,
	    adaptiveHeight: true,
	    speed: 1000
	});
});
